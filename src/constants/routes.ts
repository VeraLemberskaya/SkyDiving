export const routes = {
  LOGIN: '/login',
  NEW_COMPETITION: '/new-competition',
  COMPETITION_REFEREES: '/competition/:id/referees',
  COMPETITION: '/competition/:id',
  COMPETITION_PARTICIPANTS: '/competition/:id/participants',
  USER_MANAGEMENT: '/user-management',
  PARTICIPANTS: '/participants',
  COMPETITIONS: '/competitions',
  COMPETITIONS_REFEREEING: '/competitions-refereeing',
  REFEREEING_TIMER: '/timing',
  COMPETITION_BY_ID: (id: number) => `/competition/${id}`,
  COMPETITION_REFEREES_BY_ID: (id: number) => `/competition/${id}/referees`,
};
