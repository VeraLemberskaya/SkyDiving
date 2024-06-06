import { List } from 'antd';

import { PenaltyListProps } from '../../penalty-filling-out.types';
import { PenaltyItem } from '../penalty-item';

export const PenaltyList = ({ dataConfig, onSelect }: PenaltyListProps) => {
  return (
    <List
      dataSource={dataConfig}
      grid={{ gutter: 16, column: 3 }}
      renderItem={(item) => <PenaltyItem penalty={item} onSelect={onSelect} />}
    />
  );
};
