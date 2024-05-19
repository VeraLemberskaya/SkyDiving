//TODO: temporary here

export interface Participant {
  id: number;
  fullName: string;
}

export interface Team {
  id: number;
  name: string;
  participants: Participant[];
}

export interface Referee {
  id: number;
  serialNumber: number;
  firstName: string;
  secondName: string;
  patronymic: string;
  category: string;
}

export interface Sportsman {
  id: number;
  firstName: string;
  secondName: string;
  patronymic: string;
  serialNumber: number;
  sportDegree: string;
  isInternal: boolean;
  gender: Gender;
}

export interface CompetitionReferee extends Referee {
  work: string;
}

export type Gender = 'male' | 'female';

export interface Competition {
  id: number;
  name: string;
  beginDate: string;
  endDate: string;
  place: string;
  numberOfStages: number;
}
