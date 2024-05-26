import { useState } from 'react';
import { Button, Flex, Typography } from 'antd';

import { refereeingResults } from '@api/mocks';

import { CompetitionAcrobaticsInfoProps } from './competition-acrobatics-info.types';
import styles from './competition-acrobatics-info.module.scss';
import { text } from './competition-acrobatics-info.config';
import { StartRefereeingModal } from './components/start-refereeing-modal';
import { AcrobaticsTable } from './components/acrobatics-table';

export const CompetitionAcrobaticsInfo = ({
  competitionId,
}: CompetitionAcrobaticsInfoProps) => {
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  const openModal = () => setIsStartModalOpen(true);
  const closeModal = () => setIsStartModalOpen(false);

  const startButton = (
    <Button type="primary" onClick={openModal}>
      Начать судейство
    </Button>
  );

  return (
    <>
      {!refereeingResults ? (
        <>
          <Typography.Text className={styles.text} type="secondary">
            {text}
          </Typography.Text>
          {startButton}
        </>
      ) : (
        <>
          <Flex justify="end">{startButton}</Flex>
          <Flex vertical gap="middle">
            <AcrobaticsTable round={1} series={1} />
            <AcrobaticsTable round={2} series={1} />
            <AcrobaticsTable round={3} series={1} />
          </Flex>
        </>
      )}
      <StartRefereeingModal
        competitionId={competitionId}
        isOpen={isStartModalOpen}
        onClose={closeModal}
      />
    </>
  );
};
