import { useState } from 'react';
import { Button, Flex, Table, TableProps } from 'antd';
import { FilterTwoTone, PlusOutlined } from '@ant-design/icons';

import { DeleteButton } from '@components/delete-button';
import { EditButton } from '@components/edit-button';
import { paginationConfig } from '@constants/pagination';

import {
  SportsmenInfoTableProps,
  TableParams,
} from '../../panel-of-users.types';

export const SportsmenInfoTable = ({
  start,
  loading,
  data,
}: SportsmenInfoTableProps) => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: paginationConfig,
  });

  const handleTableChange: TableProps['onChange'] = (pagination) => {
    setTableParams({
      pagination,
    });
  };

  return (
    <Table
      bordered
      dataSource={data}
      loading={loading}
      pagination={{
        ...tableParams.pagination,
        size: 'default',
      }}
      size="small"
      onChange={handleTableChange}
    >
      <Table.ColumnGroup
        title={
          <Flex justify="space-between">
            Список спортсменов
            <Flex gap="small">
              <Button
                icon={<PlusOutlined />}
                shape="circle"
                size="middle"
                type="primary"
              />
              <Button icon={<FilterTwoTone />} shape="circle" size="middle" />
            </Flex>
          </Flex>
        }
      >
        <Table.Column dataIndex="serialNumber" key="serialNumber" title="№" />
        <Table.Column
          dataIndex="fullName"
          key="fullName"
          render={(value) => (
            <Flex align="center" gap="small">
              {start}
              {value}
            </Flex>
          )}
          title="ФИО"
        />
        <Table.Column
          dataIndex="sportsRank"
          key="sportsRank"
          render={(value) => (
            <Flex align="center" justify="space-between">
              {value}
              <Flex gap="small">
                <EditButton />
                <DeleteButton />
              </Flex>
            </Flex>
          )}
          title="Спортивное звание"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
