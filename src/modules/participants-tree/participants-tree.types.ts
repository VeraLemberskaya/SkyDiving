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

export interface ParticipantNodeProps {
  participant: Participant;
}

export interface TreeHeaderProps {
  title: string;
}
