import React, { useEffect } from "react";
import useCartStore from "../../GlobalStoreZustand/useCartStore";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";

const CartMenu = () => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const cart = useCartStore((state) => state.cart);
  const { cartMenuOpen, toggleCartMenu } = useMenuStore();

  const handleClick = () => {
    toggleCartMenu();
  };

  const totalProducts = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  const totalPrice = cart
    .reduce((total, product) => {
      return total + product.product.price * product.quantity;
    }, 0)
    .toFixed(2);

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (cartMenuOpen && !event.target.closest(".cart-menu")) {
        if (cart.length > 0) {
          toggleCartMenu();
        }
      }
    };

    document.body.addEventListener("click", handleCloseMenu);

    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
    };
  }, [cartMenuOpen, toggleCartMenu, cart]);

  const handleIncreaseQuantity = (product) => {
    const maxItems = product.product.stock;

    if (product.quantity < maxItems) {
      increaseQuantity(
        product.product.id,
        product.product.color,
        product.product.size
      );
    }
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      decreaseQuantity(
        product.product.id,
        product.product.color,
        product.product.size
      );
    }
  };

  return (
    <div className="cart-menu">
      <div className="relative flex items-center" onClick={handleClick}>
        <ShoppingCartIcon
          style={{ fontSize: 35 }}
          className="text-2xl cursor-pointer"
        />
        {totalProducts > 0 && (
          <div className="absolute top-0 right-0 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs">
            {totalProducts}
          </div>
        )}
      </div>

      {cartMenuOpen && (
        <div className="divide-y divide-gray-400 bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[450px] max-h-[500px] overflow-y-auto rounded-lg">
          <div className="flex justify-center items-center">
            <div className="w-[40px]"></div>
            <h2 className="text-center text-xl font-bold py-4 w-[75%]">
              Shopping Cart
            </h2>
            <div className="w-[40px]">
              <CloseIcon
                style={{ fontSize: 30, marginLeft: 10, cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCartMenu();
                }}
              />
            </div>
          </div>
          {cart.length === 0 ? (
            <div className="empty-cart text-center py-8">
              <div className="text-gray-400">
                <ShoppingCartIcon style={{ fontSize: 100 }} />
              </div>
              <p className="empty-cart-text text-lg font-semibold mt-4">
                Your cart is empty
              </p>
            </div>
          ) : (
            <>
              {cart.map((product, index) => (
                <div
                  key={index}
                  className="py-6 grid grid-cols-5 gap-2 items-center"
                >
                  <div className="flex justify-center col-span-1 pl-2">
                    <img
                      className="w-16 h-20 object-cover"
                      src={product.product.images}
                      alt={product.product.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between col-span-3">
                    <div>
                      <h3 className="text-lg font-bold">
                        {product.product.name}
                      </h3>
                      <h2 className="text-base font-semibold">
                        <b>Price:</b> ${product.product.price}
                      </h2>
                    </div>
                    <div className="flex-col gap-4 justify-center items-center">
                      <div className="flex gap-4 justify-center items-center">
                        <p className="text-base">
                          <b>Size:</b> {product.product.size}
                        </p>
                        <p className="text-base">
                          <b>Color:</b> {product.product.color}
                        </p>
                      </div>

                      <div>
                        {product.product.stock <= 5 && ( // Mostrar el stock si es menor o igual a 5
                          <p className="text-base text-red-500">
                            <b>Stock: </b>Only {product.product.stock} available
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-col items-center justify-center col-span-1 pr-3">
                    <div className="grid grid-cols-3 justify-center items-center text-center">
                      <button
                        onClick={() => handleDecreaseQuantity(product)}
                        className={`text-2xl font-semibold text-red-500 focus:outline-none ${
                          product.quantity === 1
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={product.quantity === 1}
                      >
                        -
                      </button>
                      <label className="flex justify-center w-[20px] text-center text-base font-bold">
                        {product.quantity}
                      </label>
                      <button
                        onClick={() => handleIncreaseQuantity(product)}
                        className={`text-2xl font-semibold text-green-700 focus:outline-none ${
                          product.quantity === product.product.stock
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={product.quantity === product.product.stock}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          removeFromCart(
                            product.product.id,
                            product.product.color,
                            product.product.size
                          )
                        }
                        className="text-red-500 focus:outline-none"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cart-summary text-center py-4">
                <p className="total-products text-base font-semibold">
                  Total Products: {totalProducts}
                </p>
                <p className="total-price text-lg font-bold">
                  Total Price: ${totalPrice}
                </p>
              </div>
              <div className="flex justify-around text-center py-4">
                <button
                  onClick={() => {
                    clearCart();
                    toggleCartMenu();
                  }}
                  className="flex mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
                >
                  Clear all cart
                </button>
                <button
                  onClick={toggleCartMenu}
                  className="flex mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
                >
                  Go to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartMenu;
