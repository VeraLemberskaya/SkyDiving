import { ConfigProvider, ThemeConfig } from 'antd';
import ruRu from 'antd/locale/ru_RU';

const theme: ThemeConfig = {
  token: { colorPrimary: '#004ab4', colorError: '#e53935' },
  components: {
    Layout: {
      headerBg: '#004ab4',
    },
  },
};

export const WithTheme = (Component: () => React.ReactNode) => () => {
  return (
    <ConfigProvider componentSize="middle" locale={ruRu} theme={theme}>
      <Component />
    </ConfigProvider>
  );
};
