//TODO: temporary here

export interface Participant {
  id: number;
  fullName: string;
}

export interface Team {
  id: number;
  name: string;
  participants: Participant[];
}

export interface JudgeDataType {
  key: string;
  serialNumber: number;
  work: string;
  fullName: string;
  category: string;
}
