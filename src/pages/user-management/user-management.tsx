import { useState } from 'react';
import { Flex, Tabs, TabsProps } from 'antd';

import { ManageReferees } from '@modules/manage-referees';
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
      children: <ManageReferees onManageCredential={handleManageCredentials} />,
    },
    {
      key: '2',
      label: 'Спортсмены',
      children: (
        <ManageSportsmen onManageCredential={handleManageCredentials} />
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
          userId={userId}
          onClose={closeModal}
        />
      )}
    </Flex>
  );
};
