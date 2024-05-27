import { Flex, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { QuestionCircleTwoTone } from '@ant-design/icons';

import { routes } from '@constants/routes';

import { TimingDetailsProps } from '../../timing.types';
import { tooltip } from '../../timing.config';

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
      <Flex align="center" gap="middle">
        <Typography.Title
          level={4}
        >{`${name} - Раунд ${roundNumber} | Серия ${seriesNumber}`}</Typography.Title>
        <Tooltip placement="bottom" title={tooltip}>
          <QuestionCircleTwoTone
            className={styles.icon}
            style={{ fontSize: 20 }}
          />
        </Tooltip>
      </Flex>
    </>
  );
};
