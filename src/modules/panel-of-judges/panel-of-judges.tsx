import { useState } from 'react';
import { Flex } from 'antd';

import { JudgesTable } from './components/judges-tables';
import { judgesData, mainJudgesData } from './mocks/data';
import { AddJudgeModal } from './components/add-judge-modal';

export const PanelOfJudges = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Flex vertical gap="small">
        <JudgesTable
          data={mainJudgesData}
          title="Главная судейская коллегия"
          onAddJudge={openModal}
        />
        <JudgesTable
          data={judgesData}
          title="Судейская коллегия"
          onAddJudge={openModal}
        />
      </Flex>
      <AddJudgeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
