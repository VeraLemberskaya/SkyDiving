import { ManageCredentialButton } from '@components/manage-credential-button';
import { sportsmenData } from '@api/mocks';

import { SportsmenInfoTable } from './components/sportsmen-info-table';
import { ManageSportsmenProps } from './manage-sportsmen.types';
import { AddExternalSportsmanModal } from './components/external-sportsman/add-external-sportsman-modal';
import {
  AddInternalSportsmanModal,
  EditInternalSportsmanModal,
} from './components/internal-sportsman';
import { EditExternalSportsmanModal } from './components/external-sportsman/edit-external-sportsman-modal';
import { SportsmenFilterModal } from './components/sportsmen-filter';
import { useManageSportsmenStore } from './manage-sportsmen.store';

export const ManageSportsmen = ({
  onlyExternal = false,
}: ManageSportsmenProps) => {
  const modal = useManageSportsmenStore((state) => state.modal);
  const closeModal = useManageSportsmenStore((state) => state.closeModal);

  const AddSportsmanModal = onlyExternal
    ? AddExternalSportsmanModal
    : AddInternalSportsmanModal;

  const EditSportsmanModal = onlyExternal
    ? EditExternalSportsmanModal
    : EditInternalSportsmanModal;

  const isAddModalOpen = modal.isOpen && modal.type === 'add';
  const isEditModalOpen = modal.isOpen && modal.type === 'edit';
  const isFilterModalOpen = modal.isOpen && modal.type === 'filter';

  return (
    <>
      <SportsmenInfoTable
        data={sportsmenData}
        disableActionsForInternal={onlyExternal}
        start={!onlyExternal ? <ManageCredentialButton /> : undefined}
      />
      <AddSportsmanModal isOpen={isAddModalOpen} onClose={closeModal} />
      <SportsmenFilterModal isOpen={isFilterModalOpen} onClose={closeModal} />
      <EditSportsmanModal isOpen={isEditModalOpen} onClose={closeModal} />
    </>
  );
};
