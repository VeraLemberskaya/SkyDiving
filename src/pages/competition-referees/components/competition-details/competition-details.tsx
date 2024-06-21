import { Breadcrumb, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';

import { routes } from '@constants/routes';

export const CompetitionDetails = ({ title }: { title?: string }) => {
  const { id } = useParams();

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
      <Typography.Title level={4}>{title}</Typography.Title>
    </>
  );
};
