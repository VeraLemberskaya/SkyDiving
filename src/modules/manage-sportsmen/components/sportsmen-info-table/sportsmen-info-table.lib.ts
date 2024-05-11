import { Sportsman } from '@api/types';
import { getFullName } from '@utils/getFullName';

import { SportsmenInfoDataType } from './sportsmen-info-table.types';

export const mapSportsmenToTableData = (
  data: Sportsman[],
): SportsmenInfoDataType[] =>
  data.map(
    ({ id, firstName, secondName, patronymic, serialNumber, sportDegree }) => ({
      key: id,
      serialNumber,
      sportDegree,
      fullName: getFullName(firstName, secondName, patronymic),
    }),
  );
