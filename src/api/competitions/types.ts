export interface CreateCompetitionData {
  name: string;
  beginDate: string;
  endDate: string;
  place: string;
  numberOfStages: number;
}

interface RefereeData {
  refereeId: number;
  workPerformed: string;
}

export interface CreateStageData {
  mainCollegium: RefereeData[];
  collegium: RefereeData[];
  stageNumber: number;
}

export interface StageResponse {
  competitionId: number;
  stageId: number;
}
