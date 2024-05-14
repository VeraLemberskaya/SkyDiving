import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

import { AssistantLayout } from '@layouts/assistant-layout';
import { AdminLayout } from '@layouts/admin-layout';
import { routes } from '@constants/routes';

const Login = lazy(() => import('@pages/login'));
const NewCompetition = lazy(() => import('@pages/new-competition'));
const CompetitionJudges = lazy(() => import('@pages/competition-referees'));
const ManageParticipants = lazy(() => import('@pages/manage-participants'));
const CompetitionParticipants = lazy(
  () => import('@pages/competition-participants'),
);
const UserManagement = lazy(() => import('@pages/user-management'));

const {
  LOGIN,
  NEW_COMPETITION,
  COMPETITION_JUDGES,
  USER_MANAGEMENT,
  COMPETITION_PARTICIPANTS,
  PARTICIPANTS,
} = routes;

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
          <Route element={<ManageParticipants />} path={PARTICIPANTS} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route element={<UserManagement />} path={USER_MANAGEMENT} />
        </Route>
      </Routes>
    </Suspense>
  );
};
