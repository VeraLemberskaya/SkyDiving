import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';

import { withProviders } from './providers';
import { Router } from './router';

dayjs.extend(weekday);
dayjs.extend(localeData);

//TODO: add Error Boundary
export const App = withProviders(() => {
  return <Router />;
});
