import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

import { PenaltyDetailsProps } from '../../penalty.types';

import styles from './penalty-details.module.scss';

export const PenaltyDetails = ({
  name,
  roundNumber,
  seriesNumber,
}: PenaltyDetailsProps) => {
  return (
    <>
      <Link className={styles.link} to={routes.COMPETITIONS_REFEREEING}>
        Вернутся к выбору судейства
      </Link>
      <Typography.Title
        level={4}
      >{`${name} - Раунд ${roundNumber} | Серия ${seriesNumber}`}</Typography.Title>
    </>
  );
};
