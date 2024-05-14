import { useMemo, useState } from 'react';
import { Button, Flex, Table, TableProps } from 'antd';
import { FilterTwoTone, PlusOutlined } from '@ant-design/icons';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';
import { paginationConfig } from '@constants/pagination';

import {
  JudgeInfoDataType,
  JudgeInfoTableProps,
} from '../../manage-referees.types';
import { JudgesSearch } from '../referees-search';

import { mapJudgesToTableData } from './referees-info-table.lib';

const { current, pageSize } = paginationConfig;

export const JudgesInfoTable = ({
  start,
  loading,
  data,
  onAdd,
  onEdit,
  onFilter,
}: JudgeInfoTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(current);

  const handleTableChange: TableProps['onChange'] = ({ current }) => {
    if (current) setCurrentPage(current);
  };

  const handleEdit = (data: JudgeInfoDataType) => () => {
    if (onEdit) {
      onEdit(Number(data.key));
    }
  };

  const tableData = useMemo(() => mapJudgesToTableData(data), [data]);

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
            <JudgesSearch />
            <Flex gap="small">
              <Button
                icon={<PlusOutlined />}
                shape="circle"
                size="middle"
                type="primary"
                onClick={onAdd}
              />
              <Button
                icon={<FilterTwoTone />}
                shape="circle"
                size="middle"
                onClick={onFilter}
              />
            </Flex>
          </Flex>
        }
      >
        <Table.Column dataIndex="serialNumber" key="serialNumber" title="№" />
        <Table.Column<JudgeInfoDataType>
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
        <Table.Column<JudgeInfoDataType>
          dataIndex="category"
          key="category"
          render={(value, record) => (
            <Flex align="center" justify="space-between">
              {value}
              <Flex gap="small">
                <EditButton onClick={handleEdit(record)} />
                <DeletePopConfirm
                  size="middle"
                  title="Вы уверены что хотите удалить судью?"
                />
              </Flex>
            </Flex>
          )}
          title="Категория"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
