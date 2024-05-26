import { Flex, Typography, Divider } from 'antd';

import { PenaltyRowProps } from '../../competition-acrobatics-info.types';

import styles from './penalty-row.module.scss';

export const PenaltyRow = ({
  trick,
  penaltyKey,
  penaltyTimeKey,
}: PenaltyRowProps) => {
  return (
    <Flex vertical>
      <Typography.Text>{trick[penaltyKey]}</Typography.Text>
      <Divider className={styles.divider} />
      <Typography.Text>{trick[penaltyTimeKey]}</Typography.Text>
    </Flex>
  );
};
