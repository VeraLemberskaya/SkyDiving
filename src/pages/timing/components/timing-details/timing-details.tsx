import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

import { TimingDetailsProps } from '../../timing.types';

import styles from './timing-details.module.scss';

export const TimingDetails = ({
  name,
  roundNumber,
  seriesNumber,
}: TimingDetailsProps) => {
  return (
    <>
      <Link className={styles.link} to={routes.COMPETITIONS_REFEREEING}>
        Вернутся к выбору судейства
      </Link>
      <Typography.Title level={4}>
        {`${name} - Раунд ${roundNumber} | Серия ${seriesNumber}`}
      </Typography.Title>
    </>
  );
};
