import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { categories } from '@api/mocks';

import styles from './judges-modal.module.scss';
import { JudgeFormValues, JudgesModalProps } from './judges-modal.types';
import { getDefaultValues } from './judges-modal.lib';
import { judgesSchema } from './judges-modal.config';

export const JudgesModal = ({
  isOpen,
  title,
  judge,
  onClose,
  onSubmit: onFormSubmit,
}: JudgesModalProps) => {
  const { handleSubmit, reset, control } = useForm<JudgeFormValues>({
    defaultValues: getDefaultValues(judge),
    mode: 'onChange',
    resolver: zodResolver(judgesSchema),
  });

  const onSubmit = (values: JudgeFormValues) => {
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
