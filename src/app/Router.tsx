import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import App from './App.tsx';
import DatasetDetailsRoute from './routes/datasets/DatasetDetailsRoute.tsx';
import CreateExperimentRoute from './routes/experiment/CreateExperiment/CreateExperimentRoute.tsx';
import EditParameterRoute from './routes/experiment/CreateExperiment/EditParameterRoute.tsx';
import ParameterListRoute from './routes/experiment/CreateExperiment/ParameterListRoute.tsx';
import ExperimentHomeRoute from './routes/experiment/ExperimentHomeRoute.tsx';
import ExperimentInsightsRoute from './routes/experiment/ExperimentInsightsRoute.tsx';
import ExperimentListRoute from './routes/experiment/ExperimentListRoute.tsx';
import HomeRoute from './routes/home/HomeRoute.tsx';

const ExperimentDetailsRoute = React.lazy(() => import('./routes/experiment/ExperimentDetailsRoute.tsx'));
const DatasetListRoute = React.lazy(() => import('./routes/datasets/DatasetListRoute.tsx'));
const AnalyticsRoute = React.lazy(() => import('./routes/analytics/AnalyticsRoute.tsx'));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeRoute />} />
        <Route path="datasets">
          <Route index element={<DatasetListRoute />} />
          <Route path=":datasetId" element={<DatasetDetailsRoute />} />
        </Route>
        <Route path="settings" element={<h1>Settings</h1>} />
        <Route path="documentation" element={<h1>Documentation</h1>} />
        <Route path="user" element={<h1>User</h1>} />
        <Route path="analytics" element={<AnalyticsRoute />} />
        <Route path="experiments" element={<ExperimentListRoute />} />
        <Route path="experiments/create" element={<CreateExperimentRoute />}>
          <Route index element={<Navigate to="parameters" replace />} />
          <Route path="parameters">
            <Route index element={<ParameterListRoute />} />
            <Route path=":parameterId" element={<EditParameterRoute />} />
          </Route>
          <Route path="objectives">
            <Route index element={<h1>Objectives</h1>} />
            <Route path=":objectiveId" element={<h1>EditObjectives</h1>} />
          </Route>
          <Route path="constraints">
            <Route index element={<h1>Constraints</h1>} />
            <Route path=":objectiveId" element={<h1>EditConstraints</h1>} />
          </Route>
          <Route path="batches" element={<h1>Batches</h1>} />
          <Route path="summary" element={<h1>Summary</h1>} />
        </Route>
        <Route path="experiments/:experimentId" element={<ExperimentDetailsRoute />}>
          <Route index element={<ExperimentHomeRoute />} />
          <Route path="insights" element={<ExperimentInsightsRoute />} />
          <Route path="history" element={<h1>History</h1>} />
          <Route path="parameters" element={<h1>Parameters</h1>} />
          <Route path="objectives" element={<h1>Objectives</h1>} />
          <Route path="constraints" element={<h1>Constraints</h1>} />
          <Route path="batching" element={<h1>Batching</h1>} />
          <Route path="optimizer" element={<h1>Optimizer</h1>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
