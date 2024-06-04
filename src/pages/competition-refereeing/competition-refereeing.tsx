import { Flex, Typography } from 'antd';

import { CompetitionRefereeingList } from '@modules/competition-refereeing-list';

export const CompetitionsRefereeing = () => {
  return (
    <Flex vertical gap="middle">
      <Typography.Title level={4}>Судейство</Typography.Title>
      <CompetitionRefereeingList />
    </Flex>
  );
};
