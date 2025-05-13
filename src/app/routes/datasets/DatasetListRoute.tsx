import { ScrollArea, SegmentedControl } from '@mantine/core';
import { useNavigate } from 'react-router';
import { FakeUser } from '../../../global';
import DatasetDropzone from '../../../lib/dataset/DatasetDropzone/DatasetDropzone';
import DatasetList from '../../../lib/dataset/DatasetList';
import { Page } from '../../components/page/Page';
import { useUsers } from '../../queries/user';

const generateRandomFileName = (extension: string) => {
  const randomString = Math.random().toString(36).substring(2, 8);
  return `File_${randomString}.${extension}`;
};

const creteFakeDatasets = (users: FakeUser[]) =>
  Array.from({ length: 10 }).map(() => {
    const randomExtension = ['csv', 'xls', 'xml'][Math.floor(Math.random() * 3)];
    return {
      id: crypto.randomUUID(),
      name: generateRandomFileName(randomExtension),
      type: randomExtension,
      bytes: Math.floor(Math.random() * 100000),
      created: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
      addedBy: users[Math.floor(Math.random() * users.length)]
    };
  });

export default function DatasetListRoute() {
  const navigate = useNavigate();
  const usersQuery = useUsers();

  if (usersQuery.isLoading) {
    return <div>Loading...</div>;
  } else if (usersQuery.isError || !usersQuery.data) {
    return <div>Error: {usersQuery.error}</div>;
  }

  const datasets = creteFakeDatasets(usersQuery.data);

  return (
    <Page>
      <Page.Content>
        <div className="wa-stack wa-gap-2xl">
          <div className="wa-cluster">
            <h2>Datasets</h2>
            <SegmentedControl data={['All', 'Mine']} value="All" />
          </div>
          <ScrollArea h="calc(100vh - 300px)">
            <DatasetList datasets={datasets} />
          </ScrollArea>
          <DatasetDropzone onDrop={() => navigate('create')} />
        </div>
      </Page.Content>
    </Page>
  );
}
