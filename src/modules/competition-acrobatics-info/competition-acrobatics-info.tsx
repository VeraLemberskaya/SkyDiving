import { useState } from 'react';
import { Button, Typography } from 'antd';

import { CompetitionAcrobaticsInfoProps } from './competition-acrobatics-info.types';
import styles from './competition-acrobatics-info.module.scss';
import { text } from './competition-acrobatics-info.config';
import { StartRefereeingModal } from './components/start-refereeing-modal';

export const CompetitionAcrobaticsInfo = ({
  competitionId,
}: CompetitionAcrobaticsInfoProps) => {
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  const openModal = () => setIsStartModalOpen(true);
  const closeModal = () => setIsStartModalOpen(false);

  return (
    <>
      <Typography.Text className={styles.text} type="secondary">
        {text}
      </Typography.Text>
      <Button type="primary" onClick={openModal}>
        Начать судейство
      </Button>
      <StartRefereeingModal
        competitionId={competitionId}
        isOpen={isStartModalOpen}
        onClose={closeModal}
      />
    </>
  );
};
