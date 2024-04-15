import { create } from 'zustand'; // Importa la función create de la biblioteca zustand
import { persist } from 'zustand/middleware'; // Importa la función persist del middleware de zustand
import { devtools } from 'zustand/middleware'; // Importa la función devtools del middleware de zustand

// Crea un store de React llamado useCartStore
const useCartStore = create(devtools(persist((set) => ({
  cart: [], // Estado inicial: un array de objetos que representa el carrito de compras
  addToCart: (product) => // Acción para agregar un producto al carrito
    set((state) => {
      // Busca si el producto ya está en el carrito
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === product.id && 
                   item.product.color === product.color && 
                   item.product.size === product.size
      );

      if (existingProductIndex !== -1) { // Si el producto ya está en el carrito
        const updatedCart = [...state.cart]; // Crea una copia del carrito actual
        updatedCart[existingProductIndex].quantity++; // Incrementa la cantidad del producto
        return { cart: updatedCart }; // Devuelve el nuevo estado del carrito
      }

      // Si el producto no está en el carrito, lo agrega con una cantidad inicial
      return { cart: [...state.cart, { product, quantity: product.quantity }] };
    }),
  removeFromCart: (productId, color, size) => // Acción para eliminar un producto del carrito
    set((state) => {
      // Filtra el carrito para eliminar el producto que coincida con el ID, color y tamaño proporcionados
      const updatedCart = state.cart.filter(
        (item) => !(item.product.id === productId && 
                    item.product.color === color && 
                    item.product.size === size)
      );
      return { cart: updatedCart }; // Devuelve el nuevo estado del carrito sin el producto eliminado
    }),
  increaseQuantity: (productId, color, size) => // Acción para incrementar la cantidad de un producto en el carrito
    set((state) => {
      // Busca el índice del producto en el carrito
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === productId && 
                   item.product.color === color && 
                   item.product.size === size
      );

      if (existingProductIndex !== -1) { // Si el producto está en el carrito
        const updatedCart = [...state.cart]; // Crea una copia del carrito actual
        updatedCart[existingProductIndex].quantity++; // Incrementa la cantidad del producto
        return { ...state, cart: updatedCart }; // Devuelve el nuevo estado del carrito
      }

      return state; // Si el producto no está en el carrito, devuelve el estado actual
    }),
  decreaseQuantity: (productId, color, size) => // Acción para decrementar la cantidad de un producto en el carrito
    set((state) => {
      // Busca el índice del producto en el carrito
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === productId && 
                   item.product.color === color && 
                   item.product.size === size
      );

      if (existingProductIndex !== -1) { // Si el producto está en el carrito
        const updatedCart = [...state.cart]; // Crea una copia del carrito actual
        if (updatedCart[existingProductIndex].quantity > 1) { // Si la cantidad es mayor que 1
          updatedCart[existingProductIndex].quantity--; // Decrementa la cantidad del producto
          return { ...state, cart: updatedCart }; // Devuelve el nuevo estado del carrito
        }
      }

      return state; // Si la cantidad es 1 o el producto no está en el carrito, devuelve el estado actual
    }),

  clearCart: () => set({ cart: [] }), // Acción para vaciar el carrito
}), {
  name: 'cart-storage', // Nombre del almacenamiento persistente
  getStorage: () => localStorage, // Utiliza el almacenamiento local para persistir el estado
})));

export default useCartStore; // Exporta el store useCartStore

