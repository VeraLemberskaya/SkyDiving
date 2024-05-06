import { Button, Form, Input } from 'antd';

import styles from './login-form.module.scss';

export const LoginForm = () => {
  return (
    <Form className={styles.form} layout="vertical">
      <Form.Item label="Логин:" name="login">
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Пароль:" name="password">
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item className={styles.form_item}>
        <Button className={styles.form_button} size="large" type="primary">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
