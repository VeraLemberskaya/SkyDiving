import { ChangeEvent } from 'react';
import { Input } from 'antd';

import { debounce } from '@utils/debounce';

import { useManageSportsmenStore } from '../../manage-sportsmen.store';

import styles from './sportsmen-search.module.scss';

export const SportsmenSearch = () => {
  const setPage = useManageSportsmenStore((state) => state.setPage);
  const setSearch = useManageSportsmenStore((state) => state.setSearch);

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  }, 500);

  return (
    <Input.Search
      className={styles.search}
      placeholder="Введите ФИО"
      onChange={handleChange}
    />
  );
};
