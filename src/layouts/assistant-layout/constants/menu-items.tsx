import { TrophyOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    label: 'Соревнования',
    key: 'competitions',
    icon: <TrophyOutlined />,
  },
  {
    label: 'Спортсмены',
    key: 'sportsmen',
    icon: <UserOutlined />,
  },
];
