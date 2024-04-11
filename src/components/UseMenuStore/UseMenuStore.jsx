import { create } from 'zustand';

export const useMenuStore = create((set) => ({
  womenMenuOpen: false,
  menMenuOpen: false,
  aboutMenuOpen: false,
  cartMenuOpen: true, // Nuevo estado para controlar la visibilidad de CartMenu
  toggleWomenMenu: () => set((state) => ({ womenMenuOpen: !state.womenMenuOpen })),
  toggleMenMenu: () => set((state) => ({ menMenuOpen: !state.menMenuOpen })),
  toggleAboutMenu: () => set((state) => ({ aboutMenuOpen: !state.aboutMenuOpen })),
  toggleCartMenu: () => set((state) => ({ cartMenuOpen: !state.cartMenuOpen })), // Función para alternar la visibilidad de CartMenu
}));








