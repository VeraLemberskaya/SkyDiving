import z from 'zod';

import { validationMessages } from '@constants/validation';

import { AddJudgeFormValues } from '../../panel-of-judges.types';

export const defaultValues: AddJudgeFormValues = {
  work: '',
};

export const addJudgeSchema = z.object({
  judgeId: z.number({ required_error: validationMessages.REQUIRED }),
  work: z.string().min(1, validationMessages.REQUIRED),
});
