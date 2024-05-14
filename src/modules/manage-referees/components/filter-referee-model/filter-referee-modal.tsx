import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SelectField } from '@components/form-fields';
import { categories } from '@api/mocks';

import styles from './filter-referee-modal.module.scss';
import {
  RefereesFilterProps,
  RefereesFilterValues,
} from './filter-referee-modal.type';
import { refereesFilterSchema } from './filter-referee-modal.config';
import { getDefaultValues } from './filter-referee-model.lib';

export const FilterRefereesModal = ({
  isOpen,
  title,
  referee,
  onClose,
}: RefereesFilterProps) => {
  const { handleSubmit, reset, control } = useForm<RefereesFilterValues>({
    defaultValues: getDefaultValues(referee),
    mode: 'onChange',
    resolver: zodResolver(refereesFilterSchema),
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
