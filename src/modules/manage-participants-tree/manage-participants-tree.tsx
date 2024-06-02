import { useState } from 'react';
import { Flex } from 'antd';

import { teams } from '@api/mocks';

import { ParticipantsTree } from '../participants-tree';

import { Mode } from './manage-participants-tree.types';
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

export const ManageParticipantsTree = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamId, setTeamId] = useState<number | undefined>(teams[0].id);
  const [mode, setMode] = useState<Mode>('edit');

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

  const selectedTeam = teams.find(({ id }) => id === teamId);
  const isEditing = mode === 'edit' && selectedTeam;
  const isAdding = mode === 'add';

  return (
    <Flex className={styles.container}>
      <ParticipantsTree
        options={treeOptions}
        selectedTeamId={teamId}
        onAddParticipant={openModal}
        onAddTeam={handleAddTeam}
        onSelect={handleSelect}
      />
      {isAdding && <AddTeamForm />}
      {isEditing && <EditTeamForm team={selectedTeam} />}
      <AddParticipantsModal isOpen={isModalOpen} onClose={closeModal} />
    </Flex>
  );
};
