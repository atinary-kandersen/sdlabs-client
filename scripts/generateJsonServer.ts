import { faker } from '@faker-js/faker';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Experiment, FakeDataset, FakeUser } from '../src/global';

const filePath = resolve(process.cwd(), 'dev/json-server.json');
console.log(filePath);

const users = generateFakeUsers(10);
const datasets = generateFakeDatasets(20, users);
const experiments = generateExperiments(20);
const json = {
  users,
  datasets,
  experiments
};

writeFileSync(filePath, JSON.stringify(json, undefined, 2), 'utf-8');

function generateFakeUsers(count: number = 10): FakeUser[] {
  return faker.helpers.multiple(
    () => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      userId: faker.string.uuid()
    }),
    { count }
  );
}

function generateFakeDatasets(count: number = 10, users: FakeUser[]): FakeDataset[] {
  const fileExtensions = ['csv', 'xls', 'xml'];
  return faker.helpers.multiple(
    () => {
      const randomExtension = fileExtensions[Math.floor(Math.random() * 3)];
      return {
        id: crypto.randomUUID(),
        fileName: faker.system.commonFileName(randomExtension),
        type: randomExtension,
        bytes: Math.floor(Math.random() * 100000),
        created: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
        createdBy: Math.floor(Math.random() * users.length)
      };
    },
    { count }
  );
}

function generateExperiments(count: number = 10): Experiment[] {
  return faker.helpers.multiple(
    () => ({
      id: crypto.randomUUID(),
      name: faker.food.dish()
    }),
    { count }
  );
}
