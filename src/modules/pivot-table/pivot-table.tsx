import { useMemo } from 'react';
import { Table } from 'antd';

import { API } from '@api/index';
import { Member } from '@api/types';
import { getFullName } from '@utils/get-fullname';

import { PivotTableProps, PivotTableRow } from './pivot-table.types';
import {
  TOTAL_ACROBATICS_COUNT,
  TOTAL_JUMPING_COUNT,
} from './pivot-table.config';
import {
  getAcrobaticsTime,
  getJumpingAccuracy,
  getTeamRowSpan,
  mapMembersToTableData,
} from './pivot-table.lib';

export const PivotTable = ({ competitionId }: PivotTableProps) => {
  const { data, isLoading } = API.pivotTable.usePivotTableQuery(competitionId);

  const tableData = useMemo(() => {
    return data ? mapMembersToTableData(data) : [];
  }, [data]);

  const renderJumpingColumns = () => {
    const columns = [];

    for (let i = 0; i < TOTAL_JUMPING_COUNT; i++) {
      const column = (
        <Table.Column<Member>
          align="center"
          key={`jumping${i}`}
          render={(_, record) => getJumpingAccuracy(record, i)}
          title={i + 1}
        />
      );

      columns.push(column);
    }

    return columns;
  };

  const renderAcrobaticsColumns = () => {
    const columns = [];

    for (let i = 0; i < TOTAL_ACROBATICS_COUNT; i++) {
      const column = (
        <Table.Column<Member>
          align="center"
          key={`acrobatics${i}`}
          render={(_, record) => getAcrobaticsTime(record, i)}
          title={i + 1}
        />
      );

      columns.push(column);
    }

    return columns;
  };

  return (
    <Table
      bordered
      dataSource={tableData}
      loading={isLoading}
      pagination={false}
      size="small"
    >
      <Table.Column
        align="center"
        dataIndex="memberNumber"
        key="memberNumber"
        title="№ уч."
      />
      <Table.Column
        align="center"
        dataIndex="teamName"
        key="memberNumber"
        render={(value) => value ?? 'Личники'}
        title="Команда"
      />
      <Table.Column
        align="center"
        dataIndex="name"
        key="name"
        render={(value) => getFullName(value)}
        title="Ф.И.О."
      />
      <Table.ColumnGroup title="Точность приземления">
        <>
          {renderJumpingColumns()}
          <Table.Column
            align="center"
            dataIndex="jumpingSum"
            key="jumpingSum"
            title="Σ"
          />
          <Table.Column
            align="center"
            dataIndex="jumpingCompetitionRank"
            key="jumpingCompetitionRank"
            rowScope="row"
            title="Место"
          />
        </>
      </Table.ColumnGroup>
      <Table.ColumnGroup title="Акробатика">
        <>
          <Table.Column
            align="center"
            dataIndex="participatesInAcrobatics"
            key="participatesInAcrobatics"
            render={(value) => (value ? '+' : '')}
            title="Уч."
          />
          {renderAcrobaticsColumns()}
          <Table.Column
            align="center"
            dataIndex="acrobaticsSum"
            key="acrobaticsSum"
            title="Σ"
          />
          <Table.Column
            align="center"
            dataIndex="acrobaticsCompetitionRank"
            key="acrobaticsCompetitionRank"
            rowScope="row"
            title="Место"
          />
        </>
      </Table.ColumnGroup>
      <Table.ColumnGroup title="Место">
        <Table.Column
          align="center"
          dataIndex="overallCompetitionRank"
          key="overallCompetitionRank"
          rowScope="row"
          title="Личное"
        />
        <Table.Column<PivotTableRow>
          align="center"
          render={(_, record) => {
            const team = data?.teams.find(
              ({ teamId }) => teamId === record.teamId,
            );

            return team?.overallCompetitionRank;
          }}
          rowScope="row"
          title="Командное"
          onCell={(record) => getTeamRowSpan(record, data)}
        />
      </Table.ColumnGroup>
    </Table>
  );
};
