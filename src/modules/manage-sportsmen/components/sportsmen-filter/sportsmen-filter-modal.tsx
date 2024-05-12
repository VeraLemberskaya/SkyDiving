import { Flex, Modal } from 'antd';
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

  const { handleSubmit, control } = useForm<SportsmenFilter>({
    defaultValues: getDefaultValues(filter),
    mode: 'onChange',
  });

  const onSubmit = (values: SportsmenFilter) => {
    setFilter(values);
    //submit
    onClose();
  };

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable={false}
      open={isOpen}
      title="Введите параметры фильтрации"
      onCancel={onClose}
      onOk={handleSubmit(onSubmit)}
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
