import { MouseEventHandler } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

import { AcrobaticButtonProps } from '../../competition-list.types';

export const AcrobaticsButton = ({ competitionId }: AcrobaticButtonProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <Link
      key="acrobatics"
      to={{
        pathname: routes.COMPETITION_BY_ID(competitionId),
        search: new URLSearchParams({ activeTab: 'acrobatics' }).toString(),
      }}
    >
      <Button onClick={handleClick}>Акробатика</Button>
    </Link>
  );
};
