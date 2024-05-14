import { useState } from 'react';

import { ManageCredentialButton } from '@components/manage-credential-button';
import { refereeData } from '@api/mocks';

import { RefereesInfoTable } from './components/referees-info-table';
import { AddRefereeModal } from './components/add-referee-modal';
import { ManageRefereesProps, Modal } from './manage-referees.types';
import { initialModal } from './manage-referees.config';
import { EditRefereeModal } from './components/edit-referee-modal/edit-referee-modal';
import { FilterRefereesModal } from './components/filter-referee-model';

export const ManageReferees = ({ onManageCredential }: ManageRefereesProps) => {
  const [refereeId, setRefereeId] = useState<number | undefined>();
  const [modal, setModal] = useState<Modal>(initialModal);

  const openAddModal = () => setModal({ isOpen: true, type: 'add' });
  const openEditModal = () => setModal({ isOpen: true, type: 'edit' });
  const openFilterModal = () => setModal({ isOpen: true, type: 'filter' });
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const handleEdit = (id: number) => {
    setRefereeId(id);
    openEditModal();
  };

  const handleFilter = () => {
    // filter refereeData
    openFilterModal();
  };

  const handleManageCredentials = (refereeId: number) => () => {
    if (onManageCredential) {
      onManageCredential(refereeId);
    }
  };

  const referee = refereeData.find(({ id }) => id === refereeId);
  const isAddModalOpen = modal.isOpen && modal.type === 'add';
  const isEditModalOpen = modal.isOpen && modal.type === 'edit';
  const isFilterModalOpen = modal.isOpen && modal.type === 'filter';

  return (
    <>
      <RefereesInfoTable
        data={refereeData}
        start={(refereeId) => (
          <ManageCredentialButton
            onClick={handleManageCredentials(refereeId)}
          />
        )}
        onAdd={openAddModal}
        onEdit={handleEdit}
        onFilter={handleFilter}
      />
      <AddRefereeModal isOpen={isAddModalOpen} onClose={closeModal} />
      <FilterRefereesModal
        isOpen={isFilterModalOpen}
        title="Выбирите данные для фильтрации"
        onClose={closeModal}
      />
      {referee && (
        <EditRefereeModal
          isOpen={isEditModalOpen}
          referee={referee}
          onClose={closeModal}
        />
      )}
    </>
  );
};
