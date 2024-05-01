import { ReactNode, useState } from 'react';
import { Layout } from 'antd';

import styles from './sider.module.scss';

interface SiderProps {
  children: ReactNode;
}

export const Sider = ({ children }: SiderProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Sider
      collapsible
      className={styles.sider}
      collapsed={collapsed}
      theme="light"
      onCollapse={(value) => setCollapsed(value)}
    >
      {children}
    </Layout.Sider>
  );
};
