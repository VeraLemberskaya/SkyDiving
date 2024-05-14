import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SelectField } from '@components/form-fields';
import { categories } from '@api/mocks';

import { useManageRefereesStore } from '../../manage-referees.store';
import { RefereeFilter } from '../../manage-referees.types';

import styles from './filter-referee-modal.module.scss';
import {
  RefereesFilterProps,
  RefereesFilterValues,
} from './filter-referee-modal.type';
import { refereesFilterSchema } from './filter-referee-modal.config';
import { getDefaultValues } from './filter-referee-model.lib';

export const FilterRefereesModal = ({
  isOpen,
  onClose,
}: RefereesFilterProps) => {
  const filter = useManageRefereesStore((state) => state.filter);
  const setFilter = useManageRefereesStore((state) => state.setFilter);

  const { handleSubmit, control } = useForm<RefereesFilterValues>({
    defaultValues: getDefaultValues(filter),
    mode: 'onChange',
    resolver: zodResolver(refereesFilterSchema),
  });

  const onSubmit = (values: RefereeFilter) => {
    setFilter(values);
    //submit
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
      title="Выбирите данные для фильтрации"
      onCancel={onClose}
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
