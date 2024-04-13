import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useFavoriteStore = create(
  devtools(
    persist((set) => ({
      favorites: [], // Estado inicial de favoritos
      addToFavorites: (product) =>
        set((state) => ({ favorites: [...state.favorites, product] })), // Función para agregar un producto a favoritos
      removeFromFavorites: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter((product) => product.id !== productId),
        })), // Función para eliminar un producto de favoritos
      clearFavorites: () => set({ favorites: [] }), // Función para borrar todos los favoritos
    }), {
      name: "favorites-storage", // Nombre del almacenamiento persistente
      getStorage: () => localStorage, // Almacenamiento en localStorage
    })
  )
);

export default useFavoriteStore;

