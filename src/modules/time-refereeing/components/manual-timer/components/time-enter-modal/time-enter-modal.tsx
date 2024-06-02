import { ChangeEvent } from 'react';
import { Button, Flex, Input, Modal } from 'antd';

import { CustomKeyboard } from '../custom-keyboard';
import { TimeEnterModalProps } from '../../../../time-refereeing.types';
import { MAX_INPUT_VALUE } from '../../../../time-refereeing.config';

import styles from './time-enter-modal.module.scss';

export const TimeEnterModal = ({
  isOpen,
  onClose,
  inputValue,
  onChange,
}: TimeEnterModalProps) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    onChange(newValue);
  };

  return (
    <Modal
      centered
      destroyOnClose
      footer={[
        <Button key="ok" type="primary" onClick={onClose}>
          OK
        </Button>,
      ]}
      maskClosable={false}
      open={isOpen}
      width="fit-content"
      onCancel={onClose}
    >
      <Flex vertical className={styles.modalContainer} gap="small">
        <Input
          className={styles.modalContainer_input}
          maxLength={MAX_INPUT_VALUE}
          placeholder="00.00"
          value={inputValue}
          variant="filled"
          onChange={handleInput}
        />
        <CustomKeyboard currentValue={inputValue} onInput={onChange} />
      </Flex>
    </Modal>
  );
};
