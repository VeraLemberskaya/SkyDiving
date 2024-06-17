import { Key } from 'react';

export const getTeamIdFromKey = (key: Key) => {
  return Number(key.toString().replace('team', ''));
};

export const getParticipantIdFromKey = (key: Key) => {
  return Number(key.toString().replace('participant', ''));
};

export const getTreeKeys = ({
  selectedTeamId,
  selectedParticipantId,
}: {
  selectedTeamId?: number;
  selectedParticipantId?: number;
}) => {
  const keys = [];

  if (selectedTeamId) keys.push(`team${selectedTeamId}`);
  if (selectedParticipantId) keys.push(`participant${selectedParticipantId}`);

  return keys;
};
