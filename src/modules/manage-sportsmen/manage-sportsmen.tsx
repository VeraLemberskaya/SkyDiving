import { ManageCredentialButton } from '@components/manage-credential-button';
import { sportsmenData } from '@api/mocks';

import { SportsmenInfoTable } from './components/sportsmen-info-table';
import { ManageSportsmenProps } from './manage-sportsmen.types';
import { SportsmenFilterModal } from './components/sportsmen-filter';
import { useManageSportsmenStore } from './manage-sportsmen.store';
import {
  AddExternalSportsmanModal,
  EditExternalSportsmanModal,
} from './components/external-sportsman';
import {
  AddInternalSportsmanModal,
  EditInternalSportsmanModal,
} from './components/internal-sportsman';

export const ManageSportsmen = ({
  onlyExternal = false,
  onManageCredential,
}: ManageSportsmenProps) => {
  const modal = useManageSportsmenStore((state) => state.modal);
  const closeModal = useManageSportsmenStore((state) => state.closeModal);

  const handleManageCredentials = (sportsmanId: number) => () => {
    if (onManageCredential) {
      onManageCredential(sportsmanId);
    }
  };

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
        start={(sportsmanId) =>
          !onlyExternal ? (
            <ManageCredentialButton
              onClick={handleManageCredentials(sportsmanId)}
            />
          ) : undefined
        }
      />
      <AddSportsmanModal isOpen={isAddModalOpen} onClose={closeModal} />
      <SportsmenFilterModal isOpen={isFilterModalOpen} onClose={closeModal} />
      <EditSportsmanModal isOpen={isEditModalOpen} onClose={closeModal} />
    </>
  );
};
