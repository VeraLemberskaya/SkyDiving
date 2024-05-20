import { Sportsman } from '@api/mock-types';
import { getFullName } from '@utils/getFullName';

export const getParticipantsOptions = (participants: Sportsman[]) =>
  participants.map(
    ({ id, firstName, secondName, patronymic, serialNumber }) => ({
      value: id,
      label: `${getFullName(firstName, secondName, patronymic)} (№ ${serialNumber})`,
    }),
  );
