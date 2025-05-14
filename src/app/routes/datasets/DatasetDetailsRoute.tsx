import { Button } from '@mantine/core';
import DatasetMapping from '../../../lib/dataset/Mapping/DatasetMapping';
import type { DatasetDefinition } from '../../../lib/dataset/Mapping/types';
import { Page } from '../../components/page/Page';

export default function DatasetDetailsRoute() {
  return (
    <Page>
      <Page.Content center>
        <div className="wa-cluster wa-gap-3xl wa-align-items-stretch" style={{ flex: 1 }}>
          <div style={{ flex: 2 }}>
            <DatasetMapping datasetDefinition={datasetDefinition} />
          </div>
          <div style={{ flex: 1 }}>
            <Button>Continue</Button>
          </div>
        </div>
      </Page.Content>
    </Page>
  );
}

const datasetDefinition: DatasetDefinition = [
  {
    columnName: 'status',
    columnType: 'unknown'
  },
  {
    columnName: 'iteration',
    columnType: 'unknown'
  },
  {
    columnName: 'batch_number',
    columnType: 'unknown'
  },
  {
    columnName: 'Cat A',
    columnType: 'unknown'
  },
  {
    columnName: 'Num X',
    columnType: 'unknown'
  },
  {
    columnName: 'Num Y',
    columnType: 'unknown'
  },
  {
    columnName: 'Num Z',
    columnType: 'unknown'
  },
  {
    columnName: 'quality',
    columnType: 'unknown'
  },
  {
    columnName: 'quantity',
    columnType: 'unknown'
  },
  {
    columnName: 'merit',
    columnType: 'unknown'
  },
  {
    columnName: 'updated_date',
    columnType: 'unknown'
  },
  {
    columnName: 'notes',
    columnType: 'unknown'
  }
];
