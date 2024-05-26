import { TrickAttempt } from '@api/mock-types';

import { PenaltyRow } from './penalty-row';

export const SPenalty = ({ trick }: { trick: TrickAttempt }) => {
  return (
    <PenaltyRow
      penaltyKey="sPenalty"
      penaltyTimeKey="sPenaltyTime"
      trick={trick}
    />
  );
};
