import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { categories, refereeData } from '@api/mocks';

import styles from './referees-modal.module.scss';
import { RefereeFormValues, RefereesModalProps } from './referees-modal.types';
import { getDefaultValues } from './referees-modal.lib';
import { refereesSchema } from './referees-modal.config';

export const RefereesModal = ({
  isOpen,
  title,
  refereeId,
  onClose,
  onSubmit: onFormSubmit,
}: RefereesModalProps<RefereeFormValues>) => {
  const referee = refereeData.find(({ id }) => id === refereeId);

  const { handleSubmit, reset, control } = useForm<RefereeFormValues>({
    defaultValues: getDefaultValues(referee),
    mode: 'onChange',
    resolver: zodResolver(refereesSchema),
  });

  const onSubmit = (values: RefereeFormValues) => {
    onFormSubmit(values);
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  const selectOptions = categories.map((category) => ({
    value: category.name,
    label: category.name,
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
          <SelectField
            componentProps={{
              showSearch: true,
              options: selectOptions,
              placeholder: 'Выберите судейскую категрию',
              label: 'Судейская категория',
            }}
            control={control}
            name="category"
          />
        </Flex>
      </form>
    </Modal>
  );
};
