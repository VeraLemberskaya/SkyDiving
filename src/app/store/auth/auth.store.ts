import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { getToken } from '@api/token';

import { Actions, State } from './auth.types';

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
