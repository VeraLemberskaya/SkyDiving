import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SelectField } from '@components/form-fields';
import { categories } from '@api/mocks';

import styles from './filter-judge-modal.module.scss';
import {
  JudgesFilterProps,
  JudgesFilterValues,
} from './filter-judge-modal.type';
import { judgesFilterSchema } from './filter-judge-modal.config';
import { getDefaultValues } from './filter-judge-model.lib';

export const FilterJudgesModal = ({
  isOpen,
  title,
  judge,
  onClose,
}: JudgesFilterProps) => {
  const { handleSubmit, reset, control } = useForm<JudgesFilterValues>({
    defaultValues: getDefaultValues(judge),
    mode: 'onChange',
    resolver: zodResolver(judgesFilterSchema),
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
      </form>
    </Modal>
  );
};
