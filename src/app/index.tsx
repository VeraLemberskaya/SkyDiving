import { ConfigProvider, ThemeConfig } from 'antd';
import ruRu from 'antd/locale/ru_RU';

import { withProviders } from './providers';
import { Router } from './router';

const theme: ThemeConfig = {
  token: { colorPrimary: '#004ab4', colorError: 'e53935' },
  components: {
    Layout: {
      headerBg: '#004ab4',
    },
  },
};

//TODO: add Error Boundary
export const App = withProviders(() => {
  return (
    <ConfigProvider componentSize="middle" locale={ruRu} theme={theme}>
      <Router />
    </ConfigProvider>
  );
});
