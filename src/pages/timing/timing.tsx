import { Flex } from 'antd';
import { useLocation } from 'react-router-dom';

import { TimeRefereeing } from '@modules/time-refereeing';

import { TimingDetails } from './components/timing-details';
import styles from './timing.module.scss';

export const Timing = () => {
  //TODO: useQuery
  const location = useLocation();
  const { name, roundNumber, seriesNumber } = location.state;

  return (
    <Flex vertical gap="middle">
      <TimingDetails
        name={name}
        roundNumber={roundNumber}
        seriesNumber={seriesNumber}
      />
      <div className={styles.content}>
        <TimeRefereeing />
      </div>
    </Flex>
  );
};
