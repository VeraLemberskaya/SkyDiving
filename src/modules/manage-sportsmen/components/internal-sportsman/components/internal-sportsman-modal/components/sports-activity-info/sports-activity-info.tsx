import { Flex } from 'antd';

import {
  DatePickerField,
  InputField,
  SelectField,
} from '@components/form-fields';
import { degreeOptions } from '@constants/options';

import { SportsmanFormControlProps } from '../../../../../../manage-sportsmen.types';

import styles from './sports-activity-info.module.scss';

export const SportsActivityInfo = ({ control }: SportsmanFormControlProps) => {
  return (
    <Flex vertical gap="middle">
      <Flex gap="small">
        <DatePickerField
          componentProps={{
            label: 'Год начала',
            className: styles.input,
            picker: 'year',
          }}
          control={control}
          name="sportActivityStartYear"
        />
        <InputField
          componentProps={{
            placeholder: 'Введите ФИО тренера-преподавателя',
            label: 'Тренер-преподаватель',
            className: styles.input,
          }}
          control={control}
          name="trainer"
        />
      </Flex>
      <SelectField
        componentProps={{
          showSearch: true,
          options: degreeOptions,
          placeholder: 'Выберите спортивное звание',
          label: 'Спортивное звание',
        }}
        control={control}
        name="sportDegree"
      />
    </Flex>
  );
};
