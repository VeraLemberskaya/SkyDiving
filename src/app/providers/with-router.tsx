import { BrowserRouter } from 'react-router-dom';

export const WithRouter = (Component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
};
