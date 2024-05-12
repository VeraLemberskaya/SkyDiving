import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';

import {
  CheckboxField,
  RadioGroupField,
  SelectField,
} from '@components/form-fields';
import { degreeOptions, genderOptions } from '@constants/options';

import { FilterSportsmenModalProps } from '../../manage-sportsmen.types';

import { SportsmenFilterValues } from './sportsmen-filter-modal.types';
import { defaultValues } from './sportsmen-filter-modal.lib';
import styles from './sportsmen-filter-modal.module.scss';

export const SportsmenFilterModal = ({
  isOpen,
  onClose,
}: FilterSportsmenModalProps) => {
  const { handleSubmit, reset, control } = useForm<SportsmenFilterValues>({
    defaultValues,
    mode: 'onChange',
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

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable={false}
      open={isOpen}
      title="Введите параметры фильтрации"
      onCancel={onCancel}
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
