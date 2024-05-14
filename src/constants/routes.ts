export const routes = {
  LOGIN: '/login',
  NEW_COMPETITION: '/new-competition',
  COMPETITION_JUDGES: '/competition/:id/referees',
  COMPETITION_PARTICIPANTS: '/competition/:id/participants',
  USER_MANAGEMENT: '/user-management',
  PARTICIPANTS: '/participants',
  COMPETITION_JUDGES_BY_ID: (id: number) => `/competition/${id}/referees`,
};
