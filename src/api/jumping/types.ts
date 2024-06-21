export interface GetJumpingListParams {
  competitionId: number;
  skydiverId: number;
}

export interface GetNextJumpingNumberParams {
  competitionId: number;
  skydiverId: number;
}

export interface DeleteJumpingParams {
  jumpingId: number;
  competitionId: number;
}

export interface Jumping {
  id: number;
  number: number;
  accuracy: number;
  performanceDate: string;
}

export interface CompetitionMemberJumpingResponse {
  competitionId: number;
  skydiverId: number;
  competitionMemberId: number;
  jumping: Jumping[];
}

export interface NextJumpingNumberResponse {
  nextJumpingNumber: number;
  isLimitReached: boolean;
}

export interface AddJumpingRequest {
  accuracy: number;
  memberNumber: number;
  jumpingNumber: number;
  performanceDate: string;
}

export interface UpdateJumpingRequest {
  id: number;
  accuracy: number;
  memberNumber: number;
  performanceDate: string;
}
