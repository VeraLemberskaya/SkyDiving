import { useMemo } from 'react';
import { Space, Tree, TreeProps } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

import { participants, teams } from './mock/data';
import {
  getParticipantIdFromKey,
  getTeamIdFromKey,
  getTreeKeys,
  mapParticipantsToTreeData,
  mapTeamsToTreeData,
} from './participants-tree.lib';
import styles from './participants-tree.module.scss';
import { TreeHeader } from './components/tree-header';
import {
  ParticipantTreeOptions,
  ParticipantsTreeProps,
} from './participants-tree.types';

const defaultOptions: ParticipantTreeOptions = {
  selectParticipants: true,
  selectTeams: true,
  deleteParticipants: false,
  deleteTeams: false,
};

export const ParticipantsTree = ({
  selectedTeamId,
  selectedParticipantId,
  options = defaultOptions,
  onSelect,
  onAddTeam,
  onAddParticipant,
}: ParticipantsTreeProps) => {
  const teamsTreeData = useMemo(
    () => mapTeamsToTreeData(teams, options),
    [options],
  );

  const participantsTreeData = useMemo(
    () => mapParticipantsToTreeData(participants, options),
    [options],
  );

  const handleSelect: TreeProps['onSelect'] = (selectedKeys) => {
    const teamId = getTeamIdFromKey(selectedKeys[0]);
    const participantId = getParticipantIdFromKey(selectedKeys[0]);

    if (teamId) onSelect({ id: teamId, type: 'team' });
    if (participantId) onSelect({ id: participantId, type: 'participant' });
  };

  const participantKey = `participant${selectedParticipantId}`;

  return (
    <Space className={styles.tree} direction="vertical" size="large">
      <div>
        <TreeHeader title="Команды:" onAdd={onAddTeam} />
        <Tree
          blockNode
          showLine
          defaultExpandedKeys={[`team${teams[0].id}`]}
          selectedKeys={getTreeKeys({ selectedTeamId, selectedParticipantId })}
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
          selectable={options.selectParticipants}
          selectedKeys={[participantKey]}
          treeData={participantsTreeData}
          onSelect={handleSelect}
        />
      </div>
    </Space>
  );
};
