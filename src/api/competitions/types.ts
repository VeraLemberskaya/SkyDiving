export interface CompetitionData {
  name: string;
  beginDate: string;
  endDate: string;
  place: string;
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
