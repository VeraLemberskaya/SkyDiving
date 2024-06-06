import { useState } from 'react';
import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

import { routes } from '@constants/routes';

import { BuiltInTimer } from './components/built-in-timer';
import { ManualTimer } from './components/manual-timer';
import { TimerTypeSelect } from './components/timer-type-select';
import { TimerType } from './time-refereeing.types';
import styles from './time-refereeing.module.scss';

export const TimeRefereeing = () => {
  const [timerType, setTimerType] = useState<TimerType | null>(null);
  const [showTimerSelect, setShowTimerSelect] = useState(true);

  const navigate = useNavigate();

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (time: number) => {
    const refereeingId = 1; //TODO: получить из кэша или еще откуда

    navigate(routes.PENALTY_BY_ID(refereeingId));
    //TODO: Logic to handle when "Ok" button is clicked
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
          {timerType === TimerType.Manual && (
            <ManualTimer onSubmit={onSubmit} />
          )}
          {timerType === TimerType.BuiltIn && (
            <BuiltInTimer onSubmit={onSubmit} />
          )}
        </Flex>
      )}
    </>
  );
};
