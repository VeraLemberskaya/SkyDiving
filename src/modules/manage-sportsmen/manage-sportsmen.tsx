import { useState } from 'react';

import { ManageCredentialButton } from '@components/manage-credential-button';
import { sportsmenData } from '@api/mocks';

import { SportsmenInfoTable } from './components/sportsmen-info-table';
import { ManageSportsmenProps, Modal } from './manage-sportsmen.types';
import { AddExternalSportsmanModal } from './components/external-sportsman/add-external-sportsman-modal';
import {
  AddInternalSportsmanModal,
  EditInternalSportsmanModal,
} from './components/internal-sportsman';
import { initialModal } from './manage-sportsmen.config';
import { EditExternalSportsmanModal } from './components/external-sportsman/edit-external-sportsman-modal';

export const ManageSportsmen = ({
  onlyExternal = false,
}: ManageSportsmenProps) => {
  const [sportsmanId, setSportsmanId] = useState<number | undefined>();
  const [modal, setModal] = useState<Modal>(initialModal);

  const openAddModal = () => setModal({ isOpen: true, type: 'add' });
  const openEditModal = () => setModal({ isOpen: true, type: 'edit' });
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const handleEdit = (id: number) => {
    setSportsmanId(id);
    openEditModal();
  };

  const AddSportsmanModal = onlyExternal
    ? AddExternalSportsmanModal
    : AddInternalSportsmanModal;

  const EditSportsmanModal = onlyExternal
    ? EditExternalSportsmanModal
    : EditInternalSportsmanModal;

  const isAddModalOpen = modal.isOpen && modal.type === 'add';
  const isEditModalOpen = modal.isOpen && modal.type === 'edit';

  return (
    <>
      <SportsmenInfoTable
        data={sportsmenData}
        disableActionsForInternal={onlyExternal}
        start={!onlyExternal ? <ManageCredentialButton /> : undefined}
        onAdd={openAddModal}
        onEdit={handleEdit}
      />
      <AddSportsmanModal isOpen={isAddModalOpen} onClose={closeModal} />
      {sportsmanId && (
        <EditSportsmanModal
          isOpen={isEditModalOpen}
          sportsmanId={sportsmanId}
          onClose={closeModal}
        />
      )}
    </>
  );
};
