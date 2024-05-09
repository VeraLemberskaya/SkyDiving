import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Flex, Typography, Tooltip } from 'antd';

import styles from './user-management-title.module.scss';

export const UserManagementTitle = () => {
  return (
    <Flex align="center" gap="middle">
      <Typography.Title level={4}>Список пользователей</Typography.Title>
      <Tooltip
        arrow={{ pointAtCenter: true }}
        placement="bottomLeft"
        title="ДОБАВИТЬ ОПИСАНИЕ СТРАНИЦЫ"
      >
        <QuestionCircleTwoTone className={styles.tooltip} />
      </Tooltip>
    </Flex>
  );
};
