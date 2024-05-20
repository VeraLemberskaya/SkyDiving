import { Flex, Modal, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { manageSportsmenData } from '@api/mocks';
import { calculateAge } from '@utils/calculateAge';
import { AGE_OF_MAJORITY, MIN_SPORTSMAN_AGE } from '@constants/validation';

import {
  SportsmanModalProps,
  SportsmanFormValues,
} from '../../../../manage-sportsmen.types';

import styles from './internal-sportsman-modal.module.scss';
import { sportsmanSchema } from './internal-sportsman-modal.config';
import { getDefaultValues } from './internal-sportsman-modal.lib';
import { MainSportsmanInfo } from './components/main-sportsman-info';
import { AdditionalSportsmanInfo } from './components/additional-sportsman-info';
import { PassportSportsmanInfo } from './components/passport-sportsman-info';
import { SportsActivityInfo } from './components/sports-activity-info';
import { SportsmanParentsInfo } from './components/sportsman-parents-info/sportsman-parents-info';

export const InternalSportsmanModal = ({
  title,
  isOpen,
  sportsmanId,
  onClose,
  onSubmit: onFormSubmit,
}: SportsmanModalProps<SportsmanFormValues>) => {
  const sportsman = manageSportsmenData.find(({ id }) => id === sportsmanId);

  const { handleSubmit, reset, watch, control } = useForm<SportsmanFormValues>({
    defaultValues: getDefaultValues(sportsman),
    mode: 'onSubmit',
    resolver: zodResolver(sportsmanSchema),
  });

  const onSubmit = (values: SportsmanFormValues) => {
    onFormSubmit(values);
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  const birthDate = watch('birthDate');
  const age = calculateAge(birthDate);

  return (
    <Modal
      centered
      destroyOnClose
      className={styles.modal}
      maskClosable={false}
      open={isOpen}
      title={title}
      width="fit-content"
      onCancel={onCancel}
      onOk={handleSubmit(onSubmit)}
    >
      <form className={styles.modal_form}>
        <Flex vertical gap="large">
          <div>
            <Typography.Title level={5}>Основная информация:</Typography.Title>
            <Flex vertical gap="middle">
              <MainSportsmanInfo control={control} />
              <AdditionalSportsmanInfo control={control} />
            </Flex>
          </div>
          {age !== null &&
            age < AGE_OF_MAJORITY &&
            age >= MIN_SPORTSMAN_AGE && (
              <div>
                <Typography.Title level={5}>
                  Информация о родителях:
                </Typography.Title>
                <SportsmanParentsInfo control={control} />
              </div>
            )}
          <div>
            <Typography.Title level={5}>Паспортные данные:</Typography.Title>
            <PassportSportsmanInfo control={control} />
          </div>
          <div>
            <Typography.Title level={5}>
              Спортивная деятельность:
            </Typography.Title>
            <SportsActivityInfo control={control} />
          </div>
        </Flex>
      </form>
    </Modal>
  );
};
