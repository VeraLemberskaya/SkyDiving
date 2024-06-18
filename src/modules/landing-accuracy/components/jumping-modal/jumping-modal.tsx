import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { DatePickerField, InputNumberField } from '@components/form-fields';

import {
  JumpingModalProps,
  JumpingFormValues,
} from '../../landing-accuracy.types';

import {
  MAX_ACCURACY,
  MAX_JUMPING_NUMBER,
  MIN_ACCURACY,
  MIN_JUMPING_NUMBER,
  validationSchema,
} from './jumping-modal.config';
import { getDefaultValues } from './jumping-modal.lib';

export const JumpingModal = ({
  nextJumpingNumber,
  jumping,
  isOpen,
  title,
  onClose,
  onSubmit: onFormSubmit,
}: JumpingModalProps) => {
  const { control, reset, handleSubmit } = useForm<JumpingFormValues>({
    defaultValues: getDefaultValues(jumping, nextJumpingNumber),
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (values: JumpingFormValues) => {
    onFormSubmit(values);
    reset();
    onClose();
  };

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable={false}
      open={isOpen}
      title={title}
      onCancel={onClose}
      onOk={handleSubmit(onSubmit)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical gap="middle">
          <DatePickerField
            componentProps={{
              label: 'Дата прыжка',
              required: true,
            }}
            control={control}
            name="performanceDate"
          />
          <InputNumberField
            componentProps={{
              precision: 0,
              label: 'Номер прыжка',
              required: true,
              min: MIN_JUMPING_NUMBER,
              max: MAX_JUMPING_NUMBER,
              disabled: true,
            }}
            control={control}
            name="jumpingNumber"
          />
          <InputNumberField
            componentProps={{
              precision: 0,
              label: 'Точность приземления',
              required: true,
              min: MIN_ACCURACY,
              max: MAX_ACCURACY,
            }}
            control={control}
            name="accuracy"
          />
        </Flex>
      </form>
    </Modal>
  );
};
