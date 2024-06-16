import { SkyDiver } from '@api/types';
import { getFullName } from '@utils/get-fullname';
import { DEFAULT_SIZE } from '@constants/pagination';

import { SportsmenInfoDataType } from '../../manage-sportsmen.types';

export const mapSportsmenToTableData = (
  page: number,
  data?: SkyDiver[],
): SportsmenInfoDataType[] =>
  data?.map(
    (
      {
        id,
        name: { firstName, secondName, patronymic },
        sportRank,
        isInternal,
        gender,
      },
      index,
    ) => ({
      id,
      key: id,
      sportRank,
      fullName: getFullName({ firstName, secondName, patronymic }),
      isInternal: isInternal,
      gender,
      number: (page - 1) * DEFAULT_SIZE + ++index,
    }),
  ) ?? [];
