import { useMemo, useState } from 'react';
import { Button, Flex, Table, TableProps } from 'antd';
import { FilterTwoTone, PlusOutlined } from '@ant-design/icons';

import { DeleteButton } from '@components/delete-button';
import { EditButton } from '@components/edit-button';
import { paginationConfig } from '@constants/pagination';

import {
  SportsmenInfoDataType,
  SportsmenInfoTableProps,
} from './sportsmen-info-table.types';
import { mapSportsmenToTableData } from './sportsmen-info-table.lib';

const { current, pageSize } = paginationConfig;

export const SportsmenInfoTable = ({
  start,
  loading,
  data,
}: SportsmenInfoTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(current);

  const handleTableChange: TableProps['onChange'] = ({ current }) => {
    if (current) setCurrentPage(current);
  };

  const tableData: SportsmenInfoDataType[] = useMemo(
    () => mapSportsmenToTableData(data),
    [data],
  );

  return (
    <Table
      bordered
      dataSource={tableData}
      loading={loading}
      pagination={{
        current: currentPage,
        pageSize,
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
