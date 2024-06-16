import { Button, Flex } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, RangeField } from '@components/form-fields';

import styles from './competition-form.module.scss';
import {
  CompetitionData,
  CompetitionFormProps,
  CompetitionValues,
} from './competition-form.types';
import { competitionSchema } from './competition-form.config';
import { getValues } from './competition-form.lib';

export const CompetitionForm = ({
  competition,
  onSubmit: onCompetitionSubmit,
}: CompetitionFormProps) => {
  const { handleSubmit, control } = useForm<CompetitionValues>({
    values: getValues(competition),
    mode: 'onChange',
    resolver: zodResolver(competitionSchema),
  });

  const onSubmit = ({ name, place, period }: CompetitionValues) => {
    const data: CompetitionData = {
      name,
      place,
      beginDate: period[0].toISOString(),
      endDate: period[1].toISOString(),
    };

    onCompetitionSubmit(data);
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
      </Flex>
      <Button htmlType="submit" type="primary">
        Продолжить
      </Button>
    </form>
  );
};
