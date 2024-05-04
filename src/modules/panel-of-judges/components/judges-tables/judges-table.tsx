import { Button, Flex, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { JudgeDataType } from '../../panel-of-judges.types';
import { DeleteJudgeButton } from '../delete-judge-button';

interface JudgesTableProps {
  data: JudgeDataType[];
  title: string;
}

export const JudgesTable = ({ data, title }: JudgesTableProps) => {
  return (
    <Table bordered dataSource={data} pagination={false} size="small">
      <Table.ColumnGroup
        title={
          <Flex justify="space-between">
            {title}
            <Button
              icon={<PlusOutlined />}
              shape="circle"
              size="middle"
              type="primary"
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
              <DeleteJudgeButton />
            </Flex>
          )}
          title="Категория"
        />
      </Table.ColumnGroup>
    </Table>
  );
};
