import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/header';
import { Sider } from '@components/sider';

import styles from './assistant-layout.module.scss';
import { menuItems } from './assistant-layout.config';

export const AssistantLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={['competitions']}
            items={menuItems}
            mode="inline"
          />
        </Sider>
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
