import { useMemo } from 'react';
import { Button, Flex, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { DeletePopConfirm } from '@components/delete-popconfirm';

import { RefereesTableProps } from '../../panel-of-referees.types';

import { mapRefereesToTableData } from './referees-table.lib';

export const RefereesTable = ({
  data,
  title,
  onAddReferee,
}: RefereesTableProps) => {
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
        <Table.Column
          dataIndex="category"
          key="category"
          render={(value) => (
            <Flex justify="space-between">
              {value}
              <DeletePopConfirm
                size="middle"
                title="Вы уверены что хотите удалить судью?"
              />
            </Flex>
          )}
          title="Категория"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
