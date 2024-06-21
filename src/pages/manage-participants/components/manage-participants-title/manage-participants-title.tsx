import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Flex, Typography, Tooltip } from 'antd';

import { tooltip } from '../../manage-participants.config';

import styles from './manage-participants-title.module.scss';

export const ManageParticipantsTitle = () => {
  return (
    <div className={styles.title}>
      <Flex align="center" gap="middle">
        <Typography.Title level={4}>Список спортсменов</Typography.Title>
        <Tooltip title={tooltip}>
          <QuestionCircleTwoTone
            className={styles.icon}
            style={{ fontSize: 20 }}
          />
        </Tooltip>
      </Flex>
      <Typography.Text type="secondary">
        Данный список включает в себя членов аэроклуба и участников
        соревнований.
      </Typography.Text>
    </div>
  );
};
