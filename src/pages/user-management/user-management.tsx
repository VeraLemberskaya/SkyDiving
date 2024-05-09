import { Flex, Tabs, TabsProps } from 'antd';

import { JudgesInfoTable } from '@modules/judges-info-table';
import { SportsmenInfoTable } from '@modules/sportsmen-info-table';

import { judgesData, sportsmenData } from './mocks/data';
import styles from './user-management.module.scss';
import { ManageCredentialButton } from './components/manage-credential-button';
import { UserManagementTitle } from './components/user-management-title';

export const UserManagement = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Судьи',
      children: (
        <JudgesInfoTable data={judgesData} start={<ManageCredentialButton />} />
      ),
    },
    {
      key: '2',
      label: 'Спортсмены',
      children: (
        <SportsmenInfoTable
          data={sportsmenData}
          start={<ManageCredentialButton />}
        />
      ),
    },
  ];

  return (
    <Flex vertical>
      <UserManagementTitle />
      <div className={styles.content}>
        <Tabs defaultActiveKey="1" items={items} size="middle" />
      </div>
    </Flex>
  );
};
