import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { API } from '@api/index';
import { getFullName } from '@utils/get-fullname';

import {
  AddRefereeFormValues,
  AddRefereeModalProps,
} from '../../panel-of-referees.types';

import styles from './add-referee-modal.module.scss';
import { addRefereeSchema, defaultValues } from './add-referee-modal.config';

export const AddRefereeModal = ({
  isOpen,
  referees,
  onClose,
  onSubmit: onFormSubmit,
}: AddRefereeModalProps) => {
  const { data: refereeCategories } = API.knowledgeBase.useRefereeCategories();

  const { handleSubmit, reset, control } = useForm<AddRefereeFormValues>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(addRefereeSchema),
  });

  const onSubmit = (data: AddRefereeFormValues) => {
    onFormSubmit(data);
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  const selectOptions = referees?.map(
    ({ id, firstName, secondName, patronymic, category }) => {
      const categoryDescription = refereeCategories?.find(
        ({ name }) => name === category,
      )?.description;

      return {
        value: id,
        label: `${getFullName({ firstName, secondName, patronymic })} (${categoryDescription})`,
      };
    },
  );

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable={false}
      open={isOpen}
      title="Добавление судьи"
      onCancel={onCancel}
      onOk={handleSubmit(onSubmit)}
    >
      <form className={styles.form}>
        <Flex vertical gap="middle">
          <SelectField
            componentProps={{
              showSearch: true,
              options: selectOptions,
              placeholder: 'Выберите судью',
              label: 'Судья',
              required: true,
            }}
            control={control}
            name="refereeId"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите выполняемую работу',
              label: 'Выполняемая работа',
              required: true,
            }}
            control={control}
            name="workPerformed"
          />
        </Flex>
      </form>
    </Modal>
  );
};
