import { useMemo, useState } from 'react';
import { Badge, Button, Flex, Table, TableProps } from 'antd';
import { FilterTwoTone, PlusOutlined } from '@ant-design/icons';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';
import { paginationConfig } from '@constants/pagination';

import { useManageSportsmenStore } from '../../manage-sportsmen.store';
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
  disableActionsForInternal = false,
}: SportsmenInfoTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(current);

  const filter = useManageSportsmenStore((state) => state.filter);
  const openModal = useManageSportsmenStore((state) => state.openModal);
  const setSportsmanId = useManageSportsmenStore(
    (state) => state.setSportsmanId,
  );

  const handleAddClick = () => openModal('add');
  const handleFilterClick = () => openModal('filter');
  const handleEditClick = (data: SportsmenInfoDataType) => () => {
    setSportsmanId(data.id);
    openModal('edit');
  };

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
            <SportsmenSearch />
            <Flex gap="small">
              <Button
                icon={<PlusOutlined />}
                shape="circle"
                size="middle"
                type="primary"
                onClick={handleAddClick}
              />
              <Badge dot={Boolean(filter)} offset={[-5, 5]}>
                <Button
                  icon={<FilterTwoTone />}
                  shape="circle"
                  size="middle"
                  onClick={handleFilterClick}
                />
              </Badge>
            </Flex>
          </Flex>
        }
      >
        <Table.Column dataIndex="serialNumber" key="serialNumber" title="№" />
        <Table.Column<SportsmenInfoDataType>
          dataIndex="fullName"
          key="fullName"
          render={(value, { id }) => (
            <Flex align="center" gap="small">
              {start && start(id)}
              {value}
            </Flex>
          )}
          title="ФИО"
        />
        <Table.Column<SportsmenInfoDataType>
          dataIndex="sportDegree"
          key="sportDegree"
          render={(value, record) => {
            const disabled = disableActionsForInternal && record.isInternal;

            return (
              <Flex align="center" justify="space-between">
                {value}
                <Flex gap="small">
                  <EditButton
                    disabled={disabled}
                    onClick={handleEditClick(record)}
                  />
                  <DeletePopConfirm
                    disabled={disabled}
                    size="middle"
                    title="Вы уверены что хотите удалить спортсмена?"
                  />
                </Flex>
              </Flex>
            );
          }}
          title="Спортивное звание"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
