import { useMemo } from 'react';
import { Button, Flex, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { DeleteButton } from '@components/delete-button';

import { JudgesTableProps } from '../../panel-of-judges.types';

import { mapJudgesToTableData } from './judges-table.lib';

export const JudgesTable = ({ data, title, onAddJudge }: JudgesTableProps) => {
  const tableData = useMemo(() => mapJudgesToTableData(data), [data]);

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
              onClick={onAddJudge}
            />
          </Flex>
        }
      >
        <Table.Column dataIndex="serialNumber" key="serialNumber" title="№" />
        <Table.Column dataIndex="work" key="work" title="Выполняемая работа" />
        <Table.Column dataIndex="fullName" key="fullName" title="ФИО" />
        <Table.Column
          dataIndex="category"
          key="category"
          render={(value) => (
            <Flex justify="space-between">
              {value}
              <DeleteButton />
            </Flex>
          )}
          title="Категория"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
