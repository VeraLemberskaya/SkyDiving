import { Flex, Typography, Divider } from 'antd';

import { PenaltyRowProps } from '../../competition-acrobatics-info.types';

import styles from './penalty-row.module.scss';

export const PenaltyRow = ({ penalty }: PenaltyRowProps) => {
  return (
    <Flex vertical>
      <Typography.Text>{penalty?.penaltyValue || '-'}</Typography.Text>
      <Divider className={styles.divider} />
      <Typography.Text>{penalty?.penaltyValueTime || '-'}</Typography.Text>
    </Flex>
  );
};
