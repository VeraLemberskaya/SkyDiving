import { TeamForm } from '../team-form';

export const AddTeamForm = () => {
  const handleSubmit = () => {
    //add form
  };

  return <TeamForm title="Новая команда" onSubmit={handleSubmit} />;
};
