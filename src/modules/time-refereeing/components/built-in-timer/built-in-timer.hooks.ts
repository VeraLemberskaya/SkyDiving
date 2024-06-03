import { useState, useRef, useCallback, useEffect } from 'react';

import { TimerStatus } from '../../time-refereeing.types';
import { MAX_MILLISECONDS } from '../../time-refereeing.config';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [timerStatus, setTimerStatus] = useState(TimerStatus.Paused);

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
    setTime(0);
    rafStart.current = null;
  };

  const tick = useCallback(() => {
    if (rafStart.current !== null) {
      const now = Date.now();
      const elapsed = now - rafStart.current;

      setTime(elapsed);

      if (elapsed < MAX_MILLISECONDS && timerStatus === TimerStatus.Running) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        setTimerStatus(TimerStatus.Stopped);
      }
    }
  }, [timerStatus]);

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

  return { time, timerStatus, setTime, startTimer, stopTimer, resetTimer };
};
