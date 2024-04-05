import React from 'react';
import useCartStore from '../GlobalStoreZustand/useCartStore';

const CartJ = () => {
  // Obtener el estado del carrito de compras y las funciones para manipularlo
  const { cart, removeFromCart, clearCart } = useCartStore();

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className='flex-col justify-center text-center p-48'>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={() => alert('Checkout functionality coming soon!')}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartJ;