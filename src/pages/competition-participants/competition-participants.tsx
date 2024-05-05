import { Breadcrumb, Flex, Typography } from 'antd';

import { ParticipantsTree } from '@modules/participants-tree';

import { breadcrumbItems } from './competition-participants.config';
import styles from './competition-participants.module.scss';

export const CompetitionParticipants = () => {
  return (
    <Flex vertical gap="small">
      <Breadcrumb items={breadcrumbItems} />
      <Typography.Title level={4}>Чемпионат РБ</Typography.Title>
      <div className={styles.content}>
        <ParticipantsTree />
      </div>
    </Flex>
  );
};
