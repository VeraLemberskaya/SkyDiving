import { Referee } from '@api/types';
import { getFullName } from '@utils/getFullName';

import { RefereeInfoDataType } from '../../manage-referees.types';

export const mapRefereesToTableData = (
  data: Referee[],
): RefereeInfoDataType[] =>
  data.map(
    ({ id, firstName, secondName, patronymic, serialNumber, category }) => ({
      id,
      key: id,
      serialNumber,
      category,
      fullName: getFullName(firstName, secondName, patronymic),
    }),
  );
