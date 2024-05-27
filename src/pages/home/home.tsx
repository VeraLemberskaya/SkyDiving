import { Navigate } from 'react-router-dom';

import { useAuthStore } from '@app/store';
import { Role } from '@api/types';
import { routes } from '@constants/routes';

export const Home = () => {
  const userRole = useAuthStore((state) => state.role);

  if (userRole === Role.ADMIN)
    return <Navigate replace to={routes.USER_MANAGEMENT} />;

  if (userRole === Role.SECRETARY) {
    return <Navigate replace to={routes.COMPETITIONS} />;
  }

  return null;
};
