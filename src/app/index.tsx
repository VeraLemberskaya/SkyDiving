import { App, ConfigProvider } from 'antd';

import { withProviders } from './providers';
import { Router } from './router';

ConfigProvider.config({
  theme: { token: { colorPrimary: '#004ab4' } },
});

export const MyApp = withProviders(() => {
  return (
    <ConfigProvider componentSize="middle">
      <App>
        <Router />
      </App>
    </ConfigProvider>
  );
});

export { MyApp as App };
