import { Penalty, PenaltyTypes } from './penalty-filling-out.types';

export const dataConfig: Penalty[] = [
  {
    title: '1 спираль',
    types: [
      PenaltyTypes.arrowPenalty,
      PenaltyTypes.dPenalty,
      PenaltyTypes.minusPenalty,
    ],
  },
  {
    title: '2 спираль',
    types: [PenaltyTypes.dPenalty, PenaltyTypes.minusPenalty],
  },
  {
    title: '1 сальто',
    types: [PenaltyTypes.dPenalty, PenaltyTypes.plusMinusPenalty],
  },
  {
    title: '3 спираль',
    types: [
      PenaltyTypes.arrowPenalty,
      PenaltyTypes.dPenalty,
      PenaltyTypes.minusPenalty,
    ],
  },
  {
    title: '4 спираль',
    types: [PenaltyTypes.dPenalty, PenaltyTypes.minusPenalty],
  },
  {
    title: '2 сальто',
    types: [
      PenaltyTypes.dPenalty,
      PenaltyTypes.plusMinusPenalty,
      PenaltyTypes.sPenalty,
    ],
  },
];

export const regularAngles = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '15', value: 15 },
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '30', value: 30 },
  { label: '35', value: 35 },
  { label: '40', value: 40 },
  { label: '45', value: 45 },
  { label: '50', value: 50 },
  { label: '55', value: 55 },
  { label: '60', value: 60 },
  { label: '65', value: 65 },
  { label: '70', value: 70 },
  { label: '75', value: 75 },
  { label: '80', value: 80 },
  { label: '85', value: 85 },
  { label: '90', value: 90 },
  { label: '>90', value: 100 },
];

export const specialAngles = [
  { label: '31-60', value: 40 },
  { label: '61-90', value: 70 },
  { label: '>90', value: 100 },
];

export const HEADER_CARD_COLOR = '#004ab4a6';
export const HEADER_CARD_TEXT_COLOR = '#ffffff';

export const titleMapping: { [key: string]: string } = {
  '1 спираль': '1_TURN',
  '2 спираль': '2_TURN',
  '1 сальто': '1_BACK_LOOP',
  '3 спираль': '3_TURN',
  '4 спираль': '4_TURN',
  '2 сальто': '2_BACK_LOOP',
};

export const initialState = {
  '1_TURN': {
    arrowPenalty: 0,
    dPenalty: 0,
    minusPenalty: 0,
  },
  '2_TURN': {
    dPenalty: 0,
    minusPenalty: 0,
  },
  '1_BACK_LOOP': {
    dPenalty: 0,
    plusMinusPenalty: 0,
  },
  '3_TURN': {
    arrowPenalty: 0,
    dPenalty: 0,
    minusPenalty: 0,
  },
  '4_TURN': {
    dPenalty: 0,
    minusPenalty: 0,
  },
  '2_BACK_LOOP': {
    dPenalty: 0,
    plusMinusPenalty: 0,
    sPenalty: 0,
  },
};
