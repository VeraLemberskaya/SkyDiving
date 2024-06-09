import { competitions } from '@api/mocks';

import { CompetitionForm } from './competition-form';
import { EditCompetitionFormProps } from './competition-form.types';

export const EditCompetitionForm = ({
  competitionId,
}: EditCompetitionFormProps) => {
  const competition = competitions.find(({ id }) => id === competitionId);

  const handleSubmit = () => {
    //edit
  };

  return <CompetitionForm competition={competition} onSubmit={handleSubmit} />;
};
