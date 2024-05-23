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

export interface CompetitionRefereeing extends Competition {
  roundNumber: number;
  seriesNumber: number;
}
