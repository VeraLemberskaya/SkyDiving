import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField, SelectField } from '@components/form-fields';
import { RadioGroupField } from '@components/form-fields';
import { API } from '@api/index';
import { genderOptions } from '@constants/options';

import { SportsmanModalProps } from '../../../../manage-sportsmen.types';

import { SportsmanFormValues } from './external-sportsman-modal.types';
import { getDefaultValues } from './external-sportsman-modal.lib';
import { sportsmanSchema } from './external-sportsman-modal.config';
import styles from './external-sportsman-modal.module.scss';

export const ExternalSportsmanModal = ({
  title,
  isOpen,
  sportsman,
  onClose,
  onSubmit: onFormSubmit,
}: SportsmanModalProps<SportsmanFormValues>) => {
  const { data: sportRanks } = API.knowledgeBase.useSportRanks();

  const { handleSubmit, reset, control } = useForm<SportsmanFormValues>({
    values: getDefaultValues(sportsman),
    mode: 'onChange',
    resolver: zodResolver(sportsmanSchema),
  });

  const onSubmit = async (values: SportsmanFormValues) => {
    await onFormSubmit(values);
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  const sportRankOptions = sportRanks?.map((sportRank) => ({
    value: sportRank.name,
    label: sportRank.description,
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
        <Flex vertical gap="middle">
          <InputField
            componentProps={{
              placeholder: 'Введите фамилию',
              label: 'Фамилия',
              required: true,
            }}
            control={control}
            name="secondName"
          />
          <Flex gap="middle">
            <InputField
              componentProps={{
                placeholder: 'Введите имя',
                label: 'Имя',
                required: true,
              }}
              control={control}
              name="firstName"
            />
            <InputField
              componentProps={{
                placeholder: 'Введите отчество',
                label: 'Отчество',
                required: true,
              }}
              control={control}
              name="patronymic"
            />
          </Flex>
          <RadioGroupField
            componentProps={{
              label: 'Пол',
              required: true,
              options: genderOptions,
            }}
            control={control}
            name="gender"
          />
          <SelectField
            componentProps={{
              showSearch: true,
              options: sportRankOptions,
              placeholder: 'Выберите спортивное звание',
              label: 'Спортивное звание',
              required: true,
            }}
            control={control}
            name="sportRank"
          />
        </Flex>
      </form>
    </Modal>
  );
};
