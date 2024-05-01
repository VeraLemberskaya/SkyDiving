import { ReactNode } from 'react';
import {
  FieldValues,
  ControllerRenderProps,
  ControllerFieldState,
  UseControllerProps,
} from 'react-hook-form';

interface FieldProps<T extends FieldValues> {
  field: ControllerRenderProps<T>;
  fieldState: ControllerFieldState;
}

export interface FormItemProps<T extends FieldValues> {
  label?: string;
  required?: boolean;
  controllerProps: UseControllerProps<T>;
  children: (props: FieldProps<T>) => ReactNode;
}
