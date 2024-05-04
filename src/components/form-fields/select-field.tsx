import { FieldValues } from 'react-hook-form';
import { Select, SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

import { FormItem } from '@components/form-item';

import { FormFieldProps } from './form-fields.types';

export const SelectField = <T extends FieldValues>({
  componentProps,
  ...controllerProps
}: FormFieldProps<SelectProps, T>) => {
  const { label, required, showSearch, ...props } = componentProps;

  const filterOption = (input: string, option?: DefaultOptionType) =>
    ((option?.label as string) ?? '')
      .toLowerCase()
      .includes(input.toLowerCase());

  return (
    <FormItem
      controllerProps={controllerProps}
      label={label}
      required={required}
    >
      {({ field, fieldState: { invalid } }) => (
        <Select
          filterOption={showSearch ? filterOption : undefined}
          id={field.name}
          showSearch={showSearch}
          status={invalid ? 'error' : ''}
          {...props}
          {...field}
          style={{ width: '100%' }}
        />
      )}
    </FormItem>
  );
};
