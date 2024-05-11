import { Modal } from './manage-participants.types';

export const tooltip =
  'На этой странице вы можете просмотреть список спорстменов. Список включает в себя как членов аэроклуба, так и внешних спортсменов. Для того, чтобы внести в систему данные о спорстмене нажмите кнопку "Добавить". При необходимости добавления дополнительных данных о спортсмене - обратитесь к администратору.';

export const initialModal: Modal = {
  isOpen: false,
  type: 'add',
};