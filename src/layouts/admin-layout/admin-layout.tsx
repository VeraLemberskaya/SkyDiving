import { Menu } from 'antd';

import { MainLayout } from '@layouts/main-layout';

import { menuItems } from './admin-layout.config';

export const AdminLayout = () => {
  return (
    <MainLayout
      menu={
        <Menu defaultSelectedKeys={['users']} items={menuItems} mode="inline" />
      }
    />
  );
};
