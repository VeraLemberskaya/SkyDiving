import { ReactNode } from 'react';
import { Flex } from 'antd';

import styles from './panel-of-users.module.scss';

interface PanelOfUsersProps {
  children: ReactNode;
}

export const PanelOfUsers = ({ children }: PanelOfUsersProps) => {
  return (
    <Flex gap="middle">
      <div className={styles.content}>{children}</div>
    </Flex>
  );
};
