import { Button, Flex } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import {
  InputField,
  InputNumberField,
  RangeField,
} from '@components/form-fields';
import { API } from '@api/index';
import { CreateCompetitionData } from '@api/types';
import { routes } from '@constants/routes';

import styles from './create-competition-form.module.scss';
import { CreateCompetitionValues } from './create-competition-form.types';
import {
  createCompetitionSchema,
  defaultValues,
} from './create-competition-form.config';

export const CreateCompetitionForm = () => {
  const navigate = useNavigate();

  const { mutate: createCompetition } = useMutation({
    mutationFn: API.competitions.createCompetition,
    onSuccess: ({ data }) => {
      navigate(routes.COMPETITION_REFEREES_BY_ID(data.id));
    },
  });

  const { handleSubmit, control } = useForm<CreateCompetitionValues>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(createCompetitionSchema),
  });

  const onSubmit = ({
    name,
    place,
    numberOfStages,
    period,
  }: CreateCompetitionValues) => {
    const data: CreateCompetitionData = {
      name,
      place,
      numberOfStages: Number(numberOfStages),
      beginDate: period[0].toISOString(),
      endDate: period[1].toISOString(),
    };

    createCompetition(data);
  };

  return (
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
          name="place"
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
          name="numberOfStages"
        />
      </Flex>
      <Button htmlType="submit" type="primary">
        Продолжить
      </Button>
    </form>
  );
};
