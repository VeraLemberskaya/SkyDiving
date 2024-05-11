import { ChangeEventHandler } from 'react';
import { Input } from 'antd';

import styles from './sportsmen-search.module.scss';

export const SportsmenSearch = () => {
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
