import { Typography } from 'antd';
import { useSearchParams } from 'react-router-dom';

import { NewCompetitionForm } from '@modules/competition-form';
import { API } from '@api/index';

import styles from './new-competition.module.scss';

export const NewCompetition = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { data } = API.competitions.useCompetitionQuery(
    id ? Number(id) : undefined,
  );

  const title = data?.name ?? 'Новое соревнование';

  return (
    <>
      <Typography.Title level={5}>{title}</Typography.Title>
      <div className={styles.content}>
        <NewCompetitionForm />
      </div>
    </>
  );
};
