import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import App from './components/App/App.tsx';
import HomeRoute from './routes/home/HomeRoute.tsx';

const CreateExperimentRoute = React.lazy(() => import('./routes/experiment/CreateExperiment/CreateExperimentRoute.tsx'));
const ExperimentListRoute = React.lazy(() => import('./routes/experiment/ExperimentListRoute.tsx'));
const ExperimentDetailsRoute = React.lazy(() => import('./routes/experiment/ExperimentDetailsRoute.tsx'));
const ExperimentHomeRoute = React.lazy(() => import('./routes/experiment/ExperimentHomeRoute.tsx'));
const ExperimentHistoryRoute = React.lazy(() => import('./routes/experiment/ExperimentHistoryRoute.tsx'));
const ExperimentInsightsRoute = React.lazy(() => import('./routes/experiment/ExperimentInsightsRoute.tsx'));
const ParameterListRoute = React.lazy(() => import('./routes/experiment/CreateExperiment/ParameterListRoute.tsx'));
const EditParameterRoute = React.lazy(() => import('./routes/experiment/CreateExperiment/EditParameterRoute.tsx'));
const DatasetListRoute = React.lazy(() => import('./routes/datasets/DatasetListRoute.tsx'));
const DatasetDetailsRoute = React.lazy(() => import('./routes/datasets/DatasetDetailsRoute.tsx'));
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
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<ExperimentHomeRoute />} />
          <Route path="insights" element={<ExperimentInsightsRoute />} />
          <Route path="history" element={<ExperimentHistoryRoute />} />
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
