import z from 'zod';

import { validationMessages } from '@constants/validation';

import { AddJudgeFormValues } from '../../panel-of-judges.types';

const { REQUIRED } = validationMessages;

export const defaultValues: AddJudgeFormValues = {
  work: '',
};

export const addJudgeSchema = z.object({
  judgeId: z.number({ required_error: REQUIRED }),
  work: z.string().min(1, REQUIRED),
});
