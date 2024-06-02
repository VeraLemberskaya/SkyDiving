import { useMemo } from 'react';
import { Tabs, TabsProps, Typography } from 'antd';
import { useParams, useSearchParams } from 'react-router-dom';

import { CompetitionAcrobaticsInfo } from '@modules/competition-acrobatics-info';
import { LandingAccuracy } from '@modules/landing-accuracy';

import styles from './competition.module.scss';

export const Competition = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: 'pivot-table',
        label: 'Сводная таблица',
        children: <div>Сводная таблица</div>,
      },
      {
        key: 'landing-accuracy',
        label: 'Точность приземления',
        children: <LandingAccuracy />,
      },
      {
        key: 'acrobatics',
        label: 'Акробатика',
        children: <CompetitionAcrobaticsInfo competitionId={Number(id)} />,
      },
    ],
    [id],
  );

  const handleTabClick = (activeKey: string) => {
    setSearchParams({ activeTab: activeKey });
  };

  const activeKey = searchParams.get('activeTab');

  return (
    <>
      <Typography.Title level={4}>Чемпионат РБ</Typography.Title>
      <div className={styles.content}>
        <Tabs
          activeKey={activeKey ?? undefined}
          items={items}
          onTabClick={handleTabClick}
        />
      </div>
    </>
  );
};
