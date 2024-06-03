import { useState, useEffect } from 'react';
import { Button, Flex, Input, Modal } from 'antd';

import { CustomKeyboard } from '../custom-keyboard';
import { TimeEnterModalProps } from '../../../../time-refereeing.types';
import { MAX_INPUT_VALUE } from '../../../../time-refereeing.config';
import { processTimeInput } from '../../manual-timer.lib';

import styles from './time-enter-modal.module.scss';

export const TimeEnterModal = ({
  isOpen,
  inputValue,
  onOk,
  onClose,
}: TimeEnterModalProps) => {
  const [modalInputValue, setModalInputValue] = useState(inputValue);

  useEffect(() => {
    setModalInputValue(inputValue);
  }, [inputValue]);

  const changeModalInputValue = (newValue: string) => {
    setModalInputValue(processTimeInput(newValue));
  };

  const handleOk = () => {
    onOk(modalInputValue);
  };

  return (
    <Modal
      centered
      destroyOnClose
      footer={[
        <Button key="ok" type="primary" onClick={handleOk}>
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
          disabled
          className={styles.modalContainer_input}
          maxLength={MAX_INPUT_VALUE}
          placeholder="00.00"
          value={modalInputValue}
          variant="filled"
        />
        <CustomKeyboard
          currentValue={modalInputValue}
          onInput={changeModalInputValue}
        />
      </Flex>
    </Modal>
  );
};
