import { useMemo } from 'react';
import { Badge, Button, Flex, Table, TableProps } from 'antd';
import { FilterTwoTone, PlusOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';
import { API } from '@api/index';
import { DEFAULT_SIZE } from '@constants/pagination';

import { useManageSportsmenStore } from '../../manage-sportsmen.store';
import {
  SportsmenInfoDataType,
  SportsmenInfoTableProps,
} from '../../manage-sportsmen.types';
import { SportsmenSearch } from '../sportsmen-search';

import { mapSportsmenToTableData } from './sportsmen-info-table.lib';

export const SportsmenInfoTable = ({
  start,
  loading,
  data,
  total,
  disableActionsForInternal = false,
}: SportsmenInfoTableProps) => {
  const { data: sportRanks } = API.knowledgeBase.useSportRanks();
  const { mutate: deleteSkydiver } = API.skydivers.useDeleteSkydiverMutation();

  const queryClient = useQueryClient();

  const filter = useManageSportsmenStore((state) => state.filter);
  const page = useManageSportsmenStore((state) => state.page);
  const openModal = useManageSportsmenStore((state) => state.openModal);
  const setPage = useManageSportsmenStore((state) => state.setPage);
  const setSportsmanId = useManageSportsmenStore(
    (state) => state.setSportsmanId,
  );

  const handleAddClick = () => openModal('add');
  const handleFilterClick = () => openModal('filter');

  const handleEditClick = (data: SportsmenInfoDataType) => () => {
    setSportsmanId(data.id);
    openModal('edit');
  };

  const handleDelete = (data: SportsmenInfoDataType) => () => {
    deleteSkydiver(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['skydivers'],
        });
      },
    });
  };

  const handleTableChange: TableProps['onChange'] = ({ current }) => {
    if (current) setPage(current);
  };

  const tableData: SportsmenInfoDataType[] = useMemo(
    () => mapSportsmenToTableData(page, data),
    [data, page],
  );

  return (
    <Table
      bordered
      dataSource={tableData}
      loading={loading}
      pagination={{
        current: page,
        pageSize: DEFAULT_SIZE,
        size: 'default',
        total,
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
        <Table.Column dataIndex="number" key="number" title="№" />
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
          dataIndex="sportRank"
          key="sportRank"
          render={(value, record) => {
            const disabled = disableActionsForInternal && record.isInternal;
            const sportRank = sportRanks?.find(({ name }) => name === value);

            return (
              <Flex align="center" justify="space-between">
                {sportRank?.description}
                <Flex gap="small">
                  <EditButton
                    disabled={disabled}
                    onClick={handleEditClick(record)}
                  />
                  <DeletePopConfirm
                    disabled={disabled}
                    size="middle"
                    title="Вы уверены что хотите удалить спортсмена?"
                    onConfirm={handleDelete(record)}
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
