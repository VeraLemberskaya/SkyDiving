import { useState } from 'react';
import { Flex, Tabs, TabsProps } from 'antd';

import { SportsmenInfoTable } from '@modules/sportsmen-info-table';
import { ManageJudges } from '@modules/manage-judges';
import { ManageCredentialButton } from '@components/manage-credential-button';
import { sportsmenData } from '@api/mocks';

import styles from './user-management.module.scss';
import { UserManagementTitle } from './components/user-management-title';
import { ManageCredentialModal } from './components/manage-credential-modal';

export const UserManagement = () => {
  const [userId, setUserId] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleManageCredentials = (userId: number) => {
    setUserId(userId);
    openModal();
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Судьи',
      children: <ManageJudges onManageCredential={handleManageCredentials} />,
    },
    {
      key: '2',
      label: 'Спортсмены',
      children: (
        <SportsmenInfoTable
          data={sportsmenData}
          start={<ManageCredentialButton onClick={openModal} />}
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
      {userId && (
        <ManageCredentialModal
          isOpen={isModalOpen}
          title="Данные для входа"
          userId={userId}
          onClose={closeModal}
        />
      )}
    </Flex>
  );
};
