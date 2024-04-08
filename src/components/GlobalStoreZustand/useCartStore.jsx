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

      return { cart: [...state.cart, { product, quantity: product.quantity }] }; // Utiliza la cantidad del producto seleccionado
    }),
  removeFromCart: (productId, color, size) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) => !(item.product.id === productId && item.product.color === color && item.product.size === size)
      );
      return { cart: updatedCart };
    }),
  increaseQuantity: (productId, color, size) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === productId && item.product.color === color && item.product.size === size
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity++;
        return { ...state, cart: updatedCart };
      }

      return state;
    }),
  decreaseQuantity: (productId, color, size) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === productId && item.product.color === color && item.product.size === size
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingProductIndex].quantity > 1) {
          updatedCart[existingProductIndex].quantity--;
          return { ...state, cart: updatedCart };
        }
      }

      return state;
    }),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;