import React from "react";
import useCartStore from "../../GlobalStoreZustand/useCartStore"; // Importa el hook del estado del carrito
import DeleteIcon from "@material-ui/icons/Delete";

const CartMenu = ({ onClose }) => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  const handleIncreaseQuantity = (productId, color, size) => {
    increaseQuantity(productId, color, size);
  };

  const handleDecreaseQuantity = (productId, color, size) => {
    decreaseQuantity(productId, color, size);
  };

  const handleRemoveProduct = (productId, color, size) => {
    removeFromCart(productId, color, size);
  };

  // Calcula el total de productos en el carrito
  const totalProducts = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  // Calcula el valor total de la suma de todos los precios de los productos en el carrito
  const totalPrice = cart
    .reduce((total, product) => {
      return total + product.product.price * product.quantity;
    }, 0)
    .toFixed(2); // Formatea el valor a dos cifras después del punto decimal

  return (
    <div className=" divide-gray-400 cart-menu bg-gray-200 right-4 top-full p-6 shadow-lg absolute z-50 max-h-[450px] overflow-y-auto">
      <h2 className="text-xl text-center font-semibold mb-4">Shopping Cart</h2>

      <hr />
      {cart.length === 0 ? (
        <p className="text-center pt-6 text-gray-700">No products added</p>
      ) : (
        <div className="divide-y divide-gray-400">
          {cart.map((product, index) => (
            <ul
              key={index} // Usa el índice como clave si no tienes una clave única en los datos
              className="py-6 flex gap-8 justify-between items-center"
            >
              <li>
                <img
                  className="w-16 h-20"
                  src={product.product.images}
                  alt=""
                />
              </li>
              <li>
                <div>
                  <h3 className="text-lg font-semibold">
                    {product.product.name}
                  </h3>
                  <h2 className="text-lg font-semibold">
                    $ {product.product.price}
                  </h2>
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-700">
                      <b>Amount:</b> {product.quantity}
                    </span>
                    <span className="text-sm text-gray-700">
                      <b>Size:</b> {product.product.size}
                    </span>
                    <span className="text-sm text-gray-700">
                      <b>Color:</b> {product.product.color}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-1 items-center space-x-2">
                  <button
                    onClick={() =>
                      handleDecreaseQuantity(
                        product.product.id,
                        product.product.color,
                        product.product.size
                      )
                    }
                    className="text-2xl font-semibold text-red-500 focus:outline-none"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      handleIncreaseQuantity(
                        product.product.id,
                        product.product.color,
                        product.product.size
                      )
                    }
                    className="text-2xl font-semibold text-green-700 focus:outline-none"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      handleRemoveProduct(
                        product.product.id,
                        product.product.color,
                        product.product.size
                      )
                    }
                    className="font-semibold text-red-500 focus:outline-none"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      )}

      {/* Muestra el valor total solo si hay productos en el carrito */}
      {cart.length > 0 && (
        <>
          <hr />
          <p className="text-lg mt-2">Total Products: {totalProducts}</p>
          <p className="text-lg font-semibold ">Total Price: $ {totalPrice}</p>
        </>
      )}
      <button
        onClick={onClose}
        className="flex mt-6 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
      >
        Close
      </button>
    </div>
  );
};

export default CartMenu;