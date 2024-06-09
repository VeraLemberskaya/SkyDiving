import { useMemo } from 'react';
import { Tabs, TabsProps, Typography } from 'antd';
import { useParams, useSearchParams } from 'react-router-dom';

import { EditCompetitionForm } from '@modules/competition-form';
import { PanelOfReferees } from '@modules/panel-of-referees';
import { ManageParticipantsTree } from '@modules/manage-participants-tree';

import styles from './edit-competition.module.scss';

export const EditCompetition = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: 'general-info',
        label: 'Основная информация',
        children: <EditCompetitionForm competitionId={Number(id)} />,
      },
      {
        key: 'panel-of-referees',
        label: 'Судейская коллегия',
        children: <PanelOfReferees />,
      },
      {
        key: 'acrobatics',
        label: 'Команды и участники',
        children: <ManageParticipantsTree />,
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
