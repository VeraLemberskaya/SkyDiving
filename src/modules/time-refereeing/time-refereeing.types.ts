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

export interface BuiltInTimerProps {
  time: number;
  onTick: (time: number) => void;
  onOk: () => void;
  onReset: () => void;
}

export interface CustomKeyboardProps {
  currentValue: string;
  onInput: (value: string) => void;
}

export interface TimeEnterModalProps {
  isOpen: boolean;
  inputValue: string;
  onChange: (newValue: string) => void;
  onClose: () => void;
}

export interface ManualTimerProps {
  onOk: () => void;
  onReset: () => void;
  onChange: (time: number) => void;
}
