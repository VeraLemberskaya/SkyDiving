import { useState } from 'react';
import { Button, Flex, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { Jumping } from '@api/mock-types';

import { Modal, ParticipantJumpingProps } from '../../landing-accuracy.types';
import { AddJumpingModal } from '../add-jumping-modal';
import { EditJumpingModal } from '../edit-jumping-modal';
import { JumpingList } from '../jumping-list';

import styles from './participant-jumping.module.scss';

const initialModal = {
  type: null,
  isOpen: false,
};

export const ParticipantJumping = ({
  participant,
}: ParticipantJumpingProps) => {
  const [jumping, setJumping] = useState<Jumping | undefined>();
  const [modal, setModal] = useState<Modal>(initialModal);

  const openAddJumpingModal = () => setModal({ type: 'add', isOpen: true });
  const openEditJumpingModal = () => setModal({ type: 'edit', isOpen: true });
  const closeModal = () => setModal(initialModal);

  const handleEditItem = (jumping: Jumping) => {
    setJumping(jumping);
    openEditJumpingModal();
  };

  const isAddModalOpen = modal.type === 'add' && modal.isOpen;
  const isEditModalOpen = modal.type === 'edit' && modal.isOpen;

  return (
    <div className={styles.jumping__content}>
      <Flex
        align="center"
        className={styles.jumping__header}
        justify="space-between"
      >
        <Typography.Title level={4}>{participant.fullName}</Typography.Title>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={openAddJumpingModal}
        >
          Добавить
        </Button>
      </Flex>
      <AddJumpingModal isOpen={isAddModalOpen} onClose={closeModal} />
      {jumping && (
        <EditJumpingModal
          isOpen={isEditModalOpen}
          jumping={jumping}
          onClose={closeModal}
        />
      )}
      <JumpingList onItemEdit={handleEditItem} />
    </div>
  );
};
