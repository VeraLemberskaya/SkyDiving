import { Breadcrumb, Typography } from 'antd';

import { breadcrumbItems } from '../../competition-participants.config';

export const CompetitionDetails = ({ title }: { title?: string }) => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Typography.Title level={4}>{title}</Typography.Title>
    </>
  );
};
