import { faker } from '@faker-js/faker';
import { Group, Stack, Text } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useNavigate } from 'react-router';
import DatasetList from '../../../lib/dataset/DatasetList';
import { Page } from '../../components/page/Page';

export function fakeUser() {
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
        <Stack gap="xl">
          <Dropzone
            onDrop={() => navigate('mapping')}
            accept={[MIME_TYPES.csv]}
            maxSize={5 * 1024 ** 2}
            style={{ cursor: 'pointer', background: 'var(--mantine-color-blue-0)', borderWidth: 2 }}
          >
            <Group justify="center" gap="xl" mih={150} style={{ pointerEvents: 'none' }}>
              <wa-icon name="upload" color="var(--mantine-color-gray-5)" />
              <Stack gap="0.3rem">
                <Text size="xl" inline>
                  Drag your dataset here or click to select files
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed 5mb
                </Text>
              </Stack>
            </Group>
          </Dropzone>

          <DatasetList datasets={datasets} />
        </Stack>
      </Page.Content>
    </Page>
  );
}
