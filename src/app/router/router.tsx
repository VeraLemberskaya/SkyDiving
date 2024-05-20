import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

import { AssistantLayout } from '@layouts/assistant-layout';
import { AdminLayout } from '@layouts/admin-layout';
import { routes } from '@constants/routes';

const Login = lazy(() => import('@pages/login'));
const NewCompetition = lazy(() => import('@pages/new-competition'));
const CompetitionReferees = lazy(() => import('@pages/competition-referees'));
const ManageParticipants = lazy(() => import('@pages/manage-participants'));
const CompetitionParticipants = lazy(
  () => import('@pages/competition-participants'),
);
const UserManagement = lazy(() => import('@pages/user-management'));
const Competitions = lazy(() => import('@pages/competitions'));
const Competition = lazy(() => import('@pages/competition'));

const {
  LOGIN,
  NEW_COMPETITION,
  COMPETITION_REFEREES,
  USER_MANAGEMENT,
  COMPETITION_PARTICIPANTS,
  PARTICIPANTS,
  COMPETITIONS,
  COMPETITION,
} = routes;

export const Router = () => {
  return (
    <Suspense fallback={<Spin fullscreen size="large" />}>
      <Routes>
        <Route element={<Login />} path={LOGIN} />
        <Route element={<AssistantLayout />}>
          <Route element={<NewCompetition />} path={NEW_COMPETITION} />
          <Route
            element={<CompetitionReferees />}
            path={COMPETITION_REFEREES}
          />
          <Route element={<Competitions />} path={COMPETITIONS} />
          <Route
            element={<CompetitionParticipants />}
            path={COMPETITION_PARTICIPANTS}
          />
          <Route element={<ManageParticipants />} path={PARTICIPANTS} />
          <Route element={<Competition />} path={COMPETITION} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route element={<UserManagement />} path={USER_MANAGEMENT} />
        </Route>
      </Routes>
    </Suspense>
  );
};
