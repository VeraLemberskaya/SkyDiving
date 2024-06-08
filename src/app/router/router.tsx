import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

import { Home } from '@pages/home';
import { AssistantLayout } from '@layouts/assistant-layout';
import { AdminLayout } from '@layouts/admin-layout';
import { RefereeLayout } from '@layouts/referee-layout';
import { Role } from '@api/types';
import { routes } from '@constants/routes';

import { AuthRoute, GuestRoute } from './guards';

const Login = lazy(() => import('@pages/login'));
const NewCompetition = lazy(() => import('@pages/new-competition'));
const CompetitionReferees = lazy(() => import('@pages/competition-referees'));
const ManageParticipants = lazy(() => import('@pages/manage-participants'));
const CompetitionParticipants = lazy(
  () => import('@pages/competition-participants'),
);
const UserManagement = lazy(() => import('@pages/user-management'));
const Competitions = lazy(() => import('@pages/competitions'));
const CompetitionsRefereeing = lazy(
  () => import('@pages/competition-refereeing'),
);
const Timing = lazy(() => import('@pages/timing'));
const Competition = lazy(() => import('@pages/competition'));
const Penalty = lazy(() => import('@pages/penalty'));

const {
  LOGIN,
  NEW_COMPETITION,
  COMPETITION_REFEREES,
  USER_MANAGEMENT,
  COMPETITION_PARTICIPANTS,
  PARTICIPANTS,
  COMPETITIONS,
  COMPETITIONS_REFEREEING,
  REFEREEING_TIMER,
  COMPETITION,
  PENALTY,
} = routes;

export const Router = () => {
  return (
    <Suspense fallback={<Spin fullscreen size="large" />}>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route element={<Login />} path={LOGIN} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route element={<Home />} path="/" />
        </Route>

        <Route element={<AuthRoute roles={[Role.SECRETARY]} />}>
          <Route element={<AssistantLayout />}>
            <Route element={<NewCompetition />} path={NEW_COMPETITION} />
            <Route element={<ManageParticipants />} path={PARTICIPANTS} />
            <Route element={<Competitions />} path={COMPETITIONS} />
            <Route element={<Competition />} path={COMPETITION} />
            <Route
              element={<CompetitionReferees />}
              path={COMPETITION_REFEREES}
            />
            <Route
              element={<CompetitionParticipants />}
              path={COMPETITION_PARTICIPANTS}
            />
          </Route>
        </Route>

        <Route element={<AuthRoute roles={[Role.ADMIN]} />}>
          <Route element={<AdminLayout />}>
            <Route element={<UserManagement />} path={USER_MANAGEMENT} />
          </Route>
        </Route>

        <Route element={<AuthRoute roles={[Role.REFEREE]} />}>
          <Route element={<RefereeLayout />}>
            <Route
              element={<CompetitionsRefereeing />}
              path={COMPETITIONS_REFEREEING}
            />
            <Route element={<Timing />} path={REFEREEING_TIMER} />
            <Route element={<Penalty />} path={PENALTY} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
