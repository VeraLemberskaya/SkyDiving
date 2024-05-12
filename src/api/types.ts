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

export interface Judge {
  id: number;
  serialNumber: number;
  fullName: string;
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

export interface CompetitionJudge extends Judge {
  work: string;
}

export type Gender = 'male' | 'female';
