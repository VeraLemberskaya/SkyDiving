import { ChangeEventHandler } from 'react';
import { Input } from 'antd';

import styles from './referees-search.module.scss';

export const RefereesSearch = () => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = () => {
    //handleChange
  };

  return (
    <Input.Search
      className={styles.search}
      placeholder="Введите ФИО"
      onChange={handleChange}
    />
  );
};
