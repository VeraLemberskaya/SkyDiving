import { useState } from 'react';
import { Flex } from 'antd';

import { API } from '@api/index';

import { RefereesTable } from './components/referees-tables';
import { AddRefereeModal } from './components/add-referee-modal';
import { PanelOfRefereesProps } from './panel-of-referees.types';

export const PanelOfReferees = ({ competitionId }: PanelOfRefereesProps) => {
  const { data, isSuccess } =
    API.referees.useCompetitionRefereesQuery(competitionId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isSuccess) {
    const { mainCollegium, collegium } = data;

    return (
      <>
        <Flex vertical gap="small">
          <RefereesTable
            data={mainCollegium}
            title="Главная судейская коллегия"
            onAddReferee={openModal}
          />
          <RefereesTable
            data={collegium}
            title="Судейская коллегия"
            onAddReferee={openModal}
          />
        </Flex>
        <AddRefereeModal isOpen={isModalOpen} onClose={closeModal} />
      </>
    );
  }
};
