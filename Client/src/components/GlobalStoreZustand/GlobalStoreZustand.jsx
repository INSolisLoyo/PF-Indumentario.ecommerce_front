import { create } from "zustand";

const useStore = create((set) => ({
  items: [],
  totalItems: 10,
  showFilters: false,
  name: "",
  category: "",
  minPrice: "",
  maxPrice: "",
  material: [],
  colour: [],
  currentPage: 1,
  orderType: "",
  order: "",

  setItems: (newItems) => set({ items: newItems }),
  setTotalItems: (count) => set({ totalItems: count }),
  setShowFilters: (value) => set({ showFilters: value }),
  setName: (value) => set({ name: value, currentPage: 1 }),
  setCategory: (value) => set({ category: value, currentPage: 1 }),
  setMinPrice: (value) => set({ minPrice: value, currentPage: 1 }),
  setMaxPrice: (value) => set({ maxPrice: value, currentPage: 1 }),
  setMaterial: (value) => set({ material: value, currentPage: 1 }),
  setColour: (value) => set({ colour: value, currentPage: 1 }),
  setOrderType: (value) => set({ orderType: value, currentPage: 1 }),
  setOrder: (value) => set({ order: value, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useStore;





// import { create } from "zustand";

// const useStore = create((set) => ({
//   items: [],
//   totalItems: 10, // Agregar totalItems al estado
//   showFilters: false,
//   name: "",
//   category: "",
//   minPrice: "",
//   maxPrice: "",
//   material: [],
//   colour: [],
//   currentPage: 1,
//   orderType: "",
//   order: "",

//   setItems: (newItems) => set({ items: newItems }),
//   setTotalItems: (count) => set({ totalItems: count }), // Agregar setTotalItems
//   setShowFilters: (value) => set({ showFilters: value }),
//   setName: (value) => set({ name: value }),
//   setCategory: (value) => set({ category: value }),
//   setMinPrice: (value) => set({ minPrice: value }),
//   setMaxPrice: (value) => set({ maxPrice: value }),
//   setMaterial: (value) => set({ material: value }),
//   setColour: (value) => set({ colour: value }),
//   setCurrentPage: (page) => set({ currentPage: page }),
//   setOrderType: (value) => set({ orderType: value }),
//   setOrder: (value) => set({ order: value }),
// }));

// export default useStore;

