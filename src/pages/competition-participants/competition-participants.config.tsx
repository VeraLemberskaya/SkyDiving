import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

export const breadcrumbItems = [
  {
    title: <Link to={routes.NEW_COMPETITION}>Соревнование</Link>,
  },
  {
    title: (
      <Link to={routes.COMPETITION_REFEREES_BY_ID(1)}>Судейская коллегия</Link>
    ),
  },
  {
    title: 'Команды и участники',
  },
];
