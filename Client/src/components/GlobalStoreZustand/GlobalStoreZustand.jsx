import { create } from "zustand";

const useStore = create((set) => ({
  items: [],
  totalItems: 10,
  showFilters: false,
  name: "",
  gender: "",
  minPrice: "",
  maxPrice: "",
  material: [],
  colour: [],
  currentPage: 1,
  orderType: "",
  order: "",
  registeredUser: false,
  user: {
    id: '',
    name: '',
    lastname: '',
    dob: '',
    email: '',
    password: '',
    isAdmin: '',
    isActive: ''
  },

  // Agregar la función fetchData al estado del store
  fetchData: () => {},

  // Definir una función para actualizar fetchData
  setFetchData: (fetchDataFunc) => set({ fetchData: fetchDataFunc }),

  setItems: (newItems) => set({ items: newItems }),
  setTotalItems: (count) => set({ totalItems: count }),
  setShowFilters: (value) => set({ showFilters: value }),
  setName: (value) => set({ name: value, currentPage: 1 }),
  setGender: (value) => set({ gender: value, currentPage: 1 }),
  setMinPrice: (value) => set({ minPrice: value, currentPage: 1 }),
  setMaxPrice: (value) => set({ maxPrice: value, currentPage: 1 }),
  setMaterial: (value) => set({ material: value, currentPage: 1 }),
  setColour: (value) => set({ colour: value, currentPage: 1 }),
  setOrderType: (value) => set({ orderType: value, currentPage: 1 }),
  setOrder: (value) => set({ order: value, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setCurrentUser: (currentUser) => set({ user: currentUser }),
  setRegisteredUser: (isRegistered) => set({ registeredUser: isRegistered})
}));

export default useStore;