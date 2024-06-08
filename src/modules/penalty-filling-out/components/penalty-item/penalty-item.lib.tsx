import { Select } from 'antd';

import { PenaltyTypes } from '../../penalty-filling-out.types';
import { regularAngles, specialAngles } from '../../penalty-filling-out.config';

export const getPenaltyLabel = (type: PenaltyTypes) => {
  switch (type) {
    case PenaltyTypes.arrowPenalty:
      return '🡕';
    case PenaltyTypes.dPenalty:
      return 'D';
    case PenaltyTypes.minusPenalty:
      return '-';
    case PenaltyTypes.plusMinusPenalty:
      return '+/-';
    case PenaltyTypes.sPenalty:
      return 'S';
  }
};

const { Option } = Select;

export const getAngleSelectOptions = (type: PenaltyTypes) => {
  let options = [];

  if (
    type === PenaltyTypes.arrowPenalty ||
    type === PenaltyTypes.minusPenalty
  ) {
    options = regularAngles.map((angle) => (
      <Option key={angle.value} value={angle.value}>
        {angle.label}
      </Option>
    ));
  } else {
    options = specialAngles.map((angle) => (
      <Option key={angle.value} value={angle.value}>
        {angle.label}
      </Option>
    ));
  }

  return options;
};
