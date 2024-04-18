import React, { useEffect, useState } from "react";
import useCartStore from "../../GlobalStoreZustand/useCartStore";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import userStore from "../../GlobalStoreZustand/UserStore";
import axios from "../../../axios/axios";
import { useNavigate } from "react-router-dom";

const CartMenu = () => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const cart = useCartStore((state) => state.cart);
  const { cartMenuOpen, toggleCartMenu } = useMenuStore();
  const navigate = useNavigate();

  const user = userStore((state) => state.user);

  // if "state": "Paid" -> clearCart else === "Cancel" -> alert("Pay Cancelled")
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Ocultar la alerta después de 3 segundos
  };

  const dataAuth = async () => {
    try {
      // Obtener el email del usuario actual
      const userEmail = user
        ? user.email
        : await useStoreEmail.getState().email;

      // Hacer la solicitud GET al servidor con el email obtenido
      const res = await axios.get(`/user/google/${userEmail}`);

      // Retornar el id obtenido del servidor
      return await res.data.id;
    } catch (error) {
      console.log("Error al obtener el usuario de Google:", error);
      return undefined;
    }
  };

  const handlePayPalPayment = async () => {
    try {
      const totalPriceNum = parseFloat(totalPrice);
      const googleUserId = await dataAuth();
      console.log(googleUserId);

      console.log(user.id);

      let payload = { finalPrice: totalPriceNum.toFixed(2).toString() };
      if (googleUserId === undefined) {
        payload.userId = user.id;
      } else {
        payload.googleUserId = googleUserId;
      }

      const response = await axios.post("/order", payload);

      const { href } = response.data;
  
      window.location.href = href;
    } catch (error) {
      console.error("Error al crear orden de PayPal:", error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get("state");

    if (state === "Paid") {
      handleAlert(); // Mostrar la alerta
      clearCart(); // Vaciar el carrito
    } else if (state === "Cancel") {
      alert("Payment Cancelled");
    }
    navigate("/")
  }, [clearCart]);

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

  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };

  //getGoogleUser get params:email

  return (
    <PayPalScriptProvider options={initialOptions}>
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
          <div className="divide-y divide-gray-400 bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[500px] max-h-[450px] overflow-y-auto rounded-lg">
            <div className="flex justify-center items-center">
              <div className="w-[40px]"></div>
              <h2 className="text-center text-lg font-semibold py-4 w-[75%]">
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
                  <ul
                    key={index}
                    className="py-6 grid grid-cols-3 gap-6 items-center"
                  >
                    <div className="flex justify-center">
                      <img
                        className="w-16 h-20 object-cover"
                        src={product.product.images}
                        alt=""
                      />
                    </div>
                    <div className="flex-col ">
                      <h3 className="text-base font-semibold">
                        {product.product.name}
                      </h3>
                      <h2 className="text-base font-semibold">
                        $ {product.product.price}
                      </h2>
                      <div className="flex-col gap-4 items-start">
                        <p className="text-sm text-gray-700">
                          <b>Size:</b> {product.product.size}
                        </p>
                        <p className="text-sm text-gray-700">
                          <b>Color:</b> {product.product.color}
                        </p>
                        {product.product.stock <= 5 && ( // Mostrar el stock si es menor o igual a 5
                          <p className="text-sm text-red-700">
                            <b>Stock: </b>Only {product.product.stock} available
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
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
                      <label className="w-[11px] text-center">
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
                  </ul>
                ))}
                <div className="cart-summary text-center py-4">
                  <p className="total-products text-base font-semibold">
                    Total Products: {totalProducts}
                  </p>
                  <p className="total-price text-lg font-semibold">
                    Total Price: ${totalPrice}
                  </p>
                </div>
                <div className="flex justify-around text-center py-4">
                  <button
                    onClick={() => {
                      clearCart();
                      toggleCartMenu();
                    }}
                    className="flex h-[30px] items-center w-[150px]  justify-center mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black p-1  rounded-md hover:bg-primary focus:outline-none"
                  >
                    Clear all cart
                  </button>
                  <PayPalButtons
                    onClick={handlePayPalPayment}
                    className="flex mt-2 mb-2 mx-auto py-2"
                    style={{ layout: "horizontal" }}
                  />
                </div>
              </>
            )}
          </div>
        )}
        {showAlert && (
          <div className="alert alert-success" role="alert">
            Payment successful!
          </div>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default CartMenu;