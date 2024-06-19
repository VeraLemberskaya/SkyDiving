import { Button, Flex } from 'antd';

import { API } from '@api/index';

import { RefereesTable } from './components/referees-tables';
import { AddRefereeModal } from './components/add-referee-modal';
import { PanelOfRefereesProps } from './panel-of-referees.types';
import {
  useAddRefereeToCompetition,
  useFilteredReferees,
} from './panel-of-referees.hooks';
import styles from './panel-of-referees.module.scss';

export const PanelOfReferees = ({
  competitionId,
  confirmButtonText,
  onConfirm,
}: PanelOfRefereesProps) => {
  const { data, isSuccess } =
    API.referees.useCompetitionRefereesQuery(competitionId);

  const mainCollegium = data?.mainCollegium ?? [];
  const collegium = data?.collegium ?? [];

  const {
    isModalOpen,
    closeModal,
    handleAddRefereeToMainCollegium,
    handleAddRefereeToRegularCollegium,
    handleAddReferee,
  } = useAddRefereeToCompetition({
    mainCollegium,
    collegium,
    competitionId,
  });

  const referees = useFilteredReferees({ mainCollegium, collegium });
  const hasData = mainCollegium?.length || collegium?.length;

  if (isSuccess) {
    return (
      <>
        <Flex vertical gap="small">
          <RefereesTable
            competitionId={competitionId}
            data={mainCollegium}
            title="Главная судейская коллегия"
            onAddReferee={handleAddRefereeToMainCollegium}
          />
          <RefereesTable
            competitionId={competitionId}
            data={collegium}
            title="Судейская коллегия"
            onAddReferee={handleAddRefereeToRegularCollegium}
          />
          {onConfirm && (
            <Button
              className={styles.button}
              disabled={!hasData}
              type="primary"
              onClick={onConfirm}
            >
              {confirmButtonText}
            </Button>
          )}
        </Flex>
        <AddRefereeModal
          isOpen={isModalOpen}
          referees={referees}
          onClose={closeModal}
          onSubmit={handleAddReferee}
        />
      </>
    );
  }
};
