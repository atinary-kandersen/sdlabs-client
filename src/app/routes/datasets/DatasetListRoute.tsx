import { ScrollArea, SegmentedControl } from '@mantine/core';
import { Suspense } from 'react';
import { useNavigate } from 'react-router';
import Loading from '../../../lib/common/components/Loading/Loading';
import DatasetDropzone from '../../../lib/dataset/DatasetDropzone/DatasetDropzone';
import DatasetList from '../../../lib/dataset/DatasetList';
import { Page } from '../../components/page/Page';
import { useDatasets } from '../../queries/datasets';

export default function DatasetListRoute() {
  const navigate = useNavigate();
  const datasets = useDatasets();

  return (
    <Page>
      <Page.Content>
        <div className="wa-stack wa-gap-2xl">
          <div className="wa-cluster">
            <h2>Datasets</h2>
            <SegmentedControl data={['All', 'Mine']} value="All" />
          </div>
          <Suspense fallback={<Loading />}>
            <ScrollArea h="calc(100vh - 300px)">
              <DatasetList datasets={datasets.data} />
            </ScrollArea>
            <DatasetDropzone onDrop={() => navigate('create')} />
          </Suspense>
        </div>
      </Page.Content>
    </Page>
  );
}
