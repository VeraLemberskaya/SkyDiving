import { useState } from 'react';
import { Flex } from 'antd';

import { API } from '@api/index';

import { ParticipantsTree } from '../participants-tree';

import {
  ManageParticipantsTreeProps,
  Mode,
} from './manage-participants-tree.types';
import { AddTeamForm } from './components/add-team-form';
import { EditTeamForm } from './components/edit-team-form';
import styles from './manage-participants-tree.module.scss';
import { AddParticipantsModal } from './components/add-participants-modal';

const treeOptions = {
  selectTeams: true,
  selectParticipants: false,
  deleteParticipants: true,
  deleteTeams: true,
};

export const ManageParticipantsTree = ({
  competitionId,
}: ManageParticipantsTreeProps) => {
  const { data } = API.teams.useCompetitionMembersQuery(competitionId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamId, setTeamId] = useState<number | undefined>(data?.teams[0]?.id);
  const [mode, setMode] = useState<Mode>('add');

  const openAddTeamForm = () => setMode('add');
  const openEditTeamForm = () => setMode('edit');
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSelect = ({ id }: { id: number }) => {
    setTeamId(id);
    openEditTeamForm();
  };

  const handleAddTeam = () => {
    setTeamId(undefined);
    openAddTeamForm();
  };

  const handleDeleteTeam = () => {
    setTeamId(undefined);
    openAddTeamForm();
  };

  const selectedTeam = data?.teams.find(({ id }) => id === teamId);
  const isEditing = mode === 'edit' && selectedTeam;
  const isAdding = mode === 'add';

  return (
    <Flex className={styles.container}>
      <ParticipantsTree
        competitionId={competitionId}
        options={treeOptions}
        selectedTeamId={teamId}
        onAddParticipant={openModal}
        onAddTeam={handleAddTeam}
        onDeleteTeam={handleDeleteTeam}
        onSelect={handleSelect}
      />
      {isAdding && <AddTeamForm competitionId={competitionId} />}
      {isEditing && (
        <EditTeamForm competitionId={competitionId} team={selectedTeam} />
      )}
      <AddParticipantsModal
        competitionId={competitionId}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </Flex>
  );
};
