import z from 'zod';

import { validationMessages } from '@constants/validation';

import { AddRefereeFormValues } from '../../panel-of-referees.types';

const { REQUIRED } = validationMessages;

export const defaultValues: AddRefereeFormValues = {
  workPerformed: '',
};

export const addRefereeSchema = z.object({
  refereeId: z.number({ required_error: REQUIRED }),
  workPerformed: z.string().min(1, REQUIRED),
});
