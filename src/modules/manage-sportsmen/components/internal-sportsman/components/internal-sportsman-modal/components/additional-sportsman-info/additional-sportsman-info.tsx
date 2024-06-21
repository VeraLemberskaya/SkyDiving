import { Flex } from 'antd';

import { InputField } from '@components/form-fields';

import { SportsmanFormControlProps } from '../../../../../../manage-sportsmen.types';

import styles from './additional-sportsman-info.module.scss';

export const AdditionalSportsmanInfo = ({
  control,
}: SportsmanFormControlProps) => {
  return (
    <>
      <Flex gap="small">
        <InputField
          componentProps={{
            placeholder: 'Введите место работы',
            label: 'Место работы/учебы',
            className: styles.input,
          }}
          control={control}
          name="employment"
        />
        <InputField
          componentProps={{
            placeholder: 'Введите уровень образования',
            label: 'Образование',
            className: styles.input,
          }}
          control={control}
          name="education"
        />
      </Flex>
      <InputField
        componentProps={{
          placeholder: 'Введите номер телефона',
          label: 'Телефон',
          required: true,
          className: styles.phoneInput,
        }}
        control={control}
        name="phone"
      />
    </>
  );
};
