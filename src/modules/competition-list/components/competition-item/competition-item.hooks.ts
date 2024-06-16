import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';
import { routes } from '@constants/routes';

export const useCompetitionItem = (id: number) => {
  const { mutate: deleteCompetition } =
    API.competitions.useDeleteCompetitionMutation();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleEdit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    navigate(routes.EDIT_COMPETITION_BY_ID(id));
  };

  const handleDelete = () => {
    deleteCompetition(id, {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ['competitions'] }),
    });
  };

  const handleSelect = () => {
    navigate(routes.COMPETITION_BY_ID(id));
  };

  return {
    handleEdit,
    handleDelete,
    handleSelect,
  };
};
