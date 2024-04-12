import { create } from 'zustand';

export const useMenuStore = create((set) => ({
  womenMenuOpen: false,
  menMenuOpen: false,
  aboutMenuOpen: false,
  cartMenuOpen: false,
  favoritesMenuOpen: false,
  toggleWomenMenu: () => set((state) => ({ womenMenuOpen: !state.womenMenuOpen })),
  toggleMenMenu: () => set((state) => ({ menMenuOpen: !state.menMenuOpen })),
  toggleAboutMenu: () => set((state) => ({ aboutMenuOpen: !state.aboutMenuOpen })),
  toggleCartMenu: () => set((state) => ({ cartMenuOpen: !state.cartMenuOpen })),
  toggleFavoritesMenu: () => set((state) => ({ favoritesMenuOpen: !state.favoritesMenuOpen })),
}));







