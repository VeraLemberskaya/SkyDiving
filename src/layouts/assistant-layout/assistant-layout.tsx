import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';

import { MainLayout } from '@layouts/main-layout';

import { menuItems } from './assistant-layout.config';
import { getSelectedKey } from './assistant-layout.lib';

export const AssistantLayout = () => {
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
