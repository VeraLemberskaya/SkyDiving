import { Card, Flex, List, Select } from 'antd';

import {
  PenaltyItemProps,
  PenaltyTypes,
} from '../../penalty-filling-out.types';
import {
  HEADER_CARD_COLOR,
  HEADER_CARD_TEXT_COLOR,
} from '../../penalty-filling-out.config';

import styles from './penalty-item.module.scss';
import { getAngleSelectOptions, getPenaltyLabel } from './penalty-item.lib';

export const PenaltyItem = ({ penalty, onSelect }: PenaltyItemProps) => {
  const { title, types } = penalty;

  const handleAngleSelect = (type: PenaltyTypes) => (value: number) => {
    onSelect(title, type, value);
  };

  return (
    <List.Item>
      <Card
        styles={{
          header: {
            backgroundColor: HEADER_CARD_COLOR,
            color: HEADER_CARD_TEXT_COLOR,
          },
        }}
        title={title}
      >
        <Flex gap={4} justify="center" wrap="wrap">
          {types.map((type, index) => (
            <Card
              className={styles.card}
              key={index}
              size="small"
              title={getPenaltyLabel(type)}
              type="inner"
            >
              <Select
                allowClear
                className={styles.card_select}
                placeholder="Выбрать"
                onChange={handleAngleSelect(type)}
              >
                {getAngleSelectOptions(type)}
              </Select>
            </Card>
          ))}
        </Flex>
      </Card>
    </List.Item>
  );
};
