import { Space, Tree, TreeProps } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

import { API } from '@api/index';
import { CompetitionMember, Team } from '@api/types';

import {
  getParticipantIdFromKey,
  getTeamIdFromKey,
  getTreeKeys,
} from './participants-tree.lib';
import styles from './participants-tree.module.scss';
import { TreeHeader } from './components/tree-header';
import {
  ParticipantTreeOptions,
  ParticipantsTreeProps,
} from './participants-tree.types';
import { NoDataText } from './components/no-data-text';
import { TeamNode } from './components/team-node';
import { ParticipantNode } from './components/participant-node';

const defaultOptions: ParticipantTreeOptions = {
  selectParticipants: true,
  selectTeams: true,
  deleteParticipants: false,
  deleteTeams: false,
};

export const ParticipantsTree = ({
  competitionId,
  selectedTeamId,
  selectedParticipantId,
  options = defaultOptions,
  defaultExpandedTeamId,
  onSelect,
  onAddTeam,
  onAddParticipant,
  onDeleteTeam,
}: ParticipantsTreeProps) => {
  const { data } = API.teams.useCompetitionMembersQuery(competitionId);

  const handleSelect: TreeProps['onSelect'] = (selectedKeys) => {
    if (selectedKeys.length) {
      const teamId = getTeamIdFromKey(selectedKeys[0]);
      const participantId = getParticipantIdFromKey(selectedKeys[0]);

      if (teamId) onSelect({ id: teamId, type: 'team' });
      if (participantId) onSelect({ id: participantId, type: 'participant' });
    }
  };

  const renderParticipants = (data?: CompetitionMember[]) => {
    return data?.map((participant) => (
      <Tree.TreeNode
        key={`participant${participant.id}`}
        selectable={options.selectParticipants}
        title={
          <ParticipantNode
            competitionId={competitionId}
            deletable={options.deleteParticipants}
            participant={participant}
          />
        }
      />
    ));
  };

  const renderTeams = (data?: Team[]) => {
    return data?.map((team) => (
      <Tree.TreeNode
        key={`team${team.id}`}
        selectable={options.selectTeams}
        title={
          <TeamNode
            competitionId={competitionId}
            deletable={options.deleteTeams}
            team={team}
            onDelete={onDeleteTeam}
          />
        }
      >
        {renderParticipants(team.members)}
      </Tree.TreeNode>
    ));
  };

  const defaultExpandedKeys = defaultExpandedTeamId
    ? [`team${defaultExpandedTeamId}`]
    : undefined;

  return (
    <Space className={styles.tree} direction="vertical" size="large">
      <div>
        <TreeHeader title="Команды:" onAdd={onAddTeam} />
        <Tree
          blockNode
          showLine
          defaultExpandedKeys={defaultExpandedKeys}
          selectedKeys={getTreeKeys({ selectedTeamId, selectedParticipantId })}
          switcherIcon={<CaretDownFilled />}
          onSelect={handleSelect}
        >
          {renderTeams(data?.teams)}
        </Tree>
        <NoDataText
          show={!data?.teams.length}
          text="Нет данных по командам соревнования"
        />
      </div>
      <div>
        <TreeHeader title="Личники:" onAdd={onAddParticipant} />
        <Tree
          blockNode
          showLine
          selectable={options.selectParticipants}
          selectedKeys={[`participant${selectedParticipantId}`]}
          onSelect={handleSelect}
        >
          {renderParticipants(data?.individuals)}
        </Tree>
        <NoDataText
          show={!data?.individuals.length}
          text="Нет данных по спортсменам, выступающим вне команд"
        />
      </div>
    </Space>
  );
};
