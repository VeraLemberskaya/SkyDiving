import { Modal } from 'antd';
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

  const isValidAge =
    age !== null && age < AGE_OF_MAJORITY && age >= MIN_SPORTSMAN_AGE;

  return (
    <Modal
      centered
      destroyOnClose
      className={styles.modal}
      maskClosable={false}
      open={isOpen}
      title={title}
      width={700}
      onCancel={onCancel}
      onOk={handleSubmit(onSubmit)}
    >
      <form className={styles.modal_form}>
        <MainSportsmanInfo control={control} />
        {isValidAge && <SportsmanParentsInfo control={control} />}
        <PassportSportsmanInfo control={control} />
        <SportsActivityInfo control={control} />
      </form>
    </Modal>
  );
};
