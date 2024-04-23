import { Route, Routes } from 'react-router-dom';

import { Login } from '@pages/login';
import { NewCompetition } from '@pages/new-competition';
import { AssistantLayout } from '@layouts/assistant-layout';
import { routes } from '@constants/routes';

const { LOGIN, NEW_COMPETITION } = routes;

export const Router = () => {
  return (
    <Routes>
      <Route element={<Login />} path={LOGIN} />
      <Route element={<AssistantLayout />}>
        <Route element={<NewCompetition />} path={NEW_COMPETITION} />
      </Route>
    </Routes>
  );
};
