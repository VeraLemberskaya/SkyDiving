import { useState } from 'react';

import { ManageCredentialButton } from '@components/manage-credential-button';
import { judgesData } from '@api/mocks';

import { JudgesInfoTable } from './components/judges-info-table';
import { AddJudgeModal } from './components/add-judge-modal';
import { Modal } from './manage-judges.types';
import { initialModal } from './manage-judges.config';
import { EditJudgeModal } from './components/edit-judge-modal/edit-judge-modal';
import { FilterJudgesModal } from './components/filter-judge-model';

export const ManageJudges = () => {
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

  const judge = judgesData.find(({ id }) => id === judgeId);
  const isAddModalOpen = modal.isOpen && modal.type === 'add';
  const isEditModalOpen = modal.isOpen && modal.type === 'edit';
  const isFilterModalOpen = modal.isOpen && modal.type === 'filter';

  return (
    <>
      <JudgesInfoTable
        data={judgesData}
        start={<ManageCredentialButton />}
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
      {judge && (
        <EditJudgeModal
          isOpen={isEditModalOpen}
          judge={judge}
          onClose={closeModal}
        />
      )}
    </>
  );
};
