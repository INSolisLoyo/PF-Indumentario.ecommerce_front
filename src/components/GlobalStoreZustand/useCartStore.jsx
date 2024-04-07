// useCartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [], // Array de objetos { product, quantity }
  addToCart: (product) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === product.id && item.product.color === product.color && item.product.size === product.size
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity++;
        return { cart: updatedCart };
      }

      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.product.id !== productId);
      return { cart: updatedCart };
    }),
  increaseQuantity: (productId) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === productId
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity++;
        return { cart: updatedCart };
      }

      return state;
    }),
  decreaseQuantity: (productId) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === productId
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingProductIndex].quantity > 1) {
          updatedCart[existingProductIndex].quantity--;
          return { cart: updatedCart };
        }
      }

      return state;
    }),
  clearCart: () => set({ cart: [] }),
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export default useCartStore;