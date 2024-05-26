import { TrickAttempt } from '@api/mock-types';

import { PenaltyRow } from './penalty-row';

export const PlusMinusPenalty = ({ trick }: { trick: TrickAttempt }) => {
  return (
    <PenaltyRow
      penaltyKey="plusMinusPenalty"
      penaltyTimeKey="plusMinusPenaltyTime"
      trick={trick}
    />
  );
};
