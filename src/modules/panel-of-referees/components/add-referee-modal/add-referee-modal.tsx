import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { getFullName } from '@utils/getFullName';

import { referees } from '../../mocks/data';
import {
  AddJudgeFormValues,
  AddJudgeModalProps,
} from '../../panel-of-referees.types';

import styles from './add-referee-modal.module.scss';
import { addJudgeSchema, defaultValues } from './add-referee-modal.config';

export const AddJudgeModal = ({ isOpen, onClose }: AddJudgeModalProps) => {
  const { handleSubmit, reset, control } = useForm<AddJudgeFormValues>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(addJudgeSchema),
  });

  const onSubmit = () => {
    //submit
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  const selectOptions = referees.map(
    ({ id, firstName, secondName, patronymic, category }) => ({
      value: id,
      label: `${getFullName(firstName, secondName, patronymic)} (${category})`,
    }),
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
            name="judgeId"
          />
          <InputField
            componentProps={{
              placeholder: 'Введите выполняемую работу',
              label: 'Выполняемая работа',
              required: true,
            }}
            control={control}
            name="work"
          />
        </Flex>
      </form>
    </Modal>
  );
};
