import { Button, Flex } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, PasswordField } from '@components/form-fields';

import styles from './login-form.module.scss';
import { LoginData } from './login-form.types';
import { defaultValues, loginSchema } from './login-form.config';

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<LoginData>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = () => {
    //submit
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex vertical gap="middle">
        <InputField
          componentProps={{
            label: 'Логин',
            required: true,
          }}
          control={control}
          name="login"
        />
        <PasswordField
          componentProps={{
            label: 'Пароль',
            required: true,
          }}
          control={control}
          name="password"
        />
        <Button
          className={styles.form_button}
          htmlType="submit"
          size="large"
          type="primary"
        >
          Войти
        </Button>
      </Flex>
    </form>
  );
};
