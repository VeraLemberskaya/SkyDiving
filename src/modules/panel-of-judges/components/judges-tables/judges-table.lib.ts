import { CompetitionJudge } from '@api/types';
import { getFullName } from '@utils/getFullName';

import { JudgeInfoDataType } from '../../panel-of-judges.types';

export const mapJudgesToTableData = (
  data: CompetitionJudge[],
): JudgeInfoDataType[] =>
  data.map(
    ({
      id,
      firstName,
      secondName,
      patronymic,
      work,
      serialNumber,
      category,
    }) => ({
      key: id,
      serialNumber,
      work,
      category,
      fullName: getFullName(firstName, secondName, patronymic),
    }),
  );
