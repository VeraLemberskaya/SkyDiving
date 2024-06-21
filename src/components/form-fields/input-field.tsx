import { Input, InputProps } from 'antd';
import { FieldValues } from 'react-hook-form';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

export const InputField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<InputProps, T>) => {
  const { label, required, className, ...props } = componentProps;

  return (
    <FormItem
      className={className}
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field, fieldState: { invalid } }) => (
        <Input
          id={field.name}
          status={invalid ? 'error' : ''}
          {...props}
          {...field}
        />
      )}
    </FormItem>
  );
};
