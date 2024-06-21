import { Flex, Typography } from 'antd';

import { DatePickerField, InputField } from '@components/form-fields';

import { SportsmanFormControlProps } from '../../../../../../manage-sportsmen.types';

import styles from './passport-sportsman-info.module.scss';

export const PassportSportsmanInfo = ({
  control,
}: SportsmanFormControlProps) => {
  return (
    <>
      <Typography.Title level={5}>Паспортные данные:</Typography.Title>
      <Flex vertical className={styles.container} gap="middle">
        <Flex gap="small">
          <InputField
            componentProps={{
              placeholder: 'Введите серию паспорта',
              label: 'Серия',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="passportSeries"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите номер паспорта',
              label: '№',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="passportNumber"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите личный номер паспорта',
              label: 'Личный номер',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="passportPersonalNumber"
          />
        </Flex>
        <Flex gap="small">
          <InputField
            componentProps={{
              placeholder: 'Введите кем выдан паспорт',
              label: 'Кем выдан',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="issuingAuthority"
          />
          <DatePickerField
            componentProps={{
              label: 'Дата выдачи',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="issuingDate"
          />
        </Flex>
      </Flex>
    </>
  );
};
