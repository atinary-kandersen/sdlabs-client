import { faker } from '@faker-js/faker';
import { Outlet, useLocation } from 'react-router';
import LinkTransparent from '../../../lib/common/components/LinkTransparent/LinkTransparent';
import DatasetList from '../../../lib/dataset/DatasetList';
import UploadDatasetBox from '../../../lib/dataset/UploadDatasetBox';
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
  const location = useLocation();

  return (
    <Page>
      <Page.Content>
        <div className="wa-stack wa-gap-2xl">
          <LinkTransparent to="mapping" state={{ backgroundPathname: location.pathname }}>
            <UploadDatasetBox />
          </LinkTransparent>
          <div className="wa-split">
            <div className="wa-cluster wa-gap-xl">
              <div className="wa-heading-m">Datasets</div>
              <div className="wa-cluster wa-gap-s">
                <div>
                  <wa-input type="text" clearable size="small" placeholder="Search datasets">
                    <wa-icon name="search" slot="prefix" appearance="regular"></wa-icon>
                  </wa-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DatasetList datasets={datasets} />

        <Outlet />
      </Page.Content>
    </Page>
  );
}
