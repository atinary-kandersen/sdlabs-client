import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router';
import ConfigureManuallyBox from '../../components/home/ConfigManuallyBox/ConfigureManuallyBox';
import { Hero } from '../../components/home/Hero/Hero';
import UploadBox from '../../components/home/UploadBox/UploadBox';
import { Page } from '../../components/page/Page';

export default function HomeRoute() {
  const navigate = useNavigate();

  return (
    <Page>
      <Page.Content center>
        <div className="wa-align-items-center wa-stack wa-gap-3xl">
          <Hero />
          <div className="wa-gap-3xl">
            <div style={{ maxWidth: 600 }}>
              <UploadBox onClick={() => navigate(`/datasets/${faker.string.ulid()}`)} />
            </div>
            <div style={{ maxWidth: 600 }}>
              <ConfigureManuallyBox onClick={() => navigate('experiments/create')} />
            </div>
          </div>
        </div>
      </Page.Content>
    </Page>
  );
}
