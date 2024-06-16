import { Breadcrumb, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';

import { API } from '@api/index';
import { routes } from '@constants/routes';

export const CompetitionDetails = () => {
  const { id } = useParams();
  const { data } = API.competitions.useCompetitionQuery(Number(id));

  const items = [
    {
      title: (
        <Link
          to={{
            pathname: routes.NEW_COMPETITION,
            search: new URLSearchParams({ id: String(id) }).toString(),
          }}
        >
          Соревнование
        </Link>
      ),
    },
    {
      title: 'Судейская коллегия',
    },
  ];

  return (
    <>
      <Breadcrumb items={items} />
      <Typography.Title level={4}>{data?.name}</Typography.Title>
    </>
  );
};
