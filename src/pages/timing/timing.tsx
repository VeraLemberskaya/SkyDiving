import { Flex } from 'antd';
// import { useParams } from 'react-router-dom';

import { TimeRefereeing } from '@modules/time-refereeing';
import { competitionsRefereeing } from '@api/mocks';

import { TimingDetails } from './components/timing-details';
import styles from './timing.module.scss';

export const Timing = () => {
  //TODO: Получить компетишен по trickSerieId
  //const { trickSerieId } = useParams();

  const { roundNumber, seriesNumber } = competitionsRefereeing[0];

  return (
    <Flex vertical gap="middle">
      <TimingDetails
        name={competitionsRefereeing[0].competition.name}
        roundNumber={roundNumber}
        seriesNumber={seriesNumber}
      />
      <div className={styles.content}>
        <TimeRefereeing />
      </div>
    </Flex>
  );
};
