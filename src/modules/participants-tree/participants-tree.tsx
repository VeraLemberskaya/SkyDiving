import { useMemo } from 'react';
import { Space, Tree } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

import { participants, teams } from './mock/data';
import {
  mapParticipantsToTreeData,
  mapTeamsToTreeData,
} from './participants-tree.lib';
import { TreeHeader } from './components/tree-header';
import styles from './participants-tree.module.scss';

export const ParticipantsTree = () => {
  const teamsTreeData = useMemo(() => mapTeamsToTreeData(teams), []);

  const participantsTreeData = useMemo(
    () => mapParticipantsToTreeData(participants),
    [],
  );

  const defaultTeamKey = `team${teams[0].id}`;

  return (
    <Space className={styles.tree} direction="vertical">
      <TreeHeader title="Команды:" />
      <Tree
        blockNode
        showLine
        defaultExpandedKeys={[defaultTeamKey]}
        defaultSelectedKeys={[defaultTeamKey]}
        switcherIcon={<CaretDownFilled />}
        treeData={teamsTreeData}
      />
      <TreeHeader title="Личники:" />
      <Tree blockNode showLine treeData={participantsTreeData} />
    </Space>
  );
};
