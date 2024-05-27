import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '@app/store';
import { routes } from '@constants/routes';

export const GuestRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);

  return isLogin ? <Navigate replace to={routes.HOME} /> : <Outlet />;
};
