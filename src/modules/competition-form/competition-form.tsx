import { Button, Flex } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, RangeField } from '@components/form-fields';
import { isPastDate } from '@utils/is-past-date';

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
  loading,
  onSubmit: onCompetitionSubmit,
}: CompetitionFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = useForm<CompetitionValues>({
    values: getValues(competition),
    mode: 'onChange',
    resolver: zodResolver(competitionSchema),
  });

  const onSubmit = async ({ name, place, period }: CompetitionValues) => {
    const data: CompetitionData = {
      name,
      place,
      beginDate: period[0].format('YYYY-MM-DD'),
      endDate: period[1].format('YYYY-MM-DD'),
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
            disabledDate: isPastDate,
            required: true,
          }}
          control={control}
          name="period"
        />
      </Flex>
      <Button
        disabled={!isValid || !isDirty}
        htmlType="submit"
        loading={loading}
        type="primary"
      >
        Продолжить
      </Button>
    </form>
  );
};
