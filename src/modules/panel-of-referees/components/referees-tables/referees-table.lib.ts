import { CompetitionReferee } from '@api/types';
import { getFullName } from '@utils/get-fullname';

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
      workPerformed,
      refereeNumber,
      category,
    }) => ({
      id,
      key: id,
      refereeNumber,
      workPerformed,
      category,
      fullName: getFullName({ firstName, secondName, patronymic }),
    }),
  );
