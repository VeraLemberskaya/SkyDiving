import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Flex, Avatar, Button, Typography } from 'antd';

import { API } from '@api/index';
import { getFullName } from '@utils/get-fullname';

import styles from './header.module.scss';
import { HeaderProps } from './header.types';

export const Header = ({ onLogout }: HeaderProps) => {
  const { data } = API.auth.useUserInfoQuery({ enabled: true });

  return (
    <Layout.Header className={styles.header}>
      <Flex align="center" gap="middle">
        {data && (
          <Typography.Text className={styles.header__user}>
            {getFullName({
              firstName: data.firstName,
              secondName: data.secondName,
              patronymic: data.patronymic,
              shortcut: true,
            })}
          </Typography.Text>
        )}
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
