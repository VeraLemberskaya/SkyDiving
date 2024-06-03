import { ChangeEvent, useState } from 'react';
import { Button, Flex, Input, Typography } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';

import {
  MAX_INPUT_VALUE,
  MAX_MILLISECONDS,
  MAX_SECONDS_STRING,
  TO_MILLISECONDS_MULTIPLIER,
} from '../../time-refereeing.config';

import styles from './manual-timer.module.scss';
import { TimeEnterModal } from './components/time-enter-modal';
import { processTimeInput } from './manual-timer.lib';

export const ManualTimer = () => {
  const [time, setTime] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isTimeEnterModalOpen, setIsTimeModalEnterOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputValue(processTimeInput(newValue));
  };

  const handleOk = () => {
    const timeInMilliseconds =
      Number(inputValue.replace('.', '')) * TO_MILLISECONDS_MULTIPLIER;

    setTime(timeInMilliseconds);
    //TODO: Logic to handle when "Ok" button is clicked
  };

  const resetTimer = () => {
    setInputValue('');
    setTime(0);
  };

  const setMaxTimeValue = () => {
    setInputValue(MAX_SECONDS_STRING);
    setTime(MAX_MILLISECONDS);
  };

  const onOpenModal = () => {
    setIsTimeModalEnterOpen(true);
  };

  const onCloseModal = () => {
    setIsTimeModalEnterOpen(false);
  };

  const onOk = (newValue: string) => {
    setInputValue(processTimeInput(newValue));
    onCloseModal();
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
              onClick={onOpenModal}
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
        onClose={onCloseModal}
        onOk={onOk}
      />
    </Flex>
  );
};
