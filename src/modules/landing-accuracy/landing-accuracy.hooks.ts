import { useMemo, useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';
import { CompetitionMember } from '@api/types';

import { JumpingFormValues } from './landing-accuracy.types';

export const useParticipant = (competitionId: number) => {
  const { data } = API.teams.useCompetitionMembersQuery(competitionId);

  const participants = useMemo(() => {
    const teamMembers = data?.teams.flatMap(({ members }) => members) ?? [];
    const individuals = data?.individuals ?? [];

    return [...teamMembers, ...individuals];
  }, [data?.individuals, data?.teams]);

  const [participantId, setParticipantId] = useState<number>();

  useEffect(() => {
    if (participants.length) {
      setParticipantId(participants[0].id);
    }
  }, [participants, participants.length]);

  const handleSelect = ({ id }: { id: number }) => {
    setParticipantId(id);
  };

  const selectedParticipant = participants.find(
    ({ id }) => id === participantId,
  );

  return {
    participantId,
    selectedParticipant,
    handleSelect,
  };
};

export const useSkydiverJumping = (skydiver: CompetitionMember) => {
  const { competitionId, skydiverId, memberNumber } = skydiver;

  const { mutate: addJumping } = API.jumping.useAddJumpingMutation();
  const { mutate: updateJumping } = API.jumping.useUpdateJumpingMutation();
  const { mutate: deleteJumping } = API.jumping.useDeleteJumpingMutation();

  const queryClient = useQueryClient();

  const onDelete = (jumpingId: number) => {
    deleteJumping(
      { jumpingId, competitionId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['jumping-list', competitionId, skydiverId],
          });

          queryClient.invalidateQueries({
            queryKey: ['jumping-number', competitionId, skydiverId],
          });
        },
      },
    );
  };

  const onEdit = ({
    jumpingId,
    values,
  }: {
    jumpingId: number;
    values: JumpingFormValues;
  }) => {
    const { accuracy, performanceDate } = values;

    const data = {
      id: jumpingId,
      accuracy: Number(accuracy),
      performanceDate: performanceDate?.toISOString(),
      memberNumber,
    };

    updateJumping(
      { competitionId, skydiverId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['jumping-list', competitionId, skydiverId],
          });
        },
      },
    );
  };

  const onAdd = ({
    accuracy,
    jumpingNumber,
    performanceDate,
  }: JumpingFormValues) => {
    const data = {
      accuracy: Number(accuracy),
      jumpingNumber,
      performanceDate: performanceDate?.toISOString(),
      memberNumber,
    };

    addJumping(
      { competitionId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['jumping-list', competitionId, skydiverId],
          });

          queryClient.invalidateQueries({
            queryKey: ['jumping-number', competitionId, skydiverId],
          });
        },
      },
    );
  };

  return {
    onAdd,
    onEdit,
    onDelete,
  };
};
