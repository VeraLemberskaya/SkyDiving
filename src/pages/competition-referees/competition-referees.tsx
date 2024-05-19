import { Flex, Tabs, TabsProps } from 'antd';

import { PanelOfReferees } from '@modules/panel-of-referees';

import styles from './competition-referees.module.scss';
import { CompetitionDetails } from './components/competition-details';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '1 этап:',
    children: <PanelOfReferees />,
  },
  {
    key: '2',
    label: '2 этап:',
    children: <PanelOfReferees />,
  },
];

export const CompetitionReferees = () => {
  return (
    <Flex vertical gap="small">
      <CompetitionDetails />
      <div className={styles.content}>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </Flex>
  );
};
