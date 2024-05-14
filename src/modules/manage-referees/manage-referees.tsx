import { useState } from 'react';

import { ManageCredentialButton } from '@components/manage-credential-button';
import { judgesData } from '@api/mocks';

import { JudgesInfoTable } from './components/referees-info-table';
import { AddJudgeModal } from './components/add-referee-modal';
import { ManageJudgesProps, Modal } from './manage-referees.types';
import { initialModal } from './manage-referees.config';
import { EditJudgeModal } from './components/edit-referee-modal/edit-referee-modal';
import { FilterJudgesModal } from './components/filter-referee-model';

export const ManageJudges = ({ onManageCredential }: ManageJudgesProps) => {
  const [judgeId, setJudgeId] = useState<number | undefined>();
  const [modal, setModal] = useState<Modal>(initialModal);

  const openAddModal = () => setModal({ isOpen: true, type: 'add' });
  const openEditModal = () => setModal({ isOpen: true, type: 'edit' });
  const openFilterModal = () => setModal({ isOpen: true, type: 'filter' });
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const handleEdit = (id: number) => {
    setJudgeId(id);
    openEditModal();
  };

  const handleFilter = () => {
    // filter judgesData
    openFilterModal();
  };

  const handleManageCredentials = (judgeId: number) => () => {
    if (onManageCredential) {
      onManageCredential(judgeId);
    }
  };

  const referee = judgesData.find(({ id }) => id === judgeId);
  const isAddModalOpen = modal.isOpen && modal.type === 'add';
  const isEditModalOpen = modal.isOpen && modal.type === 'edit';
  const isFilterModalOpen = modal.isOpen && modal.type === 'filter';

  return (
    <>
      <JudgesInfoTable
        data={judgesData}
        start={(judgeId) => (
          <ManageCredentialButton onClick={handleManageCredentials(judgeId)} />
        )}
        onAdd={openAddModal}
        onEdit={handleEdit}
        onFilter={handleFilter}
      />
      <AddJudgeModal isOpen={isAddModalOpen} onClose={closeModal} />
      <FilterJudgesModal
        isOpen={isFilterModalOpen}
        title="Выбирите данные для фильтрации"
        onClose={closeModal}
      />
      {referee && (
        <EditJudgeModal
          isOpen={isEditModalOpen}
          referee={referee}
          onClose={closeModal}
        />
      )}
    </>
  );
};
