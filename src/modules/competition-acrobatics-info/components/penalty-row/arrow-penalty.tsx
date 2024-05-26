import { TrickAttempt } from '@api/mock-types';

import { PenaltyRow } from './penalty-row';

export const ArrowPenalty = ({ trick }: { trick: TrickAttempt }) => {
  return (
    <PenaltyRow
      penaltyKey="arrowPenalty"
      penaltyTimeKey="arrowPenaltyTime"
      trick={trick}
    />
  );
};
