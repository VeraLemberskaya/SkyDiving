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
  onTimerTypeChange: (type: TimerType) => void;
}

export interface CustomKeyboardProps {
  currentValue: string;
  onInput: (value: string) => void;
}

export interface TimeEnterModalProps {
  isOpen: boolean;
  inputValue: string;
  onClose: () => void;
  onOk: (newValue: string) => void;
}

export interface ManualTimerProps {
  onSubmit: (time: number) => void;
}

export interface BuiltInTimerProps {
  onSubmit: (time: number) => void;
}
