import { Button, Flex, Input, Modal, Typography } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';

import { CopyButton } from '../copy-button';
import { UpdatePasswordButton } from '../update-password-button';

import styles from './manage-credential-modal.module.scss';
import { ManageCredentialProps } from './manage-credential-modal.types';

export const ManageCredentialModal = ({
  // userId,
  isOpen,
  title,
  onClose,
}: ManageCredentialProps) => {
  const onCancel = () => {
    onClose();
  };

  return (
    <Modal
      centered
      destroyOnClose
      footer={
        <Button type="primary" onClick={onCancel}>
          OK
        </Button>
      }
      maskClosable={false}
      open={isOpen}
      title={title}
      onCancel={onCancel}
    >
      <Flex vertical className={styles.modal} gap="small">
        <Typography.Text>Логин:</Typography.Text>
        <Flex gap="small">
          <Input
            disabled
            addonBefore={<UserOutlined />}
            className={styles.modal_input}
            name="login"
          />
          <CopyButton />
        </Flex>
        <Typography.Text>Пароль:</Typography.Text>
        <Flex gap="small">
          <Input
            disabled
            addonBefore={<KeyOutlined />}
            className={styles.modal_input}
            name="password"
          />
          <CopyButton />
          <UpdatePasswordButton />
        </Flex>
      </Flex>
    </Modal>
  );
};
