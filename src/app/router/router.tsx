import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

import { AssistantLayout } from '@layouts/assistant-layout';
import { routes } from '@constants/routes';

const Login = lazy(() => import('@pages/login'));
const NewCompetition = lazy(() => import('@pages/new-competition'));
const AddCompetitionJudges = lazy(
  () => import('@pages/add-competition-judges'),
);

const { LOGIN, NEW_COMPETITION, COMPETITION_JUDGES } = routes;

export const Router = () => {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Routes>
        <Route element={<Login />} path={LOGIN} />
        <Route element={<AssistantLayout />}>
          <Route element={<NewCompetition />} path={NEW_COMPETITION} />
          <Route element={<AddCompetitionJudges />} path={COMPETITION_JUDGES} />
        </Route>
      </Routes>
    </Suspense>
  );
};
