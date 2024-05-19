import { Button, Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';

import {
  CheckboxField,
  RadioGroupField,
  SelectField,
} from '@components/form-fields';
import { degreeOptions, genderOptions } from '@constants/options';

import { ModalProps, SportsmenFilter } from '../../manage-sportsmen.types';
import { useManageSportsmenStore } from '../../manage-sportsmen.store';

import styles from './sportsmen-filter-modal.module.scss';
import { getDefaultValues } from './sportsmen-filter-modal.lib';

export const SportsmenFilterModal = ({ isOpen, onClose }: ModalProps) => {
  const filter = useManageSportsmenStore((state) => state.filter);
  const setFilter = useManageSportsmenStore((state) => state.setFilter);

  const { handleSubmit, reset, watch, formState, control } =
    useForm<SportsmenFilter>({
      defaultValues: getDefaultValues(filter),
    });

  const filterValues = watch();

  const onSubmit = (values: SportsmenFilter) => {
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
      title="Введите параметры фильтрации"
      onCancel={onClose}
    >
      <form className={styles.form}>
        <Flex vertical gap="middle">
          <SelectField
            componentProps={{
              showSearch: true,
              options: degreeOptions,
              placeholder: 'Выберите спортивное звание',
              label: 'Спортивное звание',
            }}
            control={control}
            name="sportDegree"
          />
          <RadioGroupField
            componentProps={{
              label: 'Пол',
              required: true,
              options: genderOptions,
            }}
            control={control}
            name="gender"
          />
          <CheckboxField
            componentProps={{
              children: 'Член аэроклуба',
            }}
            control={control}
            name="isInternal"
          />
        </Flex>
      </form>
    </Modal>
  );
};
