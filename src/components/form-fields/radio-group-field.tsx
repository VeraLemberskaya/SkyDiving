import { FieldValues } from 'react-hook-form';
import { Radio, RadioGroupProps } from 'antd';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

export const RadioGroupField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<RadioGroupProps, T>) => {
  const { label, required, ...props } = componentProps;

  return (
    <FormItem
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field }) => <Radio.Group id={field.name} {...props} {...field} />}
    </FormItem>
  );
};
