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

export interface SkydivingClubMember
  extends Omit<Sportsman, 'sportDegree' | 'isInternal'> {
  birthDate: string;
  birthLocation?: string;
  employment?: string;
  education?: string;
  phone: string;
  passportSeries: string;
  passportNumber: string;
  passportPersonalNumber: string;
  issuingAuthority: string;
  issuingDate: string;
  sportActivityStartYear?: string;
  trainer?: string;
  sportDegree?: string;
  fatherFullName?: string;
  fatherJob?: string;
  fatherPhone?: string;
  motherFullName?: string;
  motherJob?: string;
  motherPhone?: string;
  homeAddress?: string;
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

export interface CompetitionRefereeing {
  trickSerieId: number;
  competition: Competition;
  roundNumber: number;
  seriesNumber: number;
}
export interface TrickAttempt {
  trickAttemptId: number;
  sPenalty: number | null;
  sPenaltyTime: number | null;
  dPenalty: number | null;
  dPenaltyTime: number | null;
  plusMinusPenalty: number | null;
  plusMinusPenaltyTime: number | null;
  minusPenalty: number | null;
  minusPenaltyTime: number | null;
  arrowPenalty: number | null;
  arrowPenaltyTime: number | null;
}

export interface Referring {
  trickSeriesId: number;
  trickSeriesNumber: number;
  skydiverNumber: number;
  roundNumber: number;
  competitionMemberDetailId: number;
  refereeNumber: number;
  timeWithoutPenalty: number;
  isTimeSubmitted: boolean;
  totalPenalty: number;
  score: number;
  trickAttempts: {
    firstSpiral: TrickAttempt;
    secondSpiral: TrickAttempt;
    firstFlip: TrickAttempt;
    thirdSpiral: TrickAttempt;
    foursSpiral: TrickAttempt;
    secondFlip: TrickAttempt;
  };
}

export type TrickType = keyof Referring['trickAttempts'];

export interface Jumping {
  id: number;
  jumpingNumber: number;
  accuracy: number;
  date: string;
}
