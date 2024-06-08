import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { getToken } from '@api/token';
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

const initialState: State = {
  isLogin: Boolean(getToken()),
  role: null,
};

export const useAuthStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    login: () =>
      set((state) => {
        state.isLogin = true;
      }),
    logout: () =>
      set((state) => {
        state.isLogin = false;
        state.role = null;
      }),
    setRole: (role) =>
      set((state) => {
        state.role = role;
      }),
  })),
);
