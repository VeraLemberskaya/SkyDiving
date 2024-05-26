import { Flex, Typography } from 'antd';

import {
  DatePickerField,
  InputField,
  RadioGroupField,
} from '@components/form-fields';
import { isFutureDate } from '@utils/isFutureDate';
import { genderOptions } from '@constants/options';

import { SportsmanFormControlProps } from '../../../../../../manage-sportsmen.types';
import { AdditionalSportsmanInfo } from '../additional-sportsman-info';

import styles from './main-sportsman-info.module.scss';

export const MainSportsmanInfo = ({ control }: SportsmanFormControlProps) => {
  return (
    <>
      <Typography.Title level={5}>Основная информация:</Typography.Title>
      <Flex vertical className={styles.container} gap="middle">
        <Flex gap="small">
          <InputField
            componentProps={{
              placeholder: 'Введите фамилию',
              label: 'Фамилия',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="secondName"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите имя',
              label: 'Имя',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="firstName"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите отчество',
              label: 'Отчество',
              required: true,
              className: styles.input,
            }}
            control={control}
            name="patronymic"
          />
        </Flex>
        <RadioGroupField
          componentProps={{
            label: 'Пол',
            required: true,
            options: genderOptions,
          }}
          control={control}
          name="gender"
        />
        <Flex gap="small">
          <DatePickerField
            componentProps={{
              label: 'Дата рождения',
              required: true,
              disabledDate: isFutureDate,
              className: styles.input,
            }}
            control={control}
            name="birthDate"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите место рождения',
              label: 'Место рождения',
              className: styles.input,
            }}
            control={control}
            name="birthLocation"
          />
        </Flex>
        <AdditionalSportsmanInfo control={control} />
      </Flex>
    </>
  );
};
