import { useState } from 'react';
import { List, Pagination, Typography } from 'antd';

import { API } from '@api/index';
import { DEFAULT_SIZE } from '@constants/pagination';

import { CompetitionItem } from './components/competition-item';
import styles from './competition-list.module.scss';
import { CompetitionListProps } from './competition-list.types';

export const CompetitionList = ({
  title,
  completed = false,
}: CompetitionListProps) => {
  const [page, setPage] = useState(1);

  const { data, isPending } = API.competitions.useCompetitionsQuery({
    isCompleted: completed,
    number: page,
    size: DEFAULT_SIZE,
  });

  const handlePaginationChange = (page: number) => setPage(page);

  return (
    <div>
      <Typography.Text>{title}</Typography.Text>
      <List
        className={styles.list}
        dataSource={data?.content}
        loading={isPending}
        renderItem={(item) => <CompetitionItem competition={item} />}
      />
      <Pagination
        className={styles.pagination}
        current={page}
        total={data ? data.totalPages * DEFAULT_SIZE : undefined}
        onChange={handlePaginationChange}
      />
    </div>
  );
};
