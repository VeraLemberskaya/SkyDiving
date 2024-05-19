import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Actions, State } from './manage-referees.types';

const initialState: State = {
  modal: {
    isOpen: false,
    type: 'add',
  },
  filter: null,
};

export const useManageRefereesStore = create<State & Actions>()(
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
    setRefereeId: (id) =>
      set((state) => {
        state.refereeId = id;
      }),
    setFilter: (filter) =>
      set((state) => {
        state.filter = filter;
      }),
    setSearch: (value) =>
      set((state) => {
        state.search = value;
      }),
  })),
);
