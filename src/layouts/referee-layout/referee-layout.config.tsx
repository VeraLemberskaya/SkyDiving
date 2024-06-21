import { TrophyOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    label: <Link to={routes.COMPETITIONS_REFEREEING}>Судейство</Link>,
    key: 'competitions-refereeing',
    icon: <TrophyOutlined />,
  },
];
