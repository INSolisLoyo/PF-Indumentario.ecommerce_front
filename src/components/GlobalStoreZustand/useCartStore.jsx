import {create} from 'zustand';

// Definición del estado inicial del carrito
const initialState = {
  cart: [],
};

// Crea el hook de estado global para el carrito de compras
const useCartStore = create((set) => ({
  ...initialState,
  // Función para agregar un producto al carrito
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  // Función para eliminar un producto del carrito
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  // Función para vaciar el carrito por completo
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
