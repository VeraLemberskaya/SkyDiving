import { FieldValues, UseControllerProps } from 'react-hook-form';

export type FormFieldProps<P, T extends FieldValues> = {
  componentProps: P & {
    label?: string;
    required?: boolean;
  };
} & UseControllerProps<T>;
