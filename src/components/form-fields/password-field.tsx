import { Input } from 'antd';
import { FieldValues } from 'react-hook-form';
import { PasswordProps } from 'antd/es/input';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

export const PasswordField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<PasswordProps, T>) => {
  const { label, required, ...props } = componentProps;

  return (
    <FormItem
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field, fieldState: { invalid } }) => (
        <Input.Password
          id={field.name}
          status={invalid ? 'error' : ''}
          {...props}
          {...field}
        />
      )}
    </FormItem>
  );
};
