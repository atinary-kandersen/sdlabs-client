import { AreaChart, CompositeChart, LineChart, ScatterChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import { ActionIcon, Menu, Title } from '@mantine/core';
import type { ReactNode } from 'react';
import { Page } from '../../components/page/Page';
import { generateRandomDataPoints } from './data';

function downloadFile(filename: string) {
  const filePath = `./download/${filename}`;
  const link = document.createElement('a');
  link.setAttribute('href', filePath);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
}

export default function AnalyticsRoute() {
  const gap = 'max(4vw, 5rem)';
  const width = `calc(100% / 2 - ${gap})`;
  const height = 500;

  return (
    <Page>
      <Page.Content>
        <div className="wa-cluster" style={{ gap }}>
          <ChartWrapper width={width} height={height} title="LineChart title">
            <LineChart
              w="100%"
              h="100%"
              data={generateRandomDataPoints(15)}
              dataKey="date"
              series={[
                { name: 'Apples', color: 'indigo.6' },
                { name: 'Oranges', color: 'blue.6' },
                { name: 'Tomatoes', color: 'teal.6' }
              ]}
              curveType="natural"
            />
          </ChartWrapper>
          <ChartWrapper width={width} height={height} title="AreaChart title">
            <AreaChart
              w="100%"
              h="100%"
              data={generateRandomDataPoints(15)}
              dataKey="date"
              type="stacked"
              series={[
                { name: 'Apples', color: 'indigo.6' },
                { name: 'Oranges', color: 'blue.6' },
                { name: 'Tomatoes', color: 'teal.6' }
              ]}
            />
          </ChartWrapper>
          <ChartWrapper width={width} height={height} title="CompositeChart title">
            <CompositeChart
              w="100%"
              h="100%"
              data={generateRandomDataPoints(15)}
              dataKey="date"
              maxBarWidth={30}
              series={[
                { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
                { name: 'Apples', color: 'red.8', type: 'line' },
                { name: 'Oranges', color: 'yellow.8', type: 'area' }
              ]}
              curveType="natural"
            />
          </ChartWrapper>
          <ChartWrapper width={width} height={height} title="CompositeChart title">
            <ScatterChart
              w="100%"
              h="100%"
              dataKey={{ x: 'age', y: 'BMI' }}
              xAxisLabel="Age"
              yAxisLabel="BMI"
              pointLabels="x"
              data={[
                {
                  color: 'blue.5',
                  name: 'Group 1',
                  data: [
                    { age: 25, BMI: 20 },
                    { age: 30, BMI: 22 },
                    { age: 35, BMI: 18 },
                    { age: 40, BMI: 25 },
                    { age: 45, BMI: 30 },
                    { age: 28, BMI: 15 },
                    { age: 22, BMI: 12 },
                    { age: 50, BMI: 28 },
                    { age: 32, BMI: 19 },
                    { age: 48, BMI: 31 },
                    { age: 26, BMI: 24 },
                    { age: 38, BMI: 27 },
                    { age: 42, BMI: 29 },
                    { age: 29, BMI: 16 },
                    { age: 34, BMI: 23 },
                    { age: 44, BMI: 33 },
                    { age: 23, BMI: 14 },
                    { age: 37, BMI: 26 },
                    { age: 49, BMI: 34 },
                    { age: 27, BMI: 17 },
                    { age: 41, BMI: 32 },
                    { age: 31, BMI: 21 },
                    { age: 46, BMI: 35 },
                    { age: 24, BMI: 13 },
                    { age: 33, BMI: 22 },
                    { age: 39, BMI: 28 },
                    { age: 47, BMI: 30 },
                    { age: 36, BMI: 25 },
                    { age: 43, BMI: 29 },
                    { age: 21, BMI: 11 }
                  ]
                }
              ]}
            />
          </ChartWrapper>
        </div>
      </Page.Content>
    </Page>
  );
}

function ChartMenu() {
  return (
    <Menu shadow="md">
      <Menu.Target>
        <ActionIcon variant="subtle" aria-label="Settings" color="gray.6">
          <wa-icon name="cog"></wa-icon>
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Export</Menu.Label>
        <Menu.Item
          onClick={() => downloadFile('data.csv')}
          leftSection={<wa-icon name="file-csv" variant="regular" style={{ color: 'gray' }}></wa-icon>}
        >
          CSV
        </Menu.Item>
        <Menu.Item
          onClick={() => downloadFile('chart_line.xlsx')}
          leftSection={<wa-icon name="file-excel" variant="regular" style={{ color: 'gray' }}></wa-icon>}
        >
          Excel
        </Menu.Item>
        <Menu.Item
          onClick={() => downloadFile('generated_heatmap.ipynb')}
          leftSection={<wa-icon name="file" variant="regular" style={{ color: 'gray' }}></wa-icon>}
        >
          Jupyter
        </Menu.Item>
        <Menu.Item
          leftSection={<wa-icon name="file" variant="regular" style={{ color: 'gray' }}></wa-icon>}
          component="a"
          href="https://colab.research.google.com/drive/1bNDogP8xUgMSMZd_clN_UxFzTQu4610L?usp=sharing"
          target="_blank"
        >
          Colab
        </Menu.Item>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item leftSection={<wa-icon name="image" variant="regular" style={{ color: 'gray' }}></wa-icon>}>Image</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item leftSection={<wa-icon name="file-png" variant="regular" style={{ color: 'gray' }}></wa-icon>}>PNG</Menu.Item>
            <Menu.Item leftSection={<wa-icon name="file-svg" variant="regular" style={{ color: 'gray' }}></wa-icon>}>SVG</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}

function ChartWrapper({ children, width, height, title }: { children: ReactNode; width: string; height: number; title: string }) {
  return (
    <div className="wa-stack wa-gap-xl" style={{ width, height }}>
      <div className="wa-flank:end">
        <Title size="lg">{title}</Title>
        <ChartMenu />
      </div>
      {children}
    </div>
  );
}
