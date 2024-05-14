import { ManageCredentialButton } from '@components/manage-credential-button';
import { refereeData } from '@api/mocks';

import { RefereesInfoTable } from './components/referees-info-table';
import { AddRefereeModal } from './components/add-referee-modal';
import { ManageRefereesProps } from './manage-referees.types';
import { EditRefereeModal } from './components/edit-referee-modal/edit-referee-modal';
import { FilterRefereesModal } from './components/filter-referee-model';
import { useManageRefereesStore } from './manage-referees.store';

export const ManageReferees = ({ onManageCredential }: ManageRefereesProps) => {
  const modal = useManageRefereesStore((state) => state.modal);
  const closeModal = useManageRefereesStore((state) => state.closeModal);

  const handleManageCredentials = (refereeId: number) => () => {
    if (onManageCredential) {
      onManageCredential(refereeId);
    }
  };

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
      />
      <AddRefereeModal isOpen={isAddModalOpen} onClose={closeModal} />
      <FilterRefereesModal isOpen={isFilterModalOpen} onClose={closeModal} />
      <EditRefereeModal isOpen={isEditModalOpen} onClose={closeModal} />
    </>
  );
};
