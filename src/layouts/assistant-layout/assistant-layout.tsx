import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';

import { MainLayout } from '@layouts/main-layout';

import { menuItems } from './assistant-layout.config';

export const AssistantLayout = () => {
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
