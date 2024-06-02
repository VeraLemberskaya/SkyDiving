import { ChangeEvent, useState } from 'react';
import { Button, Flex, Input, Typography } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';

import {
  MAX_INPUT_VALUE,
  MAX_MILLISECONDS,
  MAX_SECONDS,
  TO_MILLISECONDS_MULTIPLIER,
} from '../../time-refereeing.config';
import { ManualTimerProps } from '../../time-refereeing.types';

import styles from './manual-timer.module.scss';
import { TimeEnterModal } from './components/time-enter-modal';

export const ManualTimer = ({ onOk, onReset, onChange }: ManualTimerProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isTimeEnterModalOpen, setIsTimeModalEnterOpen] = useState(false);

  const changeInputValue = (newValue: string) => {
    if (/^[2-9]/.test(newValue)) {
      newValue = '0' + newValue;
    }

    newValue = newValue.replace(/\D/g, '');

    if (Number(newValue.slice(0, 2)) >= MAX_SECONDS) {
      setInputValue('16.00');
      return;
    }

    if (newValue.length >= 2) {
      newValue = newValue.slice(0, 2) + '.' + newValue.slice(2);
    }

    setInputValue(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    changeInputValue(newValue);
  };

  const handleOk = () => {
    const timeInMilliseconds =
      Number(inputValue.replace('.', '')) * TO_MILLISECONDS_MULTIPLIER;

    onChange(timeInMilliseconds);
    onOk();
  };

  const resetTimer = () => {
    setInputValue('');
    onReset();
  };

  const setMaxTimeValue = () => {
    setInputValue('16.00');
    onChange(MAX_MILLISECONDS);
  };

  const handleOpenModal = () => {
    setIsTimeModalEnterOpen(true);
  };

  const handleCloseModal = () => {
    setIsTimeModalEnterOpen(false);
  };

  return (
    <Flex gap="middle">
      <Typography.Text>Время:</Typography.Text>
      <Flex vertical className={styles.timerContainer} gap="middle">
        <Input
          className={styles.timerContainer_input}
          maxLength={MAX_INPUT_VALUE}
          placeholder="00.00"
          suffix={
            <Button
              icon={<CalculatorOutlined />}
              type="text"
              onClick={handleOpenModal}
            />
          }
          value={inputValue}
          variant="filled"
          onChange={handleInputChange}
        />
        <Flex gap="small">
          <Button
            className={styles.button}
            type="default"
            onClick={setMaxTimeValue}
          >
            {'>16.00'}
          </Button>
          <Button className={styles.button} type="default" onClick={handleOk}>
            Ок
          </Button>
          <Button className={styles.button} type="default" onClick={resetTimer}>
            Заново
          </Button>
        </Flex>
      </Flex>
      <TimeEnterModal
        inputValue={inputValue}
        isOpen={isTimeEnterModalOpen}
        onChange={changeInputValue}
        onClose={handleCloseModal}
      />
    </Flex>
  );
};
