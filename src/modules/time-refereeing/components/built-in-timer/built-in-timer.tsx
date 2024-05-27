import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Flex, Input, Typography } from 'antd';

import { formatTime } from '@utils/formatTime';

import { MAX_MILLISECONDS } from '../../time-refereeing.config';
import { TimerStatus } from '../../time-refereeing.types';

import styles from './built-in-timer.module.scss';

interface BuiltInTimerProps {
  time: number;
  onTick: (time: number) => void;
  onOk: () => void;
  onReset: () => void;
}

export const BuiltInTimer = ({
  time,
  onTick,
  onOk,
  onReset,
}: BuiltInTimerProps) => {
  const [timerStatus, setTimerStatus] = useState<TimerStatus>(
    TimerStatus.Paused,
  );

  const rafStart = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);

  const startTimer = () => {
    setTimerStatus(TimerStatus.Running);

    if (rafStart.current === null) {
      rafStart.current = Date.now() - time;
    }

    rafId.current = requestAnimationFrame(tick);
  };

  const stopTimer = () => {
    setTimerStatus(TimerStatus.Stopped);

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  const resetTimer = () => {
    setTimerStatus(TimerStatus.Paused);
    onReset();

    rafStart.current = null;
  };

  const tick = useCallback(() => {
    if (rafStart.current !== null) {
      const now = Date.now();
      const elapsed = now - rafStart.current;

      onTick(elapsed);

      if (elapsed < MAX_MILLISECONDS && timerStatus === TimerStatus.Running) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        setTimerStatus(TimerStatus.Stopped);
      }
    }
  }, [onTick, timerStatus]);

  useEffect(() => {
    if (timerStatus === TimerStatus.Running) {
      rafId.current = requestAnimationFrame(tick);
    }

    if (timerStatus === TimerStatus.Stopped && rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [tick, timerStatus]);

  useEffect(() => {
    if (time >= MAX_MILLISECONDS) {
      setTimerStatus(TimerStatus.Stopped);
    }
  }, [time]);

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
            <Button className={styles.button} type="default" onClick={onOk}>
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
