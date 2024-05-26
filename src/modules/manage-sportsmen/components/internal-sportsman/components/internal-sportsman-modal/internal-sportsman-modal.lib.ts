import dayjs from 'dayjs';

import { SkydivingClubMember } from '@api/mock-types';

import { SportsmanFormValues } from '../../../../manage-sportsmen.types';

export const getDefaultValues = (
  sportsman?: SkydivingClubMember,
): SportsmanFormValues => ({
  firstName: sportsman?.firstName ?? '',
  secondName: sportsman?.secondName ?? '',
  patronymic: sportsman?.patronymic ?? '',
  gender: sportsman?.gender ?? null,
  birthDate: mapToDayjs(sportsman?.birthDate),
  birthLocation: sportsman?.birthLocation ?? '',
  employment: sportsman?.employment ?? '',
  education: sportsman?.education ?? '',
  phone: sportsman?.phone ?? '',
  passportSeries: sportsman?.passportSeries ?? '',
  passportNumber: sportsman?.passportNumber ?? '',
  passportPersonalNumber: sportsman?.passportPersonalNumber ?? '',
  issuingAuthority: sportsman?.issuingAuthority ?? '',
  issuingDate: mapToDayjs(sportsman?.issuingDate),
  sportActivityStartYear: mapToDayjs(sportsman?.sportActivityStartYear),
  trainer: sportsman?.trainer ?? '',
  sportDegree: sportsman?.sportDegree ?? '',
  fatherFullName: sportsman?.fatherFullName ?? '',
  fatherJob: sportsman?.fatherJob ?? '',
  fatherPhone: sportsman?.fatherPhone ?? '',
  motherFullName: sportsman?.motherFullName ?? '',
  motherJob: sportsman?.motherJob ?? '',
  motherPhone: sportsman?.motherPhone ?? '',
  homeAddress: sportsman?.homeAddress ?? '',
});

const mapToDayjs = (date?: string) => {
  if (!date) return null;

  return dayjs(date);
};
