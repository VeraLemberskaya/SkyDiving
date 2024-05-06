import { useState } from 'react';
import { Flex } from 'antd';

import { ParticipantsTree } from './components/participants-tree';
import { teams } from './mock/data';
import { Mode } from './manage-participants-tree.types';
import { AddTeamForm } from './components/add-team-form';
import { EditTeamForm } from './components/edit-team-form';
import styles from './manage-participants-tree.module.scss';
import { AddParticipantsModal } from './components/add-participants-modal';

export const ManageParticipantsTree = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamId, setTeamId] = useState<number | undefined>(teams[0].id);
  const [mode, setMode] = useState<Mode>('edit');

  const openAddTeamForm = () => setMode('add');
  const openEditTeamForm = () => setMode('edit');
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSelect = (teamId: number) => {
    setTeamId(teamId);
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
