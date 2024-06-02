import { List } from 'antd';

import { Penalty, PenaltyTypes } from '../../penalty-filling-out.types';
import { PenaltyItem } from '../penalty-item';

interface PenaltyListProps {
  dataConfig: Penalty[];
  onPenaltySelect: (title: string, type: PenaltyTypes, angle: number) => void;
}

export const PenaltyList = ({
  dataConfig,
  onPenaltySelect,
}: PenaltyListProps) => {
  return (
    <List
      dataSource={dataConfig}
      grid={{ gutter: 16, column: 3 }}
      renderItem={(item) => (
        <PenaltyItem penalty={item} onPenaltySelect={onPenaltySelect} />
      )}
    />
  );
};
