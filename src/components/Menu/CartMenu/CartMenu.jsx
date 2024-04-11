import React, { useEffect } from "react";
import useCartStore from "../../GlobalStoreZustand/useCartStore";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close"; // Importa el icono de cerrar
import { useMenuStore } from "../../UseMenuStore/UseMenuStore"; // Importa el estado global

const CartMenu = () => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart); // Función para limpiar el carrito
  const cart = useCartStore((state) => state.cart);
  const { cartMenuOpen, toggleCartMenu } = useMenuStore(); // Estado global para controlar si el menú del carrito está abierto

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
        <div className="divide-y divide-gray-400 bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[500px] max-h-[450px] overflow-y-auto">
          <div className="flex justify-center items-center">
            <div className="w-[40px]"></div>
            <h2 className="text-center text-lg font-semibold py-4 w-[75%]">
              Shopping Cart
            </h2>
            <div className="w-[40px]">
              <CloseIcon // Agrega el icono de cerrar
                style={{ fontSize: 30, marginLeft: 10, cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation(); // Evita que el evento se propague al contenedor padre
                  toggleCartMenu(); // Cierra el menú del carrito al hacer clic en el icono de cerrar
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
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() =>
                        decreaseQuantity(
                          product.product.id,
                          product.product.color,
                          product.product.size
                        )
                      }
                      className="text-2xl font-semibold text-red-500 focus:outline-none"
                    >
                      -
                    </button>
                    <label className="w-[11px] text-center">
                      {product.quantity}
                    </label>
                    <button
                      onClick={() =>
                        increaseQuantity(
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

// import React, { useEffect } from "react";
// import useCartStore from "../../GlobalStoreZustand/useCartStore";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useMenuStore } from "../../UseMenuStore/UseMenuStore"; // Importa el estado global

// const CartMenu = () => {
//   const increaseQuantity = useCartStore((state) => state.increaseQuantity);
//   const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
//   const removeFromCart = useCartStore((state) => state.removeFromCart);
//   const clearCart = useCartStore((state) => state.clearCart); // Función para limpiar el carrito
//   const cart = useCartStore((state) => state.cart);
//   const { cartMenuOpen, toggleCartMenu } = useMenuStore(); // Estado global para controlar si el menú del carrito está abierto

//   const handleClick = () => {
//     toggleCartMenu();
//   };

//   const totalProducts = cart.reduce((total, product) => {
//     return total + product.quantity;
//   }, 0);

//   const totalPrice = cart
//     .reduce((total, product) => {
//       return total + product.product.price * product.quantity;
//     }, 0)
//     .toFixed(2);

//   useEffect(() => {
//     const handleCloseMenu = (event) => {
//       if (cartMenuOpen && !event.target.closest(".cart-menu")) {
//         if (cart.length > 0) {
//           toggleCartMenu();
//         }
//       }
//     };

//     document.body.addEventListener("click", handleCloseMenu);

//     return () => {
//       document.body.removeEventListener("click", handleCloseMenu);
//     };
//   }, [cartMenuOpen, toggleCartMenu, cart]);

//   return (
//     <div className="cart-menu">
//       <div className="relative" onClick={handleClick}>
//         <ShoppingCartIcon
//           style={{ fontSize: 35 }}
//           className="text-2xl cursor-pointer"
//         />
//         {totalProducts > 0 && (
//           <div className="absolute top-0 right-0 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs">
//             {totalProducts}
//           </div>
//         )}
//       </div>

//       {cartMenuOpen && (
//         <div className="divide-y divide-gray-400 bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[400px] max-h-[450px] overflow-y-auto">
//           <h2 className="text-center text-lg font-semibold py-4">
//             Shopping Cart
//           </h2>
//           {cart.length === 0 ? (
//             <div className="empty-cart text-center py-8">
//               <div className="text-gray-400">
//                 <ShoppingCartIcon style={{ fontSize: 100 }} />
//               </div>
//               <p className="empty-cart-text text-lg font-semibold mt-4">
//                 Your cart is empty
//               </p>
//             </div>
//           ) : (
//             <>
//               {cart.map((product, index) => (
//                 <ul
//                   key={index}
//                   className="py-6 grid grid-cols-3 gap-6 items-center"
//                 >
//                   <div className="flex justify-center">
//                     <img
//                       className="w-16 h-20 object-cover"
//                       src={product.product.images}
//                       alt=""
//                     />
//                   </div>
//                   <div className="flex-col justify-start items-start">
//                     <h3 className="text-base font-semibold">
//                       {product.product.name}
//                     </h3>
//                     <h2 className="text-base font-semibold">
//                       $ {product.product.price}
//                     </h2>
//                     <div className="flex-col gap-4 items-start">
//                       <p className="text-sm text-gray-700">
//                         <b>Size:</b> {product.product.size}
//                       </p>
//                       <p className="text-sm text-gray-700">
//                         <b>Color:</b> {product.product.color}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-2 items-center">
//                     <button
//                       onClick={() =>
//                         decreaseQuantity(
//                           product.product.id,
//                           product.product.color,
//                           product.product.size
//                         )
//                       }
//                       className="text-2xl font-semibold text-red-500 focus:outline-none"
//                     >
//                       -
//                     </button>
//                     <label className="w-[11px] text-center">
//                       {product.quantity}
//                     </label>
//                     <button
//                       onClick={() =>
//                         increaseQuantity(
//                           product.product.id,
//                           product.product.color,
//                           product.product.size
//                         )
//                       }
//                       className="text-2xl font-semibold text-green-700 focus:outline-none"
//                     >
//                       +
//                     </button>
//                     <button
//                       onClick={() =>
//                         removeFromCart(
//                           product.product.id,
//                           product.product.color,
//                           product.product.size
//                         )
//                       }
//                       className="text-red-500 focus:outline-none"
//                     >
//                       <DeleteIcon />
//                     </button>
//                   </div>
//                 </ul>
//               ))}
//               <div className="cart-summary text-center py-4">
//                 <p className="total-products text-base font-semibold">
//                   Total Products: {totalProducts}
//                 </p>
//                 <p className="total-price text-lg font-semibold">
//                   Total Price: ${totalPrice}
//                 </p>
//               </div>
//               <div className="flex justify-around text-center py-4">
//                 <button
//                   onClick={() => {
//                     clearCart();
//                   }}
//                   className="flex mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
//                 >
//                   Clear all cart
//                 </button>
//                 <button
//                   onClick={toggleCartMenu}
//                   className="flex mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
//                 >
//                   Go to Checkout
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartMenu;
