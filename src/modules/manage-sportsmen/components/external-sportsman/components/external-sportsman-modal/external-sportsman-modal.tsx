import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { RadioGroupField } from '@components/form-fields';
import { sportDegrees, sportsmenData } from '@api/mocks';
import { genderOptions } from '@constants/options';

import { SportsmanModalProps } from '../../../../manage-sportsmen.types';

import { SportsmanFormValues } from './external-sportsman-modal.types';
import { getDefaultValues } from './external-sportsman-modal.lib';
import { sportsmanSchema } from './external-sportsman-modal.config';
import styles from './external-sportsman-modal.module.scss';

export const ExternalSportsmanModal = ({
  title,
  isOpen,
  sportsmanId,
  onClose,
  onSubmit: onFormSubmit,
}: SportsmanModalProps<SportsmanFormValues>) => {
  const sportsman = sportsmenData.find(({ id }) => id === sportsmanId);

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
      title={title}
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
          <RadioGroupField
            componentProps={{
              label: 'Пол',
              required: true,
              options: genderOptions,
            }}
            control={control}
            name="gender"
          />
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
