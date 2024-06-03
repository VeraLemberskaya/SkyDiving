import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Flex, Avatar, Button } from 'antd';

import styles from './header.module.scss';
import { HeaderProps } from './header.types';

export const Header = ({ onLogout }: HeaderProps) => {
  return (
    <Layout.Header className={styles.header}>
      <Flex gap="middle">
        <Avatar className={styles.avatar} icon={<UserOutlined />} />
        <Button
          className={styles.logoutButton}
          icon={<LogoutOutlined />}
          shape="circle"
          type="primary"
          onClick={onLogout}
        />
      </Flex>
    </Layout.Header>
  );
};
