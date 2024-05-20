import { Button, Flex, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { CompetitionList } from '@modules/competition-list';
import { routes } from '@constants/routes';

export const Competitions = () => {
  return (
    <Flex vertical gap="large">
      <Flex justify="space-between">
        <Typography.Title level={4}>Соревнования</Typography.Title>
        <Link to={routes.NEW_COMPETITION}>
          <Button icon={<PlusOutlined />} size="large" type="primary">
            Добавить
          </Button>
        </Link>
      </Flex>
      <CompetitionList title="Актуальные соревнования:" />
      <CompetitionList title="Прошедшие соревнования:" />
    </Flex>
  );
};
