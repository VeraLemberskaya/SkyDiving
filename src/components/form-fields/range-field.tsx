import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { FieldValues } from 'react-hook-form';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

const { RangePicker } = DatePicker;

export const RangeField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<RangePickerProps, T>) => {
  const { label, required, ...props } = componentProps;

  return (
    <FormItem
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field, fieldState: { invalid } }) => (
        <RangePicker
          status={invalid ? 'error' : ''}
          {...props}
          {...field}
          style={{ width: '100%' }}
        />
      )}
    </FormItem>
  );
};
