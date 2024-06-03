import { Button, Flex, Input, Typography } from 'antd';

import { formatTime } from '@utils/format-time';

import { MAX_MILLISECONDS } from '../../time-refereeing.config';
import { BuiltInTimerProps, TimerStatus } from '../../time-refereeing.types';

import styles from './built-in-timer.module.scss';
import { useTimer } from './built-in-timer.hooks';

export const BuiltInTimer = ({ onSubmit }: BuiltInTimerProps) => {
  const { time, timerStatus, startTimer, stopTimer, resetTimer } = useTimer();

  const handleOk = () => {
    onSubmit(time);
  };

  return (
    <Flex gap="middle">
      <Typography.Text>Время:</Typography.Text>
      <Flex vertical className={styles.timerContainer} gap="middle">
        <Input
          disabled
          className={styles.timerContainer_input}
          value={formatTime(time)}
        />
        {timerStatus === TimerStatus.Stopped ? (
          <Flex gap="small">
            <Button className={styles.button} type="default" onClick={handleOk}>
              Ок
            </Button>
            <Button
              className={styles.button}
              type="default"
              onClick={resetTimer}
            >
              Заново
            </Button>
          </Flex>
        ) : (
          <Button
            className={styles.button}
            disabled={time >= MAX_MILLISECONDS}
            type="primary"
            onClick={
              timerStatus === TimerStatus.Running ? stopTimer : startTimer
            }
          >
            {timerStatus === TimerStatus.Running ? 'Стоп' : 'Старт'}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
