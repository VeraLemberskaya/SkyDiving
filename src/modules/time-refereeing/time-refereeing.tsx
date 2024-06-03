import { useState } from 'react';
import { Button, Flex } from 'antd';

import { BuiltInTimer } from './components/built-in-timer';
import { ManualTimer } from './components/manual-timer';
import { TimerTypeSelect } from './components/timer-type-select';
import { TimerType } from './time-refereeing.types';
import styles from './time-refereeing.module.scss';

export const TimeRefereeing = () => {
  const [timerType, setTimerType] = useState<TimerType | null>(null);
  const [showTimerSelect, setShowTimerSelect] = useState(true);

  const handleTimerTypeChange = (type: TimerType) => {
    setTimerType(type);
  };

  const handleContinue = () => {
    setShowTimerSelect(false);
  };

  const handleBackToTypeSelect = () => {
    setTimerType(null);
    setShowTimerSelect(true);
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
          {timerType === TimerType.BuiltIn && <BuiltInTimer />}
        </Flex>
      )}
    </>
  );
};
