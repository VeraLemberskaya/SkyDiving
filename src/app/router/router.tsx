import { Route, Routes } from 'react-router-dom';

import { Login } from '@pages/login';
import { routes } from '@constants/routes';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Login />} path={routes.LOGIN} />
    </Routes>
  );
};
