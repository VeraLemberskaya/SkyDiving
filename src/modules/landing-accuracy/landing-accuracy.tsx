import { useState } from 'react';
import { Flex } from 'antd';

import { ParticipantsTree } from '@modules/participants-tree';
import { participants } from '@api/mocks';

import styles from './landing-accuracy.module.scss';
import { ParticipantJumping } from './components/participant-jumping';

const options = {
  selectTeams: false,
  selectParticipants: true,
  deleteParticipants: false,
  deleteTeams: false,
};

export const LandingAccuracy = () => {
  const [participantId, setParticipantId] = useState<number>(
    participants[0].id,
  );

  const handleSelect = ({ id }: { id: number }) => {
    setParticipantId(id);
  };

  const selectedParticipant = participants.find(
    ({ id }) => id === participantId,
  );

  return (
    <Flex className={styles.jumping}>
      <ParticipantsTree
        options={options}
        selectedParticipantId={participantId}
        onSelect={handleSelect}
      />
      {selectedParticipant && (
        <ParticipantJumping participant={selectedParticipant} />
      )}
    </Flex>
  );
};
