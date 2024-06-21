import { useMemo } from 'react';
import { Tabs, TabsProps, Typography } from 'antd';
import { useParams, useSearchParams } from 'react-router-dom';

import { CompetitionAcrobaticsInfo } from '@modules/competition-acrobatics-info';
import { LandingAccuracy } from '@modules/landing-accuracy';
import { PivotTable } from '@modules/pivot-table';
import { API } from '@api/index';

import styles from './competition.module.scss';

export const Competition = () => {
  const { id } = useParams();
  const competitionId = Number(id);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = API.competitions.useCompetitionQuery(competitionId);

  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: 'pivot-table',
        label: 'Сводная таблица',
        children: <PivotTable competitionId={competitionId} />,
      },
      {
        key: 'landing-accuracy',
        label: 'Точность приземления',
        children: <LandingAccuracy competitionId={competitionId} />,
      },
      {
        key: 'acrobatics',
        label: 'Акробатика',
        children: <CompetitionAcrobaticsInfo competitionId={competitionId} />,
      },
    ],
    [competitionId],
  );

  const handleTabClick = (activeKey: string) => {
    setSearchParams({ activeTab: activeKey });
  };

  const activeKey = searchParams.get('activeTab');

  return (
    <>
      <Typography.Title level={4}>{data?.name}</Typography.Title>
      <div className={styles.content}>
        <Tabs
          destroyInactiveTabPane
          activeKey={activeKey ?? undefined}
          items={items}
          onTabClick={handleTabClick}
        />
      </div>
    </>
  );
};
