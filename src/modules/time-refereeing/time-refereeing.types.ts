import { RadioChangeEvent } from 'antd';

export const enum TimerType {
  Manual = 'Manual',
  BuiltIn = 'Built-in',
}

export const enum TimerStatus {
  Running = 'Running',
  Stopped = 'Stopped',
  Paused = 'Paused',
}

export interface TimerTypeSelectProps {
  type: TimerType | null;
  onContinue: () => void;
  onTimerTypeChange: (e: RadioChangeEvent) => void;
}
