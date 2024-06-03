import classnames from 'classnames';

import styles from './error-message.module.scss';
import { ErrorMessageProps } from './error-message.types';

export const ErrorMessage = ({ visible, message }: ErrorMessageProps) => {
  return (
    <div
      className={classnames(styles.errorMessage, { [styles.visible]: visible })}
    >
      {message}
    </div>
  );
};
