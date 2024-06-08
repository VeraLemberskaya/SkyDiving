import { matchPath } from 'react-router-dom';

import { routes } from '@constants/routes';

const COMPETITION_ROUTES = [
  routes.NEW_COMPETITION,
  routes.COMPETITION,
  routes.COMPETITION_REFEREES,
  routes.COMPETITION_PARTICIPANTS,
  routes.COMPETITIONS,
];

export const getSelectedKey = (pathname: string) => {
  const isCompetitionPage = COMPETITION_ROUTES.some((route) =>
    matchPath(route, pathname),
  );
  const isParticipantsPage = matchPath(routes.PARTICIPANTS, pathname);

  if (isCompetitionPage) return 'competitions';
  if (isParticipantsPage) return 'participants';

  return undefined;
};
