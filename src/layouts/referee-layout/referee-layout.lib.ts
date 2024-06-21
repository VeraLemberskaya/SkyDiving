import { matchPath } from 'react-router-dom';

import { routes } from '@constants/routes';

const COMPETITION_REFEREEING_ROUTES = [
  routes.COMPETITIONS_REFEREEING,
  routes.REFEREEING_TIMER,
  routes.PENALTY,
];

export const getSelectedKey = (pathname: string) => {
  const isCompetitionRefereeingPage = COMPETITION_REFEREEING_ROUTES.some(
    (route) => matchPath(route, pathname),
  );

  if (isCompetitionRefereeingPage) return 'competitions-refereeing';

  return undefined;
};
