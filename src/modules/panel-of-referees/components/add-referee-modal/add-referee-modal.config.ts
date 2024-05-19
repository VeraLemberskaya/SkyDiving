import z from 'zod';

import { validationMessages } from '@constants/validation';

import { AddRefereeFormValues } from '../../panel-of-referees.types';

const { REQUIRED } = validationMessages;

export const defaultValues: AddRefereeFormValues = {
  work: '',
};

export const addRefereeSchema = z.object({
  refereeId: z.number({ required_error: REQUIRED }),
  work: z.string().min(1, REQUIRED),
});
