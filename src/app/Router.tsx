import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import ExperimentDetailsPage from './pages/ExperimentDetailsPage.tsx';
import ExperimentsPage from './pages/ExperimentsPage.tsx';
import HomePage from './pages/HomePage.tsx';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="experiments" element={<ExperimentsPage />} />
        <Route path="datasets" element={<h4>Datasets</h4>} />
        <Route path="analytics" element={<h4>Analytics</h4>} />
        <Route
          path="experiments/:experimentId"
          element={<ExperimentDetailsPage />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
