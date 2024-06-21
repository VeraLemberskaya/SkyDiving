import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SelectField } from '@components/form-fields';

import {
  AddParticipantsModalProps,
  AddParticipantsValues,
} from '../../manage-participants-tree.types';

import styles from './add-participants-modal.module.scss';
import {
  addParticipantsSchema,
  defaultValues,
} from './add-participants-modal.config';
import {
  useAddIndividuals,
  useSkydiverOptions,
} from './add-participants-modal.hooks';

export const AddParticipantsModal = ({
  competitionId,
  isOpen,
  onClose,
}: AddParticipantsModalProps) => {
  const { addIndividuals } = useAddIndividuals(competitionId);
  const { options } = useSkydiverOptions(competitionId);

  const { handleSubmit, reset, control } = useForm<AddParticipantsValues>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(addParticipantsSchema),
  });

  const onSubmit = (values: AddParticipantsValues) => {
    addIndividuals(values);
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

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
            options,
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
