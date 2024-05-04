import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

export const breadcrumbItems = [
  {
    title: <Link to={routes.NEW_COMPETITION}>Соревнование</Link>,
  },
  {
    title: 'Судейская коллегия',
  },
];
