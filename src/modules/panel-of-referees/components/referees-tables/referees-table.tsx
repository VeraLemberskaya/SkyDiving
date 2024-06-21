import { useMemo } from 'react';
import { Button, Flex, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { DeletePopConfirm } from '@components/delete-popconfirm';
import { API } from '@api/index';

import {
  RefereeInfoDataType,
  RefereesTableProps,
} from '../../panel-of-referees.types';
import { useDeleteRefereeFromCompetition } from '../../panel-of-referees.hooks';

import { mapRefereesToTableData } from './referees-table.lib';

export const RefereesTable = ({
  data,
  title,
  competitionId,
  onAddReferee,
}: RefereesTableProps) => {
  const { data: refereeCategories } = API.knowledgeBase.useRefereeCategories();
  const { deleteReferee } = useDeleteRefereeFromCompetition(competitionId);

  const tableData = useMemo(() => mapRefereesToTableData(data), [data]);

  return (
    <Table bordered dataSource={tableData} pagination={false} size="small">
      <Table.ColumnGroup
        title={
          <Flex justify="space-between">
            {title}
            <Button
              icon={<PlusOutlined />}
              shape="circle"
              size="middle"
              type="primary"
              onClick={onAddReferee}
            />
          </Flex>
        }
      >
        <Table.Column dataIndex="refereeNumber" key="refereeNumber" title="№" />
        <Table.Column
          dataIndex="workPerformed"
          key="workPerformed"
          title="Выполняемая работа"
        />
        <Table.Column dataIndex="fullName" key="fullName" title="ФИО" />
        <Table.Column<RefereeInfoDataType>
          dataIndex="category"
          key="category"
          render={(value, record) => {
            const category = refereeCategories?.find(
              ({ name }) => name === value,
            );

            return (
              <Flex justify="space-between">
                {category?.description}
                <DeletePopConfirm
                  size="middle"
                  title="Вы уверены что хотите удалить судью?"
                  onConfirm={deleteReferee(record.id)}
                />
              </Flex>
            );
          }}
          title="Категория"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
