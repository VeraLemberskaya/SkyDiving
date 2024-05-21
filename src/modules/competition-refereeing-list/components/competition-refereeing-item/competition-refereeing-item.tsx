import { Flex, List, Typography } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

import { CompetitionRefereeingItemProps } from '../../competition-refereeing-list.types';

import styles from './competition-refereeing-item.module.scss';

export const CompetitionRefereeingItem = ({
  competition,
}: CompetitionRefereeingItemProps) => {
  const { beginDate, endDate, name, place, roundNumber, seriesNumber } =
    competition;

  const startDate = dayjs(beginDate).format('DD.MM.YYYY');
  const finishDate = dayjs(endDate).format('DD.MM.YYYY');

  return (
    <List.Item className={styles.item}>
      <Link className={styles.item_container} to={routes.REFEREEING_TIMER}>
        <Flex align="center" justify="space-between">
          <div className={styles.title_container}>
            <Typography.Title level={5}>{name}</Typography.Title>
            <Typography.Text type="secondary">{place}</Typography.Text>
          </div>
          <Flex align="center" gap="large">
            <Typography.Text strong>
              {startDate} - {finishDate}
            </Typography.Text>
            <Flex>
              Раунд {roundNumber} | Серия {seriesNumber}
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </List.Item>
  );
};
