import { useState } from 'react';

import { SportsmenInfoTable } from '@modules/sportsmen-info-table';
import {
  AddSportsmanModal,
  EditSportsmanModal,
} from '@modules/sportsman-modal';
import { sportsmenData } from '@api/mocks';

import { ManageParticipantsTitle } from './components/manage-participants-title';
import { initialModal } from './manage-participants.config';
import { Modal } from './manage-participants.types';
import styles from './manage-participants.module.scss';

export const ManageParticipants = () => {
  const [sportsmanId, setSportsmanId] = useState<number | undefined>();
  const [modal, setModal] = useState<Modal>(initialModal);

  const openAddModal = () => setModal({ isOpen: true, type: 'add' });
  const openEditModal = () => setModal({ isOpen: true, type: 'edit' });
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const handleEdit = (id: number) => {
    setSportsmanId(id);
    openEditModal();
  };

  const sportsman = sportsmenData.find(({ id }) => id === sportsmanId);
  const isAddModalOpen = modal.isOpen && modal.type === 'add';
  const isEditModalOpen = modal.isOpen && modal.type === 'edit';

  return (
    <>
      <ManageParticipantsTitle />
      <div className={styles.content}>
        <SportsmenInfoTable
          data={sportsmenData}
          onAdd={openAddModal}
          onEdit={handleEdit}
        />
      </div>
      <AddSportsmanModal isOpen={isAddModalOpen} onClose={closeModal} />
      {sportsman && (
        <EditSportsmanModal
          isOpen={isEditModalOpen}
          sportsman={sportsman}
          onClose={closeModal}
        />
      )}
    </>
  );
};
