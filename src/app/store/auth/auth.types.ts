import { Role } from '@api/types';

export interface State {
  isLogin: boolean;
  role: Role | null;
}

export interface Actions {
  login: (role: Role) => void;
  logout: () => void;
}
