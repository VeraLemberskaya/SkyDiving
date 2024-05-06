import { EditTeamFormProps } from '../../manage-participants-tree.types';
import { TeamForm } from '../team-form';

export const EditTeamForm = ({ team }: EditTeamFormProps) => {
  const handleSubmit = () => {
    //edit form
  };

  return (
    <TeamForm
      key={team.id}
      team={team}
      title={team.name}
      onSubmit={handleSubmit}
    />
  );
};
