import { useMemo } from 'react';
import { Button, Flex, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { DeletePopConfirm } from '@components/delete-popconfirm';

import { JudgesTableProps } from '../../panel-of-judges.types';

export const JudgesTable = ({ data, title, onAddJudge }: JudgesTableProps) => {
  const tableData = useMemo(
    () =>
      data.map(({ id, ...data }) => ({
        key: id,
        ...data,
      })),
    [data],
  );

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
              <DeletePopConfirm title="Вы уверены что хотите удалить судью?" />
            </Flex>
          )}
          title="Категория"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
