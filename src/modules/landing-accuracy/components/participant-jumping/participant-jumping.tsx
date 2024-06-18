import { useState } from 'react';
import { Button, Flex, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { API } from '@api/index';
import { Jumping } from '@api/types';
import { getFullName } from '@utils/get-fullname';

import { Modal, ParticipantJumpingProps } from '../../landing-accuracy.types';
import { JumpingList } from '../jumping-list';
import { JumpingModal } from '../jumping-modal';
import { useSkydiverJumping } from '../../landing-accuracy.hooks';

import styles from './participant-jumping.module.scss';

const initialModal = {
  type: null,
  isOpen: false,
};

export const ParticipantJumping = ({
  participant,
}: ParticipantJumpingProps) => {
  const { competitionId, skydiverId } = participant;

  const { onAdd, onEdit, onDelete } = useSkydiverJumping(participant);

  const { data: nextJumpingData, isSuccess } =
    API.jumping.useNextJumpingNumberQuery({
      competitionId,
      skydiverId,
    });

  const { data: jumpingData } =
    API.jumping.useCompetitionMemberJumpingListQuery({
      competitionId,
      skydiverId,
    });

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

  if (isSuccess) {
    const { isLimitReached, nextJumpingNumber } = nextJumpingData;

    return (
      <div className={styles.jumping__content}>
        <Flex
          align="center"
          className={styles.jumping__header}
          justify="space-between"
        >
          <Typography.Title level={4}>
            {getFullName(participant.name)}
          </Typography.Title>
          {!isLimitReached && (
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={openAddJumpingModal}
            >
              Добавить
            </Button>
          )}
        </Flex>
        {nextJumpingNumber && (
          <JumpingModal
            isOpen={isAddModalOpen}
            key={nextJumpingNumber}
            nextJumpingNumber={nextJumpingNumber}
            title="Добавление прыжка:"
            onClose={closeModal}
            onSubmit={onAdd}
          />
        )}
        {jumping && (
          <JumpingModal
            isOpen={isEditModalOpen}
            jumping={jumping}
            title="Редактирование прыжка:"
            onClose={closeModal}
            onSubmit={(values) => onEdit({ jumpingId: jumping.id, values })}
          />
        )}
        {jumpingData?.jumping && (
          <JumpingList
            data={jumpingData.jumping}
            onDelete={onDelete}
            onItemEdit={handleEditItem}
          />
        )}
      </div>
    );
  }
};
