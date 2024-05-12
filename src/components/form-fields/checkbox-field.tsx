import { FieldValues } from 'react-hook-form';
import { Checkbox, CheckboxProps } from 'antd';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

export const CheckboxField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<CheckboxProps, T>) => {
  const { label, required, ...props } = componentProps;

  return (
    <FormItem
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field: { value, ...field } }) => (
        <Checkbox checked={value} id={field.name} {...props} {...field} />
      )}
    </FormItem>
  );
};
