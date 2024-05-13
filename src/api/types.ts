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
}

export interface CompetitionJudge extends Judge {
  work: string;
}

export interface Credential {
  login: string;
  password: string;
}
