import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';

import { SelectField } from '@components/form-fields';
import { categoryOptions } from '@constants/options';

import { useManageRefereesStore } from '../../manage-referees.store';
import { RefereeFilter } from '../../manage-referees.types';

import styles from './filter-referee-modal.module.scss';
import {
  RefereesFilterProps,
  RefereesFilterValues,
} from './filter-referee-modal.type';
import { getDefaultValues } from './filter-referee-model.lib';

export const FilterRefereesModal = ({
  isOpen,
  onClose,
}: RefereesFilterProps) => {
  const filter = useManageRefereesStore((state) => state.filter);
  const setFilter = useManageRefereesStore((state) => state.setFilter);

  const { handleSubmit, reset, watch, formState, control } =
    useForm<RefereesFilterValues>({
      defaultValues: getDefaultValues(filter),
    });

  const filterValues = watch();

  const onSubmit = (values: RefereeFilter) => {
    setFilter(values);
    //submit
    onClose();
  };

  const resetFilter = () => {
    reset(getDefaultValues(null));
    setFilter(null);
  };

  const isDisabled = Object.values(filterValues).every(
    (value) => value === null,
  );

  return (
    <Modal
      centered
      destroyOnClose
      footer={[
        <Button disabled={isDisabled} key="filter" onClick={resetFilter}>
          Сбросить
        </Button>,
        <Button
          disabled={!formState.isDirty}
          key="ok"
          type="primary"
          onClick={handleSubmit(onSubmit)}
        >
          OK
        </Button>,
      ]}
      maskClosable={false}
      open={isOpen}
      title="Выберите данные для фильтрации"
      onCancel={onClose}
    >
      <form className={styles.form}>
        <SelectField
          componentProps={{
            showSearch: true,
            options: categoryOptions,
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
