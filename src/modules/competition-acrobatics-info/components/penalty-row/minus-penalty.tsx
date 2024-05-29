import { TrickAttempt } from '@api/mock-types';

import { PenaltyRow } from './penalty-row';

export const MinusPenalty = ({ trick }: { trick: TrickAttempt }) => {
  return (
    <PenaltyRow
      penaltyKey="minusPenalty"
      penaltyTimeKey="minusPenaltyTime"
      trick={trick}
    />
  );
};
