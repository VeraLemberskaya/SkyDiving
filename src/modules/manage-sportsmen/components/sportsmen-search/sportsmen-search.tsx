import { ChangeEventHandler } from 'react';
import { Input } from 'antd';

import { useManageSportsmenStore } from '../../manage-sportsmen.store';

import styles from './sportsmen-search.module.scss';

export const SportsmenSearch = () => {
  const search = useManageSportsmenStore((state) => state.search);
  const setSearch = useManageSportsmenStore((state) => state.setSearch);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    //handleChange
  };

  return (
    <Input.Search
      className={styles.search}
      placeholder="Введите ФИО"
      value={search}
      onChange={handleChange}
    />
  );
};
