import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SelectField } from '@components/form-fields';
import { participants } from '@api/mocks';

import {
  AddParticipantsModalProps,
  AddParticipantsValues,
} from '../../manage-participants-tree.types';

import styles from './add-participants-modal.module.scss';
import {
  addParticipantsSchema,
  defaultValues,
} from './add-participants-modal.config';

export const AddParticipantsModal = ({
  isOpen,
  onClose,
}: AddParticipantsModalProps) => {
  const { handleSubmit, reset, control } = useForm<AddParticipantsValues>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(addParticipantsSchema),
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

  const selectOptions = participants.map((participant) => ({
    value: participant.id,
    label: participant.fullName,
  }));

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable={false}
      open={isOpen}
      title="Добавьте участников:"
      onCancel={onCancel}
      onOk={handleSubmit(onSubmit)}
    >
      <form className={styles.form}>
        <SelectField
          componentProps={{
            mode: 'multiple',
            showSearch: true,
            options: selectOptions,
            placeholder: 'Выберите участников',
            label: 'Участники',
            required: true,
          }}
          control={control}
          name="participantIds"
        />
      </form>
    </Modal>
  );
};
