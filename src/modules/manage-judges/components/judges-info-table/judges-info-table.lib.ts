import { Judge } from '@api/mock-types';
import { getFullName } from '@utils/getFullName';

import { JudgeInfoDataType } from '../../manage-judges.types';

export const mapJudgesToTableData = (data: Judge[]): JudgeInfoDataType[] =>
  data.map(
    ({ id, firstName, secondName, patronymic, serialNumber, category }) => ({
      id,
      key: id,
      serialNumber,
      category,
      fullName: getFullName(firstName, secondName, patronymic),
    }),
  );
