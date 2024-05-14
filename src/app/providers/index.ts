import compose from 'compose-function';

import { WithRouter } from './with-router';
import { WithQuery } from './with-query';

export const withProviders = compose(WithRouter, WithQuery);
