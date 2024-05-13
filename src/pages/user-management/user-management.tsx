import { useState } from 'react';
import { Flex, Tabs, TabsProps } from 'antd';

import { ManageJudges } from '@modules/manage-judges';
import { ManageSportsmen } from '@modules/manage-sportsmen';

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
      children: <ManageSportsmen />,
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
