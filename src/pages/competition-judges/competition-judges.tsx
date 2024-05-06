import { Flex, Tabs, TabsProps } from 'antd';

import { PanelOfJudges } from '@modules/panel-of-judges';

import styles from './competition-judges.module.scss';
import { CompetitionDetails } from './components/competition-details';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '1 этап:',
    children: <PanelOfJudges />,
  },
  {
    key: '2',
    label: '2 этап:',
    children: <PanelOfJudges />,
  },
];

export const CompetitionJudges = () => {
  return (
    <Flex vertical gap="small">
      <CompetitionDetails />
      <div className={styles.content}>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </Flex>
  );
};
