import { useMemo, useState } from 'react';
import { Button, Flex, Table, TableProps } from 'antd';
import { FilterTwoTone, PlusOutlined } from '@ant-design/icons';

import { DeleteButton } from '@components/delete-button';
import { EditButton } from '@components/edit-button';
import { paginationConfig } from '@constants/pagination';

import {
  SportsmenInfoDataType,
  SportsmenInfoTableProps,
} from '../../manage-sportsmen.types';
import { SportsmenSearch } from '../sportsmen-search';

import { mapSportsmenToTableData } from './sportsmen-info-table.lib';

const { current, pageSize } = paginationConfig;

export const SportsmenInfoTable = ({
  start,
  loading,
  data,
  onAdd,
  onEdit,
}: SportsmenInfoTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(current);

  const handleTableChange: TableProps['onChange'] = ({ current }) => {
    if (current) setCurrentPage(current);
  };

  const handleEdit = (data: SportsmenInfoDataType) => () => {
    if (onEdit) {
      onEdit(Number(data.key));
    }
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
            <SportsmenSearch />
            <Flex gap="small">
              <Button
                icon={<PlusOutlined />}
                shape="circle"
                size="middle"
                type="primary"
                onClick={onAdd}
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
        <Table.Column<SportsmenInfoDataType>
          dataIndex="sportDegree"
          key="sportDegree"
          render={(value, record) => (
            <Flex align="center" justify="space-between">
              {value}
              <Flex gap="small">
                <EditButton onClick={handleEdit(record)} />
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
