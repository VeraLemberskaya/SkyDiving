import { BrowserRouter } from 'react-router-dom';

const WithRouter = (Component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
};

export default WithRouter;
