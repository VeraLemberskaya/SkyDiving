import { useMemo } from 'react';
import { Tabs, TabsProps, Typography } from 'antd';
import { useParams, useSearchParams } from 'react-router-dom';

import { EditCompetitionForm } from '@modules/competition-form';
import { PanelOfReferees } from '@modules/panel-of-referees';
import { ManageParticipantsTree } from '@modules/manage-participants-tree';
import { API } from '@api/index';

import styles from './edit-competition.module.scss';

export const EditCompetition = () => {
  const { id } = useParams();
  const competitionId = Number(id);
  const { data } = API.competitions.useCompetitionQuery(competitionId);

  const [searchParams, setSearchParams] = useSearchParams();

  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: 'general-info',
        label: 'Основная информация',
        children: <EditCompetitionForm competitionId={competitionId} />,
      },
      {
        key: 'panel-of-referees',
        label: 'Судейская коллегия',
        children: <PanelOfReferees competitionId={competitionId} />,
      },
      {
        key: 'acrobatics',
        label: 'Команды и участники',
        children: <ManageParticipantsTree competitionId={competitionId} />,
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
          activeKey={activeKey ?? undefined}
          items={items}
          onTabClick={handleTabClick}
        />
      </div>
    </>
  );
};
