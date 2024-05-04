import { Breadcrumb, Flex, Tabs, TabsProps, Typography } from 'antd';

import { PanelOfJudges } from '@modules/panel-of-judges';

import styles from './add-competition-judges.module.scss';
import { breadcrumbItems } from './add-competition-judges.config';

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

export const AddCompetitionJudges = () => {
  return (
    <Flex vertical gap="small">
      <Breadcrumb items={breadcrumbItems} />
      <Typography.Title level={4}>Чемпионат РБ</Typography.Title>
      <div className={styles.content}>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </Flex>
  );
};
