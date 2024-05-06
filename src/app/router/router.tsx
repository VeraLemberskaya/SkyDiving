import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

import { AssistantLayout } from '@layouts/assistant-layout';
import { routes } from '@constants/routes';

const Login = lazy(() => import('@pages/login'));
const NewCompetition = lazy(() => import('@pages/new-competition'));
const CompetitionJudges = lazy(() => import('@pages/competition-judges'));
const CompetitionParticipants = lazy(
  () => import('@pages/competition-participants'),
);

const { LOGIN, NEW_COMPETITION, COMPETITION_JUDGES, COMPETITION_PARTICIPANTS } =
  routes;

export const Router = () => {
  return (
    <Suspense fallback={<Spin fullscreen size="large" />}>
      <Routes>
        <Route element={<Login />} path={LOGIN} />
        <Route element={<AssistantLayout />}>
          <Route element={<NewCompetition />} path={NEW_COMPETITION} />
          <Route element={<CompetitionJudges />} path={COMPETITION_JUDGES} />
          <Route
            element={<CompetitionParticipants />}
            path={COMPETITION_PARTICIPANTS}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
