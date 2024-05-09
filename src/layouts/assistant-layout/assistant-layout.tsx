import { Menu } from 'antd';
import { useMatch } from 'react-router-dom';

import { MainLayout } from '@layouts/main-layout';
import { routes } from '@constants/routes';

import { menuItems } from './assistant-layout.config';

export const AssistantLayout = () => {
  const matchesParticipants = useMatch(routes.PARTICIPANTS);
  const selectedKey = matchesParticipants ? 'participants' : 'competitions';

  return (
    <MainLayout
      menu={
        <Menu
          defaultSelectedKeys={[selectedKey]}
          items={menuItems}
          mode="inline"
        />
      }
    />
  );
};
