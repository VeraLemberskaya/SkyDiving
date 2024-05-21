import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';

import { MainLayout } from '@layouts/main-layout';

import { menuItems } from './referee-layout.config';

export const RefereeLayout = () => {
  const { pathname } = useLocation();

  return (
    <MainLayout
      menu={
        <Menu
          defaultSelectedKeys={[pathname]}
          items={menuItems}
          mode="inline"
        />
      }
    />
  );
};
