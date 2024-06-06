import { Select } from 'antd';

import { penaltyReasons } from './penalty-filling-out.config';

const { Option } = Select;

export const getPenaltySelectOptions = () => {
  return penaltyReasons.map((penalty) => (
    <Option key={penalty.value} value={penalty.value}>
      {penalty.label}
    </Option>
  ));
};
