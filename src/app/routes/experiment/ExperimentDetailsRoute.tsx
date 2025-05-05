import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router';
import ExperimentDetailsHeader from '../../../lib/experiment/ExperimentDetailsHeader';
import { Page } from '../../components/page/Page';
import socket from '../../config/socket';
import { useExperimentDetails } from '../../queries/experiment';
// import { useExperimentsStore } from '../../state/store';

const configurationNavPaths = ['parameters', 'objectives', 'constraints', 'batching', 'optimizer'];
type ConfigurationNav = (typeof configurationNavPaths)[number];

export default function ExperimentDetailsRoute() {
  const experimentId = useParams<{ experimentId: string }>().experimentId!;
  const query = useExperimentDetails(experimentId);
  // const update = useExperimentsStore().get(experimentId);
  const navigate = useNavigate();
  const location = useLocation();
  const [configurationNav, setConfigurationNav] = useState<null | ConfigurationNav>();

  useEffect(() => {
    if (query.data) {
      // Simulate server sending experimentUpdate event.
      socket.emit('experimentUpdate', {
        experimentId,
        progress: 60
      });
    }
  }, [query.data]);

  useEffect(() => {
    const subPath = location.pathname.substring(location.pathname.indexOf(experimentId) + experimentId.length + 1);
    setConfigurationNav(configurationNavPaths.includes(subPath) ? subPath : null);
  }, [location]);

  const onSelectConfigurationNav = (event: CustomEvent) => {
    const selected = event.detail.item.value;
    navigate(selected);
  };

  if (query.isLoading) {
    return <wa-spinner style={{ fontSize: '3rem' }}></wa-spinner>;
  } else if (!query.data) {
    return <h4>Error loading experiment</h4>;
  }

  const experimentDetails = query.data;

  return (
    <Page>
      <Page.Header>
        <ExperimentDetailsHeader name={experimentDetails.name} />
      </Page.Header>
      <Page.Nav>
        <NavLink to="" end>
          Home
        </NavLink>
        <NavLink to="insights">Insights</NavLink>
        <NavLink to="history">History</NavLink>
        <wa-dropdown>
          <wa-button
            appearance="plain"
            slot="trigger"
            caret
            data-active={configurationNav !== null}
            className={classNames({ active: configurationNav !== null })}
            style={{ minWidth: 160 }}
          >
            <span style={{ textTransform: 'capitalize' }}>{configurationNav ?? 'Configuration'}</span>
          </wa-button>
          <wa-menu onwa-select={onSelectConfigurationNav}>
            {configurationNavPaths.map(path => (
              <wa-menu-item key={path} value={path}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </wa-menu-item>
            ))}
          </wa-menu>
        </wa-dropdown>
      </Page.Nav>
      <Page.Content>
        <Outlet />
      </Page.Content>
    </Page>
  );
}
