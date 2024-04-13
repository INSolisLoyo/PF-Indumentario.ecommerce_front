// GlobalStoreZustand.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(persist((set) => ({
  // Estado del carrito
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),

  // Global
  items: [],
  totalItems: 10,
  showFilters: false,
  name: "",
  gender: "",
  minPrice: 0,
  maxPrice: 400,
  material: [],
  colour: [],
  currentPage: 1,
  orderType: "",
  order: "",
  materialsOptions: [],
  coloursOptions: [],
  setMaterialsOptions: (options) => set({ materialsOptions: options }),
  setColoursOptions: (options) => set({ coloursOptions: options }),
  selectedMaterial: [],
  setSelectedMaterial: (selectedMaterial) => set({ selectedMaterial }),
  selectedColour: [],
  setSelectedColour: (selectedColour) => set({ selectedColour }),
  priceRange: [0, 400],
  setPriceRange: (priceRange) => set({ priceRange }),
  fetchData: () => {}, // Función fetchData inicial
  setFetchData: (fetchDataFunc) => set({ fetchData: fetchDataFunc }), // Función para actualizar fetchData
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

  // Login Usuarios
  setCurrentPage: (page) => set({ currentPage: page }),
  setCurrentUser: (currentUser) => set({ user: currentUser }),
  setRegisteredUser: (isRegistered) => set({ registeredUser: isRegistered }),
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
}), {
  name: 'session-storage', // Nombre del almacenamiento persistente
  getStorage: () => sessionStorage, // Almacenamiento en sessionStorage
}));

export default useStore;
