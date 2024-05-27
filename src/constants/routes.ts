export const routes = {
  HOME: '/',
  LOGIN: '/login',
  NEW_COMPETITION: '/competition/new',
  COMPETITION_REFEREES: '/competition/:id/referees',
  COMPETITION: '/competition/:id',
  COMPETITION_PARTICIPANTS: '/competition/:id/participants',
  COMPETITIONS: '/competition/list',
  USER_MANAGEMENT: '/user-management',
  PARTICIPANTS: '/participants',
  COMPETITION_BY_ID: (id: number) => `/competition/${id}`,
  COMPETITION_REFEREES_BY_ID: (id: number) => `/competition/${id}/referees`,
};
