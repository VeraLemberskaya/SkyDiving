export interface Referee {
  id: number;
  firstName: number;
  secondName: number;
  patronymic: number;
  category: string | null;
}

export interface CompetitionReferee extends Referee {
  workPerformed: string;
}

export interface RefereesCollegiums {
  mainCollegium: CompetitionReferee[];
  collegium: CompetitionReferee[];
}

export interface DeleteRefereeFromStageParams {
  refereeId: number;
  stageId: number;
}
