import { Role } from '@api/types';

export interface State {
  isLogin: boolean;
  role: Role | null;
}

export interface Actions {
  login: () => void;
  logout: () => void;
  setRole: (role: Role) => void;
}
