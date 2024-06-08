import { Flex } from 'antd';

import { PenaltyFillingOut } from '@modules/penalty-filling-out';

import { PenaltyDetails } from './components/penalty-details';
import styles from './penalty.module.scss';

export const Penalty = () => {
  return (
    <Flex vertical gap="middle">
      <PenaltyDetails name="Чемпионат РБ" roundNumber="1" seriesNumber="1" />
      <div className={styles.content}>
        <PenaltyFillingOut />
      </div>
    </Flex>
  );
};
