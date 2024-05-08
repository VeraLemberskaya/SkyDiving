import { useState } from 'react';
import { Flex, Tabs, TabsProps, Tooltip, Typography } from 'antd';
import { QuestionCircleTwoTone } from '@ant-design/icons';

import {
  JudgesInfoTable,
  ManageCredentialButton,
  PanelOfUsers,
  SportsmenInfoTable,
} from '@modules/panel-of-users';

import styles from './user-management.module.scss';
import { judgesData, sportsmenData } from './mocks/data';

export const UserManagement = () => {
  const [loading, setLoading] = useState(false);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Судьи',
      children: (
        <PanelOfUsers>
          <JudgesInfoTable
            data={judgesData}
            loading={loading}
            start={<ManageCredentialButton />}
          />
        </PanelOfUsers>
      ),
    },
    {
      key: '2',
      label: 'Спортсмены',
      children: (
        <PanelOfUsers>
          <SportsmenInfoTable
            data={sportsmenData}
            loading={loading}
            start={<ManageCredentialButton />}
          />
        </PanelOfUsers>
      ),
    },
  ];

  return (
    <Flex vertical>
      <Flex align="center" gap="small">
        <Typography.Title level={5}>Список пользователей</Typography.Title>
        <Tooltip
          arrow={{ pointAtCenter: true }}
          placement="bottomLeft"
          title="ДОБАВИТЬ ОПИСАНИЕ СТРАНИЦЫ"
        >
          <QuestionCircleTwoTone className={styles.tooltip} />
        </Tooltip>
      </Flex>
      <Tabs defaultActiveKey="1" items={items} size="middle" />
    </Flex>
  );
};
