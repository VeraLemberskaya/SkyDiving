import { FieldValues, useController } from 'react-hook-form';
import classnames from 'classnames';

import { ErrorMessage } from '@components/error-message';

import styles from './form-item.module.scss';
import { FormItemProps } from './form-item.types';

export const FormItem = <T extends FieldValues>({
  label,
  required,
  className,
  children,
  controllerProps,
}: FormItemProps<T>) => {
  const { field, fieldState } = useController(controllerProps);

  const { invalid, error } = fieldState;

  return (
    <div className={classnames(styles.formItem, className)}>
      {label && (
        <label className={styles.label} htmlFor={controllerProps.name}>
          {required && <span>*</span>}
          {label}:
        </label>
      )}
      {children({ field, fieldState })}
      <ErrorMessage message={error?.message} visible={invalid} />
    </div>
  );
};
