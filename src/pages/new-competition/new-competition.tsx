import { Typography } from 'antd';

import { NewCompetitionForm } from '@modules/competition-form';

import styles from './new-competition.module.scss';

export const NewCompetition = () => {
  return (
    <>
      <Typography.Title level={5}>Новое соревнование</Typography.Title>
      <div className={styles.content}>
        <NewCompetitionForm />
      </div>
    </>
  );
};
