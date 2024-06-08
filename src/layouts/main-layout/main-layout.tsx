import { ReactNode } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { useLogout } from '@app/store';
import { Header } from '@components/header';
import { Sider } from '@components/sider';

import styles from './main-layout.module.scss';

interface MainLayoutProps {
  menu: ReactNode;
}

export const MainLayout = ({ menu }: MainLayoutProps) => {
  const { logout } = useLogout();

  return (
    <Layout className={styles.layout}>
      <Header onLogout={logout} />
      <Layout>
        <Sider>{menu}</Sider>
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
