import { NavLink } from 'react-router';
import { PageNav } from '../../app/components/page/Page';

export default function ExperimentNavigation({
  selectedConfigurationPath,
  onSelectedConfigurationPath
}: {
  selectedConfigurationPath: string | null;
  onSelectedConfigurationPath: (nav: string) => void;
}) {
  return (
    <PageNav>
      <NavLink to="" end>
        Overview
      </NavLink>
      <NavLink to="insights">Insights</NavLink>
      <NavLink to="history">History</NavLink>
      <NavLink to="history">Configuration</NavLink>
      {/* <wa-dropdown>
        <wa-button
          appearance="plain"
          slot="trigger"
          caret
          data-active={selectedConfigurationPath !== null}
          className={classNames({ active: selectedConfigurationPath !== null })}
          style={{ minWidth: 160 }}
        >
          <span style={{ textTransform: 'capitalize' }}>{selectedConfigurationPath ?? 'Configuration'}</span>
        </wa-button>
        <wa-menu onwa-select={(event: CustomEvent) => onSelectedConfigurationPath(event.detail.item.value)}>
          <wa-menu-item value="parameters">Parameters</wa-menu-item>
          <wa-menu-item value="objectives">Objectives</wa-menu-item>
          <wa-menu-item value="constraints">Constraints</wa-menu-item>
          <wa-menu-item value="batching">Batching</wa-menu-item>
          <wa-menu-item value="optimizer">Optimizer</wa-menu-item>
        </wa-menu>
      </wa-dropdown> */}
    </PageNav>
  );
}
