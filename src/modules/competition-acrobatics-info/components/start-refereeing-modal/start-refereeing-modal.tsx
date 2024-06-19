import { useMemo } from 'react';
import { Flex, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';

import { InputNumberField, SelectField } from '@components/form-fields';
import { API } from '@api/index';

import {
  StartRefereeingModalProps,
  StartRefereeingValues,
} from '../../competition-acrobatics-info.types';

import {
  getCompetitionMembers,
  getParticipantsOptions,
} from './start-refereeing-modal.lib';
import {
  MAX_ROUND,
  MAX_SERIE,
  MIN_ROUND,
  MIN_SERIE,
  startRefereeingSchema,
} from './start-refereeing-modal.config';

const defaultValues = {
  roundNumber: null,
  serieNumber: null,
  skydiverId: null,
};

export const StartRefereeingModal = ({
  competitionId,
  isOpen,
  onClose,
}: StartRefereeingModalProps) => {
  const { data } = API.teams.useCompetitionMembersQuery(competitionId);
  const { mutate: createRefereeing } =
    API.trickRefereeing.useCreateRefereeingMutation();
  const queryClient = useQueryClient();

  const { handleSubmit, reset, control } = useForm<StartRefereeingValues>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(startRefereeingSchema),
  });

  const onSubmit = (values: StartRefereeingValues) => {
    const data = {
      competitionId,
      skydiverId: Number(values.skydiverId),
      serieNumber: Number(values.serieNumber),
      roundNumber: Number(values.roundNumber),
    };

    createRefereeing(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['competition-refereeing-series', competitionId],
        });
      },
    });
    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const participantOptions = useMemo(() => {
    const members = getCompetitionMembers(data);
    const options = getParticipantsOptions(members);

    return options;
  }, [data]);

  return (
    <Modal
      centered
      destroyOnClose
      maskClosable
      open={isOpen}
      title="Начать судейство"
      onCancel={handleCancel}
      onOk={handleSubmit(onSubmit)}
    >
      <form>
        <Flex vertical gap="large">
          <Flex gap="middle">
            <InputNumberField
              componentProps={{
                placeholder: 'Введите раунд',
                label: 'Раунд',
                required: true,
                min: MIN_ROUND,
                max: MAX_ROUND,
              }}
              control={control}
              name="roundNumber"
            />
            <InputNumberField
              componentProps={{
                placeholder: 'Введите серию',
                label: 'Серия',
                required: true,
                min: MIN_SERIE,
                max: MAX_SERIE,
              }}
              control={control}
              name="serieNumber"
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
            name="skydiverId"
          />
        </Flex>
      </form>
    </Modal>
  );
};
