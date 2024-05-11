import { Judge } from '@api/types';
import { getFullName } from '@utils/getFullName';

export const mapJudgesToTableData = (data: Judge[]) =>
  data.map(
    ({ id, firstName, secondName, patronymic, serialNumber, category }) => ({
      key: id,
      serialNumber,
      category,
      fullName: getFullName(firstName, secondName, patronymic),
    }),
  );
