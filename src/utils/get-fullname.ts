export const getFullName = ({
  firstName,
  secondName,
  patronymic,
  shortcut = false,
}: {
  firstName: string;
  secondName: string;
  patronymic: string;
  shortcut?: boolean;
}) => {
  if (shortcut) {
    return `${secondName} ${firstName.at(0)}. ${patronymic.at(0)}.`;
  }
  return `${secondName} ${firstName} ${patronymic}`;
};
