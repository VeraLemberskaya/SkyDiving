import { Sportsman } from '@api/mock-types';
import { getFullName } from '@utils/get-fullname';

import { SportsmenInfoDataType } from '../../manage-sportsmen.types';

export const mapSportsmenToTableData = (
  data: Sportsman[],
): SportsmenInfoDataType[] =>
  data.map(
    ({
      id,
      firstName,
      secondName,
      patronymic,
      serialNumber,
      sportDegree,
      isInternal,
      gender,
    }) => ({
      id: id,
      key: id,
      serialNumber,
      sportDegree,
      fullName: getFullName({ firstName, secondName, patronymic }),
      isInternal: isInternal,
      gender,
    }),
  );
