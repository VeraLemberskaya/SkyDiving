export const routes = {
  LOGIN: 'login',
  NEW_COMPETITION: '/new-competition',
  COMPETITION_JUDGES: '/competition/:id/judges',
};

export const getCompetitionJudgesRoute = (id: number) =>
  `/competition/${id}/judges`;
