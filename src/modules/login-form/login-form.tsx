import { Button, Flex } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLogin } from '@app/store';
import { InputField, PasswordField } from '@components/form-fields';
import { Credentials } from '@api/types';

import styles from './login-form.module.scss';
import { defaultValues, loginSchema } from './login-form.config';

export const LoginForm = () => {
  const { login, isPending } = useLogin();

  const { handleSubmit, control } = useForm<Credentials>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: Credentials) => login(data);

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
          loading={isPending}
          size="large"
          type="primary"
        >
          Войти
        </Button>
      </Flex>
    </form>
  );
};
