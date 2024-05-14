import { ReactNode } from 'react';
import { Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthStore } from '@app/store';
import { Header } from '@components/header';
import { Sider } from '@components/sider';
import { removeToken } from '@api/token';
import { routes } from '@constants/routes';

import styles from './main-layout.module.scss';

interface MainLayoutProps {
  menu: ReactNode;
}

export const MainLayout = ({ menu }: MainLayoutProps) => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    removeToken();
    navigate(routes.LOGIN);
  };

  return (
    <Layout className={styles.layout}>
      <Header onLogout={handleLogout} />
      <Layout>
        <Sider>{menu}</Sider>
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
