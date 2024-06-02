import { Button, Flex, Radio, Space, Typography } from 'antd';

import { selectOptions } from '../../time-refereeing.config';
import { TimerTypeSelectProps } from '../../time-refereeing.types';

import styles from './timer-type-select.module.scss';

export const TimerTypeSelect = ({
  type,
  onContinue,
  onTimerTypeChange,
}: TimerTypeSelectProps) => {
  return (
    <>
      <Typography.Title level={5}>Выберите тип секундомера:</Typography.Title>
      <Flex vertical gap={50}>
        <Radio.Group onChange={onTimerTypeChange}>
          <Space direction="vertical">
            {selectOptions.map((option) => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
        <Button
          className={styles.button}
          disabled={!type}
          type="primary"
          onClick={onContinue}
        >
          Продолжить
        </Button>
      </Flex>
    </>
  );
};
