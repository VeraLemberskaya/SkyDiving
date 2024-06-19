/* eslint-disable max-lines */
import { Button, Divider, Flex, Table, Typography } from 'antd';
import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';
import {
  RefereeingResult,
  UpdateRefereeingSeriesTimeRequest,
} from '@api/types';

import { AcrobaticsTableProps } from '../../competition-acrobatics-info.types';
import { TableTitle } from '../table-title';
import { PenaltyRow } from '../penalty-row';

import styles from './acrobatics-table.module.scss';

export const AcrobaticsTable = ({
  data,
  competitionId,
}: AcrobaticsTableProps) => {
  const {
    memberNumber,
    roundNumber,
    serieNumber,
    totalScore,
    refereeingResults,
  } = data;

  const { mutate } =
    API.trickRefereeing.useUpdateRefereeingSeriesTimeMutation();
  const queryClient = useQueryClient();

  const updateTime = (data: UpdateRefereeingSeriesTimeRequest) => {
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['competition-refereeing-series', competitionId],
        });
      },
    });
  };

  const handleReplayTime = (trickSerieId: number) => () => {
    updateTime({
      trickSerieId,
      timeWithoutPenalty: 0,
      isTimeSubmitted: false,
    });
  };

  const handleSubmitTime = (trickSerieId: number) => () => {
    updateTime({
      trickSerieId,
      isTimeSubmitted: true,
    });
  };

  return (
    <Flex vertical className={styles.table} gap="small">
      <TableTitle round={roundNumber} series={serieNumber} />
      <Table
        bordered
        dataSource={refereeingResults}
        pagination={false}
        size="small"
        onRow={({ isTimeSubmitted }) => {
          if (isTimeSubmitted === null) {
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
              {memberNumber}
            </Typography.Title>
          }
        >
          <Table.Column<RefereeingResult>
            align="center"
            dataIndex="timeWithoutPenalty"
            key="timeWithoutPenalty"
            render={(value, { isTimeSubmitted, timeWithoutPenalty, id }) => {
              if (isTimeSubmitted === null && timeWithoutPenalty !== null)
                return (
                  <Flex vertical align="center" gap="small">
                    {value ?? 0}
                    {!isTimeSubmitted && (
                      <Flex gap="small">
                        <Button onClick={handleReplayTime(id)}>Заново</Button>
                        <Button type="primary" onClick={handleSubmitTime(id)}>
                          ОK
                        </Button>
                      </Flex>
                    )}
                  </Flex>
                );

              return value ?? '-';
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
            dataIndex={[
              'trickAttempts',
              'TURN_1',
              'penalties',
              'ARROW_PENALTY',
            ]}
            key="firstSpiral.arrow"
            render={(value) => <PenaltyRow penalty={value} />}
            title="🡕"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'TURN_1', 'penalties', 'D_PENALTY']}
            key="firstSpiral.d"
            render={(value) => <PenaltyRow penalty={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'TURN_1',
              'penalties',
              'MINUS_PENALTY',
            ]}
            key="firstSpiral.minus"
            render={(value) => <PenaltyRow penalty={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="2 спираль">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'TURN_2', 'penalties', 'D_PENALTY']}
            key="secondSpiral.d"
            render={(value) => <PenaltyRow penalty={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'TURN_2',
              'penalties',
              'MINUS_PENALTY',
            ]}
            key="secondSpiral.minus"
            render={(value) => <PenaltyRow penalty={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="1 сальто">
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'BACK_LOOP_1',
              'penalties',
              'D_PENALTY',
            ]}
            key="firstFlip.d"
            render={(value) => <PenaltyRow penalty={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'BACK_LOOP_1',
              'penalties',
              'PLUS_MINUS_PENALTY',
            ]}
            key="firstFlip.plusMinus"
            render={(value) => <PenaltyRow penalty={value} />}
            title="-/+"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="3 спираль">
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'TURN_3',
              'penalties',
              'ARROW_PENALTY',
            ]}
            key="thirdSpiral.arrow"
            render={(value) => <PenaltyRow penalty={value} />}
            title="🡕"
          />
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'TURN_3', 'penalties', 'D_PENALTY']}
            key="thirdSpiral.d"
            render={(value) => <PenaltyRow penalty={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'TURN_3',
              'penalties',
              'MINUS_PENALTY',
            ]}
            key="thirdSpiral.minus"
            render={(value) => <PenaltyRow penalty={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="4 спираль">
          <Table.Column
            align="center"
            dataIndex={['trickAttempts', 'TURN_4', 'penalties', 'D_PENALTY']}
            key="foursSpiral.d"
            render={(value) => <PenaltyRow penalty={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'TURN_4',
              'penalties',
              'MINUS_PENALTY',
            ]}
            key="foursSpiral.minus"
            render={(value) => <PenaltyRow penalty={value} />}
            title="-"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup title="2 сальто">
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'BACK_LOOP_2',
              'penalties',
              'D_PENALTY',
            ]}
            key="secondFlip.d"
            render={(value) => <PenaltyRow penalty={value} />}
            title="D"
          />
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'BACK_LOOP_2',
              'penalties',
              'PLUS_MINUS_PENALTY',
            ]}
            key="secondFlip.plusMinus"
            render={(value) => <PenaltyRow penalty={value} />}
            title="-/+"
          />
          <Table.Column
            align="center"
            dataIndex={[
              'trickAttempts',
              'BACK_LOOP_2',
              'penalties',
              'S_PENALTY',
            ]}
            key="secondFlip.s"
            render={(value) => <PenaltyRow penalty={value} />}
            title="S"
          />
        </Table.ColumnGroup>
        <Table.ColumnGroup
          align="center"
          title={
            <Typography.Title className={styles.title} level={4}>
              {totalScore || '-'}
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
            dataIndex="totalTime"
            key="totalTime"
            render={(value) => value || '-'}
            title="Итого"
          />
        </Table.ColumnGroup>
      </Table>
    </Flex>
  );
};
