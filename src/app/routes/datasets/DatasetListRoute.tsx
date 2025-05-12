import { faker } from '@faker-js/faker';
import { ScrollArea, SegmentedControl } from '@mantine/core';
import { useNavigate } from 'react-router';
import DatasetDropzone from '../../../lib/dataset/DatasetDropzone/DatasetDropzone';
import DatasetList from '../../../lib/dataset/DatasetList';
import { Page } from '../../components/page/Page';

export type FakeUser = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};

export function fakeUser(): FakeUser {
  return {
    userId: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  };
}

const fakeUsers = faker.helpers.multiple(fakeUser, {
  count: 5
});

const generateRandomFileName = (extension: string) => {
  const randomString = Math.random().toString(36).substring(2, 8);
  return `File_${randomString}.${extension}`;
};

const datasets = Array.from({ length: 10 }).map(() => {
  const randomExtension = ['csv', 'xls', 'xml'][Math.floor(Math.random() * 3)];
  return {
    id: faker.string.uuid(),
    name: generateRandomFileName(randomExtension),
    type: randomExtension,
    bytes: Math.floor(Math.random() * 100000),
    created: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    addedBy: fakeUsers[Math.floor(Math.random() * fakeUsers.length)]
  };
});

export default function DatasetListRoute() {
  const navigate = useNavigate();

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
