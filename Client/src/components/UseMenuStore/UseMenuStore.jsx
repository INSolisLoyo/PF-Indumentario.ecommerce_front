import {create} from 'zustand';

const useMenuMenStore = create((set) => ({
  isOpen: false,
  toggleMenuMen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useMenuWomenStore = create((set) => ({
  isOpen: false,
  toggleMenuWomen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useMenuStoreStore = create((set) => ({
  isOpen: false,
  toggleMenuStore: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const useMenuAboutStore = create((set) => ({
  isOpen: false,
  toggleMenuAbout: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export {useMenuMenStore, useMenuWomenStore, useMenuStoreStore, useMenuAboutStore};
