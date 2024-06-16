import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Actions, State } from './manage-sportsmen.types';

const initialState: State = {
  modal: {
    isOpen: false,
    type: 'add',
  },
  sportsmanId: undefined,
  search: undefined,
  filter: null,
  page: 1
};

export const useManageSportsmenStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    openModal: (type) =>
      set((state) => {
        state.modal.isOpen = true;
        state.modal.type = type;
      }),
    closeModal: () =>
      set((state) => {
        state.modal.isOpen = false;
      }),
    setSportsmanId: (id) =>
      set((state) => {
        state.sportsmanId = id;
      }),
    setFilter: (filter) =>
      set((state) => {
        state.filter = filter;
      }),
    setSearch: (value) =>
      set((state) => {
        state.search = value;
      }),
    setPage: (page) => set((state) => {
      state.page = page;
    })
  })),
);
