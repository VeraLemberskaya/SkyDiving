import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd/es/date-picker';
import { FieldValues } from 'react-hook-form';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

export const DatePickerField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<DatePickerProps, T>) => {
  const { label, required, className, ...props } = componentProps;

  return (
    <FormItem
      className={className}
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field, fieldState: { invalid } }) => (
        <DatePicker
          id={field.name}
          status={invalid ? 'error' : ''}
          style={{ width: '100%' }}
          {...props}
          {...field}
        />
      )}
    </FormItem>
  );
};
