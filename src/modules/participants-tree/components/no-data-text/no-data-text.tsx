import { Typography } from 'antd';

import { NoDataTextProps } from '../../participants-tree.types';

import styles from './no-data-text.module.scss';

export const NoDataText = ({ show, text }: NoDataTextProps) => {
  return (
    show && (
      <Typography.Text className={styles.text} type="secondary">
        {text}
      </Typography.Text>
    )
  );
};
