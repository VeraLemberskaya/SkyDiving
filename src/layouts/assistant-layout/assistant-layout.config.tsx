import { TrophyOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    label: <Link to={routes.COMPETITIONS}>Соревнования</Link>,
    key: 'competitions',
    icon: <TrophyOutlined />,
  },
  {
    label: <Link to={routes.PARTICIPANTS}>Спортсмены</Link>,
    key: 'participants',
    icon: <UserOutlined />,
  },
];
