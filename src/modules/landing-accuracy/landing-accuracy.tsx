import { Flex } from 'antd';

import { ParticipantsTree } from '@modules/participants-tree';

import styles from './landing-accuracy.module.scss';
import { ParticipantJumping } from './components/participant-jumping';
import { LandingAccuracyProps } from './landing-accuracy.types';
import { useParticipant } from './landing-accuracy.hooks';

const options = {
  selectTeams: false,
  selectParticipants: true,
  deleteParticipants: false,
  deleteTeams: false,
};

export const LandingAccuracy = ({ competitionId }: LandingAccuracyProps) => {
  const { participantId, selectedParticipant, handleSelect } =
    useParticipant(competitionId);

  return (
    <Flex className={styles.jumping}>
      {selectedParticipant && (
        <>
          <ParticipantsTree
            competitionId={competitionId}
            defaultExpandedTeamId={selectedParticipant?.teamId}
            options={options}
            selectedParticipantId={participantId}
            onSelect={handleSelect}
          />
          <ParticipantJumping participant={selectedParticipant} />
        </>
      )}
    </Flex>
  );
};
