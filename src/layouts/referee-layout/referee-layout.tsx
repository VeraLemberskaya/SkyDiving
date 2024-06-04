import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';

import { MainLayout } from '@layouts/main-layout';

import { menuItems } from './referee-layout.config';
import { getSelectedKey } from './referee-layout.lib';

export const RefereeLayout = () => {
  const { pathname } = useLocation();
  const selectedKey = getSelectedKey(pathname);

  return (
    <MainLayout
      menu={
        <Menu
          items={menuItems}
          mode="inline"
          selectedKeys={selectedKey ? [selectedKey] : undefined}
        />
      }
    />
  );
};
