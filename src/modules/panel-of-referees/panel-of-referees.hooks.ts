import { useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';
import { CompetitionReferee } from '@api/types';

import { PAGE_NUMBER, PAGE_SIZE } from './panel-of-referees.config';
import { AddRefereeFormValues, CollegiumType } from './panel-of-referees.types';

export const useFilteredReferees = ({
  mainCollegium,
  collegium,
}: {
  mainCollegium: CompetitionReferee[];
  collegium: CompetitionReferee[];
}) => {
  const { data } = API.referees.useRefereesQuery({
    number: PAGE_NUMBER,
    size: PAGE_SIZE,
  });

  const collegiumRefereesIds = useMemo(() => {
    return [...mainCollegium, ...collegium].map(({ id }) => id);
  }, [collegium, mainCollegium]);

  const filteredReferees = useMemo(() => {
    return data?.content.filter(({ id }) => !collegiumRefereesIds.includes(id));
  }, [collegiumRefereesIds, data?.content]);

  return filteredReferees;
};

export const useDeleteRefereeFromCompetition = (competitionId: number) => {
  const { mutate: deleteReferee } =
    API.referees.useDeleteRefereeFromCompetitionMutation();
  const queryClient = useQueryClient();

  const handleDelete = (refereeId: number) => () => {
    deleteReferee(
      { refereeId, competitionId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['competition-referees', competitionId],
          });
        },
      },
    );
  };

  return {
    deleteReferee: handleDelete,
  };
};

export const useAddRefereeToCompetition = ({
  competitionId,
  mainCollegium,
  collegium,
}: {
  competitionId: number;
  mainCollegium: CompetitionReferee[];
  collegium: CompetitionReferee[];
}) => {
  const { mutate: addReferee } =
    API.competitions.useAddRefereeToCompetitionMutation();
  const queryClient = useQueryClient();

  const [collegiumType, setCollegiumType] = useState<CollegiumType>('main');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddRefereeToMainCollegium = () => {
    setCollegiumType('main');
    openModal();
  };

  const handleAddRefereeToRegularCollegium = () => {
    setCollegiumType('regular');
    openModal();
  };

  const handleAddReferee = (values: AddRefereeFormValues) => {
    const refereeNumber =
      collegiumType === 'main' ? mainCollegium?.length : collegium?.length;

    const data = {
      refereeId: Number(values.refereeId),
      workPerformed: values.workPerformed,
      isMainCollegium: collegiumType === 'main',
      refereeNumber: refereeNumber || 1,
    };

    addReferee(
      { id: competitionId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['competition-referees', competitionId],
          });
        },
      },
    );
  };

  return {
    isModalOpen,
    closeModal,
    handleAddRefereeToMainCollegium,
    handleAddRefereeToRegularCollegium,
    handleAddReferee,
  };
};
