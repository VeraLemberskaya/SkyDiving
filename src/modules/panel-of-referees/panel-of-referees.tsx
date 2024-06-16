import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

import { API } from '@api/index';
import { routes } from '@constants/routes';

import { RefereesTable } from './components/referees-tables';
import { AddRefereeModal } from './components/add-referee-modal';
import { PanelOfRefereesProps } from './panel-of-referees.types';
import {
  useAddRefereeToCompetition,
  useFilteredReferees,
} from './panel-of-referees.hooks';
import styles from './panel-of-referees.module.scss';

export const PanelOfReferees = ({ competitionId }: PanelOfRefereesProps) => {
  const { data, isSuccess } =
    API.referees.useCompetitionRefereesQuery(competitionId);
  const navigate = useNavigate();

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

  const handleNavigateToParticipants = () => {
    navigate(routes.COMPETITION_PARTICIPANTS_BY_ID(competitionId));
  };

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
          <Button
            className={styles.button}
            disabled={!hasData}
            type="primary"
            onClick={handleNavigateToParticipants}
          >
            Продолжить
          </Button>
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
