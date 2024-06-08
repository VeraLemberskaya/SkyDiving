import compose from 'compose-function';

import { WithRouter } from './with-router';
import { WithQuery } from './with-query';
import { WithTheme } from './with-theme';

export const withProviders = compose(WithTheme, WithRouter, WithQuery);
