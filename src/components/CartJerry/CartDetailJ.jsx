import React from "react";
import useCartStore from "../GlobalStoreZustand/useCartStore";

const CartDetailJ = () => {
  const { cart } = useCartStore(); // Obtener el estado del carrito desde el estado global

  return (
    <div className='flex-col justify-center text-center p-48'>
      <h2>Cart Detail</h2>
      {console.log({cart})}
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>Price: ${product.price}</div>
            <div>Quantity: {product.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDetailJ;

