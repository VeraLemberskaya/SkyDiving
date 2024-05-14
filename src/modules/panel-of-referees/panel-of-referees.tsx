import { useState } from 'react';
import { Flex } from 'antd';

import { RefereesTable } from './components/referees-tables';
import { refereesData, mainRefereesData } from './mocks/data';
import { AddRefereeModal } from './components/add-referee-modal';

export const PanelOfReferees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Flex vertical gap="small">
        <RefereesTable
          data={mainRefereesData}
          title="Главная судейская коллегия"
          onAddReferee={openModal}
        />
        <RefereesTable
          data={refereesData}
          title="Судейская коллегия"
          onAddReferee={openModal}
        />
      </Flex>
      <AddRefereeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
