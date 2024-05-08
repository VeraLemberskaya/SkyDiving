import { ReactNode } from 'react';
import { GetProp, TableProps } from 'antd';

import { JudgeDataType } from '@api/types';

type TablePaginationConfig = Exclude<
  GetProp<TableProps, 'pagination'>,
  boolean
>;

export type JudgeInfoDataType = Omit<JudgeDataType, 'work'>;

export interface SportsmenInfoDataType
  extends Omit<JudgeInfoDataType, 'category'> {
  sportsRank: string;
}

export interface JudgeInfoTableProps {
  start?: ReactNode;
  loading?: boolean;
  data: JudgeInfoDataType[];
}

export interface SportsmenInfoTableProps {
  start?: ReactNode;
  loading?: boolean;
  data: SportsmenInfoDataType[];
}

export interface TableParams {
  pagination?: TablePaginationConfig;
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}
