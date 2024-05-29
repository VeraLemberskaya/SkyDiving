import { useMemo } from 'react';
import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputNumberField, SelectField } from '@components/form-fields';
import { sportsmenData } from '@api/mocks';

import {
  StartRefereeingModalProps,
  StartRefereeingValues,
} from '../../competition-acrobatics-info.types';

import { getParticipantsOptions } from './start-refereeing-modal.lib';
import { startRefereeingSchema } from './start-refereeing-modal.config';

const defaultValues = {
  round: null,
  series: null,
  participantId: null,
};

export const StartRefereeingModal = ({
  isOpen,
  onClose,
}: StartRefereeingModalProps) => {
  const { reset, control } = useForm<StartRefereeingValues>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(startRefereeingSchema),
  });

  const handleCancel = () => {
    reset();
    onClose();
  };

  const participantOptions = useMemo(
    () => getParticipantsOptions(sportsmenData),
    [],
  );

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable
      open={isOpen}
      title="Начать судейство"
      onCancel={handleCancel}
    >
      <form>
        <Flex vertical gap="large">
          <Flex gap="middle">
            <InputNumberField
              componentProps={{
                placeholder: 'Введите раунд',
                label: 'Раунд',
                required: true,
              }}
              control={control}
              name="round"
            />
            <InputNumberField
              componentProps={{
                placeholder: 'Введите серию',
                label: 'Серия',
                required: true,
              }}
              control={control}
              name="series"
            />
          </Flex>
          <SelectField
            componentProps={{
              placeholder: 'Выберите участника',
              label: 'Участник',
              required: true,
              options: participantOptions,
            }}
            control={control}
            name="participantId"
          />
        </Flex>
      </form>
    </Modal>
  );
};
