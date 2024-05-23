import { Flex, Typography } from 'antd';

import { InputField } from '@components/form-fields';

import { SportsmanFormControlProps } from '../../../../../../manage-sportsmen.types';

import styles from './sportsman-parents-info.module.scss';

export const SportsmanParentsInfo = ({
  control,
}: SportsmanFormControlProps) => {
  return (
    <>
      <Typography.Title level={5}>Информация о родителях:</Typography.Title>
      <Flex vertical className={styles.container} gap="middle">
        <Flex gap="small">
          <InputField
            componentProps={{
              placeholder: 'Введите ФИО отца',
              label: 'Отец',
              className: styles.input,
            }}
            control={control}
            name="fatherFullName"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите место работы отца',
              label: 'Место работы, должность',
              className: styles.input,
            }}
            control={control}
            name="fatherJob"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите телефон отца',
              label: 'Телефон рабочий',
              className: styles.input,
            }}
            control={control}
            name="fatherPhone"
          />
        </Flex>
        <Flex gap="small">
          <InputField
            componentProps={{
              placeholder: 'Введите ФИО матери',
              label: 'Мать',
              className: styles.input,
            }}
            control={control}
            name="motherFullName"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите место работы матери',
              label: 'Место работы, должность',
              className: styles.input,
            }}
            control={control}
            name="motherJob"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите телефон матери',
              label: 'Телефон рабочий',
              className: styles.input,
            }}
            control={control}
            name="motherPhone"
          />
        </Flex>
        <InputField
          componentProps={{
            placeholder: 'Введите адрес проживания',
            label: 'Домашний адрес',
            required: true,
            className: styles.input,
          }}
          control={control}
          name="homeAddress"
        />
      </Flex>
    </>
  );
};
