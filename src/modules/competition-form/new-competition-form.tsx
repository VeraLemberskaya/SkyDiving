import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';
import { routes } from '@constants/routes';

import { CompetitionForm } from './competition-form';
import { CompetitionData } from './competition-form.types';

export const NewCompetitionForm = () => {
  const [searchParams] = useSearchParams();
  const searchId = searchParams.get('id');
  const competitionId = searchId ? Number(searchId) : undefined;

  const { data } = API.competitions.useCompetitionQuery(competitionId);

  const { mutate: create } = API.competitions.useCreateCompetitionMutation();
  const { mutate: update } = API.competitions.useUpdateCompetitionMutation();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const navigateToCompetitionReferees = ({ id }: { id: number }) => {
    navigate(routes.COMPETITION_REFEREES_BY_ID(id));
  };

  const handleSubmit = async (data: CompetitionData) => {
    if (!competitionId) {
      create(data, { onSuccess: navigateToCompetitionReferees });
    } else {
      update(
        { id: competitionId, data },
        {
          onSuccess: ({ id }) => {
            queryClient.invalidateQueries({ queryKey: ['competitions', id] });
            navigateToCompetitionReferees({ id });
          },
        },
      );
    }
  };

  return <CompetitionForm competition={data} onSubmit={handleSubmit} />;
};
