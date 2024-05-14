import { CompetitionReferee } from '@api/mock-types';

import { getFullName } from '@utils/getFullName';

import { RefereeInfoDataType } from '../../panel-of-referees.types';

export const mapRefereesToTableData = (
  data: CompetitionReferee[],
): RefereeInfoDataType[] =>
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
