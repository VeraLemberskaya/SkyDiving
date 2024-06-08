import { Navigate } from 'react-router-dom';

import { useAuthStore } from '@app/auth';
import { Role } from '@api/types';
import { routes } from '@constants/routes';

export const Home = () => {
  const role = useAuthStore((state) => state.role);

  if (role === Role.ADMIN)
    return <Navigate replace to={routes.USER_MANAGEMENT} />;

  if (role === Role.SECRETARY) {
    return <Navigate replace to={routes.COMPETITIONS} />;
  }

  if (role === Role.REFEREE) {
    return <Navigate replace to={routes.COMPETITIONS_REFEREEING} />;
  }

  return null;
};
