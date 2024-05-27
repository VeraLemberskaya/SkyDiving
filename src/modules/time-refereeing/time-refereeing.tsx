import { useState } from 'react';
import { Button, Flex, RadioChangeEvent } from 'antd';

import { BuiltInTimer } from './components/built-in-timer';
import { ManualTimer } from './components/manual-timer';
import { TimerTypeSelect } from './components/timer-type-select';
import { TimerType } from './time-refereeing.types';
import { MAX_MILLISECONDS } from './time-refereeing.config';
import styles from './time-refereeing.module.scss';

export const TimeRefereeing = () => {
  const [time, setTime] = useState(0);
  const [timerType, setTimerType] = useState<TimerType | null>(null);
  const [showTimerSelect, setShowTimerSelect] = useState(true);

  const handleTimerTypeChange = (e: RadioChangeEvent) => {
    setTimerType(e.target.value);
  };

  const handleContinue = () => {
    setShowTimerSelect(false);
  };

  const handleBackToTypeSelect = () => {
    setTimerType(null);
    setShowTimerSelect(true);
    setTime(0);
  };

  const handleTick = (elapsedTime: number) => {
    const currentTime =
      elapsedTime >= MAX_MILLISECONDS ? MAX_MILLISECONDS : elapsedTime;

    setTime(currentTime);
  };

  const handleOk = () => {
    // Logic to handle when "Ok" button is clicked
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <>
      {showTimerSelect ? (
        <TimerTypeSelect
          type={timerType}
          onContinue={handleContinue}
          onTimerTypeChange={handleTimerTypeChange}
        />
      ) : (
        <Flex vertical gap="middle">
          <Button
            className={styles.button}
            type="link"
            onClick={handleBackToTypeSelect}
          >
            Вернуться к выбору таймера
          </Button>
          {timerType === TimerType.Manual && <ManualTimer />}
          {timerType === TimerType.BuiltIn && (
            <BuiltInTimer
              time={time}
              onOk={handleOk}
              onReset={handleReset}
              onTick={handleTick}
            />
          )}
        </Flex>
      )}
    </>
  );
};
