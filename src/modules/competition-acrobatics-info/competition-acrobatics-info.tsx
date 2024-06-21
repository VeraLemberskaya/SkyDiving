import { useState } from 'react';
import { Button, Flex, Typography } from 'antd';

import { CompetitionRefereeing } from '@api/types';

import { CompetitionAcrobaticsInfoProps } from './competition-acrobatics-info.types';
import styles from './competition-acrobatics-info.module.scss';
import { text } from './competition-acrobatics-info.config';
import { StartRefereeingModal } from './components/start-refereeing-modal';
import { AcrobaticsTable } from './components/acrobatics-table';
import { useCompetitionRefereeingSeries } from './competition-acrobatics-info.hooks';

const getTableKey = ({
  memberNumber,
  serieNumber,
  roundNumber,
}: CompetitionRefereeing) => {
  return `${memberNumber}${roundNumber}${serieNumber}`;
};

export const CompetitionAcrobaticsInfo = ({
  competitionId,
}: CompetitionAcrobaticsInfoProps) => {
  const { data } = useCompetitionRefereeingSeries(competitionId);

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
      {!data?.length ? (
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
            {data.map((competitionRefereeing) => (
              <AcrobaticsTable
                competitionId={competitionId}
                data={competitionRefereeing}
                key={getTableKey(competitionRefereeing)}
              />
            ))}
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
