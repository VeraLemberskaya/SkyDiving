import { Referee } from '@api/types';
import { getFullName } from '@utils/getFullName';

import { JudgeInfoDataType } from '../../manage-referees.types';

export const mapJudgesToTableData = (data: Referee[]): JudgeInfoDataType[] =>
  data.map(
    ({ id, firstName, secondName, patronymic, serialNumber, category }) => ({
      id,
      key: id,
      serialNumber,
      category,
      fullName: getFullName(firstName, secondName, patronymic),
    }),
  );
