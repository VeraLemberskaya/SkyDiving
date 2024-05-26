import { Divider, Typography } from 'antd';

import { TableTitleProps } from '../../competition-acrobatics-info.types';

import styles from './table-title.module.scss';

export const TableTitle = ({ round, series }: TableTitleProps) => {
  return (
    <Typography.Text className={styles.title}>
      Раунд {round}
      <Divider type="vertical" />
      Серия {series}
    </Typography.Text>
  );
};
