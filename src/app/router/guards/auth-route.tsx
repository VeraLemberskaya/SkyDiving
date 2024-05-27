import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '@app/store';
import { Role } from '@api/types';
import { routes } from '@constants/routes';

interface AuthRouteProps {
  roles?: Role[];
}

export const AuthRoute = ({ roles }: AuthRouteProps) => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const userRole = useAuthStore((state) => state.role);

  if (isLogin && userRole) {
    const roleMatches = roles ? roles.includes(userRole) : true;

    if (roleMatches) {
      return <Outlet />;
    }
  }

  return <Navigate replace to={routes.LOGIN} />;
};
