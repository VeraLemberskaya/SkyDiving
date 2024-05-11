import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { sportDegrees } from '@api/mocks';

import {
  SportsmanFormValues,
  SportsmanModalProps,
} from '../sportsman-modal.types';

import styles from './sportsman-modal.module.scss';
import { getDefaultValues } from './sportsman-modal.lib';
import { sportsmanSchema } from './sportsman-modal.config';

export const SportsmanModal = ({
  isOpen,
  sportsman,
  onClose,
  onSubmit: onFormSubmit,
}: SportsmanModalProps) => {
  const { handleSubmit, reset, control } = useForm<SportsmanFormValues>({
    defaultValues: getDefaultValues(sportsman),
    mode: 'onChange',
    resolver: zodResolver(sportsmanSchema),
  });

  const onSubmit = (values: SportsmanFormValues) => {
    onFormSubmit(values);
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  const selectOptions = sportDegrees.map((degree) => ({
    value: degree.name,
    label: degree.name,
  }));

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable={false}
      open={isOpen}
      title="Добавление спорстмена"
      onCancel={onCancel}
      onOk={handleSubmit(onSubmit)}
    >
      <form className={styles.form}>
        <Flex vertical gap="middle">
          <InputField
            componentProps={{
              placeholder: 'Введите фамилию',
              label: 'Фамилия',
              required: true,
            }}
            control={control}
            name="secondName"
          />
          <Flex gap="middle">
            <InputField
              componentProps={{
                placeholder: 'Введите имя',
                label: 'Имя',
                required: true,
              }}
              control={control}
              name="firstName"
            />
            <InputField
              componentProps={{
                placeholder: 'Введите отчество',
                label: 'Отчество',
                required: true,
              }}
              control={control}
              name="patronymic"
            />
          </Flex>
          <SelectField
            componentProps={{
              showSearch: true,
              options: selectOptions,
              placeholder: 'Выберите спортивное звание',
              label: 'Спортивное звание',
            }}
            control={control}
            name="sportDegree"
          />
        </Flex>
      </form>
    </Modal>
  );
};
