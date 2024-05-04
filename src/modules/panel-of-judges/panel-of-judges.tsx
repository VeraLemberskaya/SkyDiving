import { Flex } from 'antd';

import { JudgesTable } from './components/judges-tables';
import { judgesData, mainJudgesData } from './mocks/data';

export const PanelOfJudges = () => {
  return (
    <Flex vertical gap="small">
      <JudgesTable data={mainJudgesData} title="Главная судейская коллегия" />
      <JudgesTable data={judgesData} title="Судейская коллегия" />
    </Flex>
  );
};
