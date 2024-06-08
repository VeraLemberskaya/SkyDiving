import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore, useCurrentUser } from '@app/store';
import { Role } from '@api/types';
import { routes } from '@constants/routes';

interface AuthRouteProps {
  roles?: Role[];
}

export const AuthRoute = ({ roles }: AuthRouteProps) => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const { data, isSuccess } = useCurrentUser();

  const checkUserRole = () => {
    if (isSuccess) {
      const userRole = data.role;
      return roles ? roles.includes(userRole) : true;
    }

    return true;
  };

  if (!isLogin || !checkUserRole()) {
    return <Navigate replace to={routes.LOGIN} />;
  }

  return <Outlet />;
};
