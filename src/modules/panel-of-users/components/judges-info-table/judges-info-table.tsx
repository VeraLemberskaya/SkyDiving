import { useState } from 'react';
import { Button, Flex, Table, TableProps } from 'antd';
import { FilterTwoTone, PlusOutlined } from '@ant-design/icons';

import { DeleteButton } from '@components/delete-button';
import { EditButton } from '@components/edit-button';
import { paginationConfig } from '@constants/pagination';

import { JudgeInfoTableProps, TableParams } from '../../panel-of-users.types';

export const JudgesInfoTable = ({
  start,
  loading,
  data,
}: JudgeInfoTableProps) => {
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
            Список судей
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
          dataIndex="category"
          key="category"
          render={(value) => (
            <Flex align="center" justify="space-between">
              {value}
              <Flex gap="small">
                <EditButton />
                <DeleteButton />
              </Flex>
            </Flex>
          )}
          title="Категория"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
