export const routes = {
  LOGIN: 'login',
  NEW_COMPETITION: '/new-competition',
  COMPETITION_JUDGES: '/competition/:id/judges',
  COMPETITION_PARTICIPANTS: '/competition/:id/participants',
  COMPETITION_JUDGES_BY_ID: (id: number) => `/competition/${id}/judges`,
};
