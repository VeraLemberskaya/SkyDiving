import { FieldValues } from 'react-hook-form';
import { InputNumber, InputNumberProps } from 'antd';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

export const InputNumberField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<InputNumberProps, T>) => {
  const { label, required, ...props } = componentProps;

  return (
    <FormItem
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field, fieldState: { invalid } }) => (
        <InputNumber
          id={field.name}
          status={invalid ? 'error' : ''}
          style={{ width: '100%' }}
          type="number"
          {...props}
          {...field}
        />
      )}
    </FormItem>
  );
};
