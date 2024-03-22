import {create} from 'zustand';

const useMenuMenStore = create((set) => ({
  isOpen: false,
  toggleMenuMen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useMenuWomenStore = create((set) => ({
  isOpen: false,
  toggleMenuWomen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useMenuAccesoriesStore = create((set) => ({
  isOpen: false,
  toggleMenuAccesories: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useMenuAboutStore = create((set) => ({
  isOpen: false,
  toggleMenuAbout: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export {useMenuMenStore, useMenuWomenStore, useMenuAccesoriesStore, useMenuAboutStore};
