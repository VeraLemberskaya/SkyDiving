import { useState } from 'react';

import { PenaltyList } from './components/penalty-list';
import {
  dataConfig,
  initialState,
  titleMapping,
} from './penalty-filling-out.config';
import { PenaltyTypes } from './penalty-filling-out.types';

export const PenaltyFillingOut = () => {
  const [penalties, setPenalties] = useState<{
    [key: string]: { [key in PenaltyTypes]?: number };
  }>(initialState);

  const handlePenaltySelect = (
    title: string,
    type: PenaltyTypes,
    angle: number,
  ) => {
    const key = titleMapping[title];

    setPenalties((prevPenalties) => ({
      ...prevPenalties,
      [key]: {
        ...prevPenalties[key],
        [type]: angle,
      },
    }));
  };

  return (
    <PenaltyList
      dataConfig={dataConfig}
      onPenaltySelect={handlePenaltySelect}
    />
  );
};
