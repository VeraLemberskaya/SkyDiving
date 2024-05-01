import classnames from 'classnames';

import styles from './error-message.module.scss';

interface ErrorMessageProps {
  visible: boolean;
  message?: string;
}

export const ErrorMessage = ({ visible, message }: ErrorMessageProps) => {
  return (
    <div
      className={classnames(styles.errorMessage, { [styles.visible]: visible })}
    >
      {message}
    </div>
  );
};
