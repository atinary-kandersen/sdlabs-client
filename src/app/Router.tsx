import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import ExperimentsPage from './pages/experiment/ExperimentsPage.tsx';
import HomePage from './pages/home/HomePage.tsx';

const ExperimentDetailsPage = React.lazy(
  () => import('./pages/experiment/ExperimentDetailsPage.tsx')
);
const DatasetsPage = React.lazy(
  () => import('./pages/datasets/DatasetsPage.tsx')
);
const AnalyticsPage = React.lazy(
  () => import('./pages/analytics/AnalyticsPage.tsx')
);

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="experiments" element={<ExperimentsPage />} />
        <Route path="datasets" element={<DatasetsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route
          path="experiments/:experimentId"
          element={<ExperimentDetailsPage />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
