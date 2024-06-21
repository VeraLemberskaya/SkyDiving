import { Button, Flex, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { API } from '@api/index';
import { getFullName } from '@utils/get-fullname';

import {
  TeamFormProps,
  TeamFormValues,
} from '../../manage-participants-tree.types';

import { getDefaultValues } from './team-form.lib';
import styles from './team-form.module.scss';
import { teamSchema } from './team-form.config';

export const TeamForm = ({
  team,
  title,
  competitionId,
  onSubmit: onFormSubmit,
}: TeamFormProps) => {
  const { data: skydivers = [] } =
    API.skydivers.useAvailableCompetitionSkydiversQuery(competitionId);

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, isDirty },
  } = useForm<TeamFormValues>({
    values: getDefaultValues(team),
    mode: 'onChange',
    resolver: zodResolver(teamSchema),
  });

  const onSubmit = (values: TeamFormValues) => {
    onFormSubmit(values);
    reset(team ? values : undefined);
  };

  const teamParticipantsOptions =
    team?.members.map(({ skydiverId, name }) => ({
      value: skydiverId,
      label: getFullName(name),
    })) ?? [];

  const participantsOptions = skydivers.map(({ id, name }) => ({
    value: id,
    label: getFullName(name),
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
              options: [...teamParticipantsOptions, ...participantsOptions],
              showSearch: true,
              label: 'Участники',
              required: true,
              placeholder: 'Выберите участника',
            }}
            control={control}
            name="skydiversIds"
          />
        </Flex>
        <Button
          disabled={!isValid || !isDirty}
          htmlType="submit"
          type="primary"
        >
          Сохранить
        </Button>
      </form>
    </Flex>
  );
};
