import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';

import { judges } from '../../mocks/data';
import {
  AddJudgeFormValues,
  AddJudgeModalProps,
} from '../../panel-of-judges.types';

import styles from './add-judge-modal.module.scss';
import { addJudgeSchema, defaultValues } from './add-judge-modal.config';

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

  const selectOptions = judges.map((judge) => ({
    value: judge.id,
    label: `${judge.fullName} (${judge.category})`,
  }));

  return (
    <Modal
      centered
      destroyOnClose={true}
      maskClosable={false}
      open={isOpen}
      title="Добавление судьи"
      onCancel={onClose}
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
