import {create} from "zustand";

const useStore = create((set) => ({
  items: [],
  showFilters: false,
  name: "",
  category: "",
  minPrice: "",
  maxPrice: "",
  material: [],
  colour: [],
  productLimit: 10, // Por defecto, puedes cambiarlo si es necesario
  currentPage: 1,
  orderType: "",
  order: "",

  setItems: (newItems) => set({ items: newItems }),
  setShowFilters: (value) => set({ showFilters: value }),
  setName: (value) => set({ name: value }),
  setCategory: (value) => set({ category: value }),
  setMinPrice: (value) => set({ minPrice: value }),
  setMaxPrice: (value) => set({ maxPrice: value }),
  setMaterial: (value) => set({ material: value }),
  setColour: (value) => set({ colour: value }),
  setProductLimit: (value) => set({ productLimit: value }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setOrderType: (value) => set({ orderType: value }),
  setOrder: (value) => set({ order: value }),
}));

export default useStore;
