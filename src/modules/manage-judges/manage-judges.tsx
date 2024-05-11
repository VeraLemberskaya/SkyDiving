import { useState } from 'react';

import { ManageCredentialButton } from '@components/manage-credential-button';
import { judgesData } from '@api/mocks';

import { JudgesInfoTable } from './components/judges-info-table';
import { AddJudgeModal } from './components/add-judge-modal';
import { Modal } from './manage-judges.types';
import { initialModal } from './manage-judges.config';

export const ManageJudges = () => {
  const [judgeId, setJudgeId] = useState<number | undefined>();
  const [modal, setModal] = useState<Modal>(initialModal);

  const openAddModal = () => setModal({ isOpen: true, type: 'add' });
  const openEditModal = () => setModal({ isOpen: true, type: 'edit' });
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const handleEdit = (id: number) => {
    setJudgeId(id);
    openEditModal();
  };

  const judge = judgesData.find(({ id }) => id === judgeId);
  const isAddModalOpen = modal.isOpen && modal.type === 'add';
  const isEditModalOpen = modal.isOpen && modal.type === 'edit';

  return (
    <>
      <JudgesInfoTable
        data={judgesData}
        start={<ManageCredentialButton />}
        onAdd={openAddModal}
      />
      <AddJudgeModal isOpen={isAddModalOpen} onClose={closeModal} />
    </>
  );
};
