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
  fullName: string;
  serialNumber: number;
  sportsRank: string;
}

export interface CompetitionJudge extends Judge {
  work: string;
}
