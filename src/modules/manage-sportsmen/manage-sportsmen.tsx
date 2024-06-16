import { ManageCredentialButton } from '@components/manage-credential-button';
import { API } from '@api/index';
import { DEFAULT_SIZE } from '@constants/pagination';

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
  const sportsmanId = useManageSportsmenStore((state) => state.sportsmanId);
  const search = useManageSportsmenStore((state) => state.search);
  const filter = useManageSportsmenStore((state) => state.filter);
  const page = useManageSportsmenStore((state) => state.page);

  const { data, isPending } = API.skydivers.useSkydiversQuery({
    number: page,
    size: DEFAULT_SIZE,
    name: search,
    gender: filter?.gender,
    sportRank: filter?.sportRank,
    isInternal: filter?.isInternal,
  });

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

  const total = data ? data.totalPages * DEFAULT_SIZE : undefined;
  const sportsman = data?.content.find(({ id }) => id === sportsmanId);

  return (
    <>
      <SportsmenInfoTable
        data={data?.content}
        disableActionsForInternal={onlyExternal}
        loading={isPending}
        start={(sportsmanId) =>
          !onlyExternal ? (
            <ManageCredentialButton
              onClick={handleManageCredentials(sportsmanId)}
            />
          ) : undefined
        }
        total={total}
      />
      <AddSportsmanModal isOpen={isAddModalOpen} onClose={closeModal} />
      <SportsmenFilterModal isOpen={isFilterModalOpen} onClose={closeModal} />
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
