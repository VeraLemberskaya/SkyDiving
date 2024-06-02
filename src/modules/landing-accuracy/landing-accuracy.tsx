import { useState } from 'react';

import { ParticipantsTree } from '@modules/participants-tree';

const options = {
  selectTeams: false,
  selectParticipants: true,
  deleteParticipants: false,
  deleteTeams: false,
};

export const LandingAccuracy = () => {
  const [participantId, setParticipantId] = useState<number>();

  const handleSelect = ({ id }: { id: number }) => {
    setParticipantId(id);
  };

  return (
    <ParticipantsTree
      options={options}
      selectedParticipantId={participantId}
      onSelect={handleSelect}
    />
  );
};
