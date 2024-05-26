import { TrickAttempt } from '@api/mock-types';

import { PenaltyRow } from './penalty-row';

export const DPenalty = ({ trick }: { trick: TrickAttempt }) => {
  return (
    <PenaltyRow
      penaltyKey="dPenalty"
      penaltyTimeKey="dPenaltyTime"
      trick={trick}
    />
  );
};
