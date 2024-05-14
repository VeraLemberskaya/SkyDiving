export const enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

interface PasswordDetails {
  series: string;
  number: string;
  personalNumber: string;
  issuingAuthority: string;
  issuedDate: string;
}

export interface CreateSkyDiverData {
  firstName: string;
  secondName: string;
  patronymic: string;
  gender: Gender;
  birthDate: string;
  placeOfBirth: string;
  placeOfWork: string;
  education: string;
  phone: string;
  passportDetails: PasswordDetails;
}

export interface Name {
  firstName: string;
  secondName: string;
  patronymic: string;
}

export interface ClothingSize {
  shoeSize: number;
  jacketSize: number;
  pantsSize: number;
}

export interface SportCareer {
  beginDateOfSportCareer: string | null;
  sportSpecialization: string | null;
  sportDegree: string | null;
}

export interface InternalSkyDiver {
  id: number;
  name: Name;
  birthDate: string;
  placeOfBirth: string;
  placeOfWork: string;
  phoneNumber: string;
  education: string;
  gender: Gender;
  couchName: string | null;
  height: number | null;
  weight: number | null;
  clothingSize: ClothingSize;
  sportCareer: SportCareer;
}

export interface SportsmenFilterParams {
  name: string;
  gender: Gender;
  sportDegree: string;
  isInternal: boolean;
}

export interface SkyDiver {
  id: number;
  name: Name;
  career: SportCareer;
  gender: Gender;
  isInternal: boolean;
}
