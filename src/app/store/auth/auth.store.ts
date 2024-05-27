import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Actions, State } from './auth.types';

//TODO: check after reload
const initialState: State = {
  isLogin: false,
  role: null,
};

export const useAuthStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    login: (role) =>
      set((state) => {
        state.isLogin = true;
        state.role = role;
      }),
    logout: () =>
      set((state) => {
        state.isLogin = false;
        state.role = null;
      }),
  })),
);
