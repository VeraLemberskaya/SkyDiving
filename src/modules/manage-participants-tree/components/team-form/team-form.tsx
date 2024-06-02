import { Button, Flex, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { participants } from '@api/mocks';

import {
  TeamFormProps,
  TeamFormValues,
} from '../../manage-participants-tree.types';

import { getDefaultValues } from './team-form.lib';
import styles from './team-form.module.scss';
import { teamSchema } from './team-form.config';

export const TeamForm = ({ team, title }: TeamFormProps) => {
  const { handleSubmit, control, formState } = useForm<TeamFormValues>({
    defaultValues: getDefaultValues(team),
    mode: 'onChange',
    resolver: zodResolver(teamSchema),
  });

  const onSubmit = () => {
    //submit
  };

  const participantsOptions = participants.map((participant) => ({
    value: participant.id,
    label: participant.fullName,
  }));

  return (
    <Flex vertical className={styles.container}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical className={styles.fields} gap="middle">
          <InputField
            componentProps={{
              placeholder: 'Введите название команды',
              label: 'Название',
              required: true,
            }}
            control={control}
            name="name"
          />
          <SelectField
            componentProps={{
              mode: 'multiple',
              options: participantsOptions,
              showSearch: true,
              label: 'Участники',
              required: true,
              placeholder: 'Выберите участника',
            }}
            control={control}
            name="participantIds"
          />
        </Flex>
        <Button disabled={!formState.isValid} htmlType="submit" type="primary">
          Сохранить
        </Button>
      </form>
    </Flex>
  );
};
