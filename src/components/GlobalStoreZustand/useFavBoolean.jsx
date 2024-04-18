// useFavBoolean.js
import create from "zustand";
import useFavoriteStore from "./useFavoriteStore";

const useFavBoolean = create((set) => ({
  isFavorite: false,
  setIsFavorite: (value) => set({ isFavorite: value }),
  addToFavorites: useFavoriteStore.getState().addToFavorites,
}));

export default useFavBoolean;

