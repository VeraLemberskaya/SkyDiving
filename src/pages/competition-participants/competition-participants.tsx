import { Flex, Tabs, TabsProps } from 'antd';

import { ManageParticipantsTree } from '@modules/manage-participants-tree';

import styles from './competition-participants.module.scss';
import { CompetitionDetails } from './components/competition-details';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '1 этап:',
    children: <ManageParticipantsTree />,
  },
  {
    key: '2',
    label: '2 этап:',
    children: <ManageParticipantsTree />,
  },
];

export const CompetitionParticipants = () => {
  return (
    <Flex vertical gap="small">
      <CompetitionDetails />
      <div className={styles.content}>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </Flex>
  );
};
