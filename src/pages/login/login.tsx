import { Flex } from 'antd';

import { LoginForm } from '@modules/login-form';

import styles from './login.module.scss';

export const Login = () => {
  return (
    <Flex align="center" className={styles.login} justify="center">
      <LoginForm />
    </Flex>
  );
};
