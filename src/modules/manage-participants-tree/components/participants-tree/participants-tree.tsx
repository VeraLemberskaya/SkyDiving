import { useMemo } from 'react';
import { Space, Tree, TreeProps } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

import { ParticipantsTreeProps } from '../../manage-participants-tree.types';
import {
  getTeamIdFromKey,
  mapParticipantsToTreeData,
  mapTeamsToTreeData,
} from '../../manage-participants-tree.lib';
import { participants, teams } from '../../mock/data';
import { TreeHeader } from '../tree-header';

import styles from './participants-tree.module.scss';

export const ParticipantsTree = ({
  selectedTeamId,
  onSelect,
  onAddTeam,
  onAddParticipant,
}: ParticipantsTreeProps) => {
  const teamsTreeData = useMemo(() => mapTeamsToTreeData(teams), []);

  const participantsTreeData = useMemo(
    () => mapParticipantsToTreeData(participants),
    [],
  );

  const handleSelect: TreeProps['onSelect'] = (selectedKeys) => {
    const teamId = getTeamIdFromKey(selectedKeys[0]);
    onSelect(teamId);
  };

  const defaultTeamKey = `team${selectedTeamId}`;

  return (
    <Space className={styles.tree} direction="vertical" size="large">
      <div>
        <TreeHeader title="Команды:" onAdd={onAddTeam} />
        <Tree
          blockNode
          showLine
          defaultExpandedKeys={[defaultTeamKey]}
          selectedKeys={[defaultTeamKey]}
          switcherIcon={<CaretDownFilled />}
          treeData={teamsTreeData}
          onSelect={handleSelect}
        />
      </div>
      <div>
        <TreeHeader title="Личники:" onAdd={onAddParticipant} />
        <Tree
          blockNode
          showLine
          selectable={false}
          treeData={participantsTreeData}
        />
      </div>
    </Space>
  );
};
