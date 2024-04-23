import { ConfigProvider, ThemeConfig } from 'antd';

import { withProviders } from './providers';
import { Router } from './router';

const theme: ThemeConfig = {
  token: { colorPrimary: '#004ab4' },
  components: {
    Layout: {
      headerBg: '#004ab4',
    },
  },
};

export const MyApp = withProviders(() => {
  return (
    <ConfigProvider componentSize="middle" theme={theme}>
      <Router />
    </ConfigProvider>
  );
});

export { MyApp as App };
