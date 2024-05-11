import { Flex, Tabs, TabsProps } from 'antd';

import { SportsmenInfoTable } from '@modules/sportsmen-info-table';
import { ManageJudges } from '@modules/manage-judges';
import { ManageCredentialButton } from '@components/manage-credential-button';
import { sportsmenData } from '@api/mocks';

import styles from './user-management.module.scss';
import { UserManagementTitle } from './components/user-management-title';

export const UserManagement = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Судьи',
      children: <ManageJudges />,
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
