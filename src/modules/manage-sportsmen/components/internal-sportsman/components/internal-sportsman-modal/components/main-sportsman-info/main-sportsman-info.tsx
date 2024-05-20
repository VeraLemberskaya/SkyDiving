import { Flex } from 'antd';

import {
  DatePickerField,
  InputField,
  RadioGroupField,
} from '@components/form-fields';
import { genderOptions } from '@constants/options';

import { SportsmanFormControlProps } from '../../../../../../manage-sportsmen.types';

import styles from './main-sportsman-info.module.scss';

export const MainSportsmanInfo = ({ control }: SportsmanFormControlProps) => {
  return (
    <>
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
    </>
  );
};
