import { Button, Flex, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import {
  InputField,
  InputNumberField,
  RangeField,
} from '@components/form-fields';
import { getCompetitionJudgesRoute } from '@constants/routes';

import styles from './create-competition-form.module.scss';
import { CreateCompetitionData } from './create-competition-form.types';
import {
  createCompetitionSchema,
  defaultValues,
} from './create-competition-form.config';

export const CreateCompetitionForm = () => {
  const { handleSubmit, control } = useForm<CreateCompetitionData>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(createCompetitionSchema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    //submit
    navigate(getCompetitionJudgesRoute(1));
  };

  return (
    <>
      <Typography.Title level={5}>Новое соревнование</Typography.Title>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical className={styles.fields} gap="small">
          <InputField
            componentProps={{
              placeholder: 'Введите название соревнования',
              label: 'Название',
              required: true,
            }}
            control={control}
            name="name"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите место проведения (город)',
              label: 'Место проведения (город)',
              required: true,
            }}
            control={control}
            name="location"
          />
          <RangeField
            componentProps={{
              placeholder: ['Начало', 'Конец'],
              label: 'Период соревнования',
              required: true,
            }}
            control={control}
            name="period"
          />
          <InputNumberField
            componentProps={{
              placeholder: ' Введите количество этапов',
              label: 'Количество этапов',
              min: 1,
              required: true,
            }}
            control={control}
            name="stageCount"
          />
        </Flex>
        <Button htmlType="submit" type="primary">
          Продолжить
        </Button>
      </form>
    </>
  );
};
