import { Breadcrumb, Typography } from 'antd';

import { breadcrumbItems } from '../../competition-judges.config';

export const CompetitionDetails = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Typography.Title level={4}>Чемпионат РБ</Typography.Title>
    </>
  );
};
