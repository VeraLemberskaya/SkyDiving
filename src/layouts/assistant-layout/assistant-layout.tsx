import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/header';

import styles from './assistant-layout.module.scss';
import { menuItems } from './constants';

export const AssistantLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout>
        <Layout.Sider
          collapsible
          className={styles.sider}
          collapsed={collapsed}
          theme="light"
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            defaultSelectedKeys={['competitions']}
            items={menuItems}
            mode="inline"
          />
        </Layout.Sider>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
