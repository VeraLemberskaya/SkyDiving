import { Button, Divider, Flex, Table, Typography } from 'antd';

import { refereeingResults } from '@api/mocks';
import { Referring } from '@api/mock-types';

import {
  ArrowPenalty,
  DPenalty,
  MinusPenalty,
  PlusMinusPenalty,
  SPenalty,
} from '../penalty-row';
import { AcrobaticsTableProps } from '../../competition-acrobatics-info.types';
import { TableTitle } from '../table-title';

import styles from './acrobatics-table.module.scss';

export const AcrobaticsTable = ({ round, series }: AcrobaticsTableProps) => {
  return (
    <Flex vertical className={styles.table} gap="small">
      <TableTitle round={round} series={series} />
      <Table
        bordered
        dataSource={refereeingResults}
        pagination={false}
        size="small"
        onRow={({ isTimeSubmitted }) => {
          if (!isTimeSubmitted) {
            return {
              className: styles.table_active,
            };
          }

          return {};
        }}
      >
        <Table.ColumnGroup align="center" title="№">
          <Table.Column
            align="center"
            dataIndex="refereeNumber"
            key="refereeNumber"
            rowScope="rowgroup"
            title="Судья"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup
          align="center"
          title={
            <Typography.Title className={styles.title} level={4}>
              110
            </Typography.Title>
          }
        >
          <Table.Column<Referring>
            align="center"
            dataIndex="timeWithoutPenalty"
            key="timeWithoutPenalty"
            render={(value, { isTimeSubmitted }) => {
              if (isTimeSubmitted) return value;

              return (
                <Flex vertical align="center" gap="small">
                  {value}
                  {!isTimeSubmitted && (
                    <Flex gap="small">
                      <Button>Заново</Button>
                      <Button type="primary">ОK</Button>
                    </Flex>
                  )}
                </Flex>
              );
            }}
            title="Время"
          />
          <Table.Column
            align="center"
            render={() => (
              <Flex vertical>
                <Typography.Text>Degree</Typography.Text>
                <Divider className={styles.table__divider} />
                <Typography.Text>Sec.</Typography.Text>
              </Flex>
            )}
            title=""
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="1 спираль">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'firstSpiral']}
            key="firstSpiral.arrow"
            render={(value) => <ArrowPenalty trick={value} />}
            title="🡕"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'firstSpiral']}
            key="firstSpiral.d"
            render={(value) => <DPenalty trick={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'firstSpiral']}
            key="firstSpiral.minus"
            render={(value) => <MinusPenalty trick={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="2 спираль">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'secondSpiral']}
            key="secondSpiral.d"
            render={(value) => <DPenalty trick={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'secondSpiral']}
            key="secondSpiral.minus"
            render={(value) => <MinusPenalty trick={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="1 сальто">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'firstFlip']}
            key="firstFlip.d"
            render={(value) => <DPenalty trick={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'firstFlip']}
            key="firstFlip.plusMinus"
            render={(value) => <PlusMinusPenalty trick={value} />}
            title="-/+"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="3 спираль">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'thirdSpiral']}
            key="thirdSpiral.arrow"
            render={(value) => <ArrowPenalty trick={value} />}
            title="🡕"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'thirdSpiral']}
            key="thirdSpiral.d"
            render={(value) => <DPenalty trick={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'thirdSpiral']}
            key="thirdSpiral.minus"
            render={(value) => <MinusPenalty trick={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="4 спираль">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'foursSpiral']}
            key="foursSpiral.d"
            render={(value) => <DPenalty trick={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'foursSpiral']}
            key="foursSpiral.minus"
            render={(value) => <MinusPenalty trick={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="2 сальто">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'secondFlip']}
            key="secondFlip.d"
            render={(value) => <DPenalty trick={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'secondFlip']}
            key="secondFlip.plusMinus"
            render={(value) => <PlusMinusPenalty trick={value} />}
            title="-/+"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'secondFlip']}
            key="secondFlip.s"
            render={(value) => <SPenalty trick={value} />}
            title="S"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup
          align="right"
          title={
            <Typography.Title className={styles.title} level={4}>
              14.85
            </Typography.Title>
          }
        >
          <Table.Column
            align="center"
            dataIndex="totalPenalty"
            key="totalPenalty"
            title="Штраф"
          />
          <Table.Column
            align="center"
            dataIndex="score"
            key="score"
            title="Итого"
          />
        </Table.ColumnGroup>
      </Table>
    </Flex>
  );
};
