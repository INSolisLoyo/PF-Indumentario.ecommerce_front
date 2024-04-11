import React, { useEffect, useRef } from "react";
import useCartStore from "../../GlobalStoreZustand/useCartStore";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore"; // Importa el estado global

const CartMenu = ({ onClose }) => {
  const menuRef = useRef(null);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);
  const { cartMenuOpen, toggleCartMenu } = useMenuStore(); // Estado global para controlar si el menú del carrito está abierto

  const totalProducts = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  const totalPrice = cart
    .reduce((total, product) => {
      return total + product.product.price * product.quantity;
    }, 0)
    .toFixed(2);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartMenuOpen, onClose]);

  return (
    <div className="cart-menuw divide-y divide-gray-400  bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[400px] max-h-[450px] overflow-y-auto" ref={menuRef}>
      <h2 className="text-center text-lg font-semibold py-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-400">
          <ShoppingCartIcon style={{ fontSize: 100 }}/>
          </div>
          <p className="text-center text-lg font-semibold mt-4">Your cart is empty</p>
        </div>
      ) : (
        <>
          {cart.map((product, index) => (
            <ul key={index} className="py-6 grid grid-cols-3 gap-6 items-center">
              <li className="flex justify-center">
                <img
                  className="w-16 h-20 object-cover"
                  src={product.product.images}
                  alt=""
                />
              </li>
              <li>
                <div className="flex-col justify-start items-start">
                  <h3 className="text-base font-semibold">
                    {product.product.name}
                  </h3>
                  <h2 className="text-base font-semibold">
                    $ {product.product.price}
                  </h2>
                  <div className="flex-col gap-4 items-start">
                    <div className="text-sm text-gray-700">
                      <b>Size:</b> {product.product.size}
                    </div>
                    <div className="text-sm text-gray-700">
                      <b>Color:</b> {product.product.color}
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex justify-center gap-2 items-center">
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
                <label type="text" className="w-[11px] text-center">
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
                  className="font-semibold text-red-500 focus:outline-none"
                >
                  <DeleteIcon />
                </button>
              </li>
            </ul>
          ))}
          <div className="text-center py-4">
            <p className="text-base">
              <b>Total Products: </b>
              {totalProducts}
            </p>
            <p className="text-lg">
              <b>Total Price: </b>${totalPrice}
            </p>
          </div>
          <div className="text-center py-4">
            <button
              onClick={onClose}
              className="flex mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
            >
              Go to Checkout
            </button>
          </div>
        </>
      )}
      <div className="absolute top-2 right-2">
        {cartMenuOpen && (
          <button onClick={toggleCartMenu} className="focus:outline-none">
            <DeleteIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartMenu;

















// // CartMenu.js
// import React, { useEffect, useRef } from "react";
// import useCartStore from "../../GlobalStoreZustand/useCartStore";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useMenuStore } from "../../UseMenuStore/UseMenuStore"; // Importa el estado global

// const CartMenu = ({ onClose }) => {
//   const menuRef = useRef(null);
//   const increaseQuantity = useCartStore((state) => state.increaseQuantity);
//   const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
//   const removeFromCart = useCartStore((state) => state.removeFromCart);
//   const cart = useCartStore((state) => state.cart);
//   const { cartMenuOpen, toggleCartMenu } = useMenuStore(); // Estado global para controlar si el menú del carrito está abierto

//   // Elimina el estado local menuOpen y las funciones relacionadas

//   const totalProducts = cart.reduce((total, product) => {
//     return total + product.quantity;
//   }, 0);

//   const totalPrice = cart
//     .reduce((total, product) => {
//       return total + product.product.price * product.quantity;
//     }, 0)
//     .toFixed(2);

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       onClose();
//     }
//   };



//   useEffect(() => {
//     const handleCloseMenu = (event) => {
//       if (cartMenuOpen && !event.target.closest(".cart-menu")) {
//         toggleCartMenu();
//       }
//     };

//     document.body.addEventListener("click", handleCloseMenu);

//     return () => {
//       document.body.removeEventListener("click", handleCloseMenu);
//     };
//   }, [cartMenuOpen, toggleCartMenu]);




//   // useEffect(() => {
//   //   const handleClick = (event) => {
//   //     handleClickOutside(event);
//   //   };

//   //   document.addEventListener("mousedown", handleClick);
//   //   return () => {
//   //     document.removeEventListener("mousedown", handleClick);
//   //   };
//   // }, [onClose]);

//   return (
//     <div className="cart-menuw divide-y divide-gray-400  bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[400px] max-h-[450px] overflow-y-auto" ref={menuRef}>
//       <h2 className="text-center text-lg font-semibold py-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <div className="text-center py-8">
//           <ShoppingCartIcon style={{ fontSize: 100 }}/>
//           <p className="text-center text-lg font-semibold mt-4">Your cart is empty</p>
//         </div>
//       ) : (
//         <>
//           {cart.map((product, index) => (
//             <ul key={index} className="py-6 grid grid-cols-3 gap-6 items-center">
//               <li className="flex justify-center">
//                 <img
//                   className="w-16 h-20 object-cover"
//                   src={product.product.images}
//                   alt=""
//                 />
//               </li>
//               <li>
//                 <div className="flex-col justify-start items-start">
//                   <h3 className="text-base font-semibold">
//                     {product.product.name}
//                   </h3>
//                   <h2 className="text-base font-semibold">
//                     $ {product.product.price}
//                   </h2>
//                   <div className="flex-col gap-4 items-start">
//                     <div className="text-sm text-gray-700">
//                       <b>Size:</b> {product.product.size}
//                     </div>
//                     <div className="text-sm text-gray-700">
//                       <b>Color:</b> {product.product.color}
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               <li className="flex justify-center gap-2 items-center">
//                 <button
//                   onClick={() =>
//                     decreaseQuantity(
//                       product.product.id,
//                       product.product.color,
//                       product.product.size
//                     )
//                   }
//                   className="text-2xl font-semibold text-red-500 focus:outline-none"
//                 >
//                   -
//                 </button>
//                 <label type="text" className="w-[11px] text-center">
//                   {product.quantity}
//                 </label>
//                 <button
//                   onClick={() =>
//                     increaseQuantity(
//                       product.product.id,
//                       product.product.color,
//                       product.product.size
//                     )
//                   }
//                   className="text-2xl font-semibold text-green-700 focus:outline-none"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() =>
//                     removeFromCart(
//                       product.product.id,
//                       product.product.color,
//                       product.product.size
//                     )
//                   }
//                   className="font-semibold text-red-500 focus:outline-none"
//                 >
//                   <DeleteIcon />
//                 </button>
//               </li>
//             </ul>
//           ))}
//           <div className="text-center py-4">
//             <p className="text-base">
//               <b>Total Products: </b>
//               {totalProducts}
//             </p>
//             <p className="text-lg">
//               <b>Total Price: </b>${totalPrice}
//             </p>
//           </div>
//           <div className="text-center py-4">
//             <button
//               onClick={onClose}
//               className="flex mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
//             >
//               Go to Checkout
//             </button>
//           </div>
//         </>
//       )}
//       <div className="absolute top-2 right-2">
//         {cartMenuOpen && (
//           <button onClick={toggleCartMenu} className="focus:outline-none">
//             <DeleteIcon />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartMenu;












// import React, { useEffect, useRef } from "react";
// import useCartStore from "../../GlobalStoreZustand/useCartStore";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// const CartMenu = ({ onClose }) => {
//   const menuRef = useRef(null);
//   const increaseQuantity = useCartStore((state) => state.increaseQuantity);
//   const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
//   const removeFromCart = useCartStore((state) => state.removeFromCart);
//   const cart = useCartStore((state) => state.cart);

//   const handleIncreaseQuantity = (productId, color, size) => {
//     increaseQuantity(productId, color, size);
//   };

//   const handleDecreaseQuantity = (productId, color, size) => {
//     decreaseQuantity(productId, color, size);
//   };

//   const handleRemoveProduct = (productId, color, size) => {
//     removeFromCart(productId, color, size);
//   };

//   const totalProducts = cart.reduce((total, product) => {
//     return total + product.quantity;
//   }, 0);

//   const totalPrice = cart
//     .reduce((total, product) => {
//       return total + product.product.price * product.quantity;
//     }, 0)
//     .toFixed(2);

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuRef]);

//   return (
//     <div className="divide-y divide-gray-400 favorites-menu bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[400px] max-h-[450px] overflow-y-auto">
//       <h2 className="text-center text-lg font-semibold py-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <div className="text-center py-8">
//           <ShoppingCartIcon style={{ fontSize: 100 }} />
//           <p className="text-center text-lg font-semibold mt-4">Your cart is empty</p>
//         </div>
//       ) : (
//         <>
//           {cart.map((product, index) => (
//             <ul key={index} className="py-6 grid grid-cols-3 gap-6 items-center">
//               {/* Primera columna para la imagen */}
//               <li className="flex justify-center">
//                 <img
//                   className="w-16 h-20 object-cover"
//                   src={product.product.images}
//                   alt=""
//                 />
//               </li>
//               {/* Segunda columna para los textos */}
//               <li>
//                 <div className="flex-col justify-start items-start">
//                   <h3 className="text-base font-semibold">
//                     {product.product.name}
//                   </h3>
//                   <h2 className="text-base font-semibold">
//                     $ {product.product.price}
//                   </h2>
//                   <div className="flex-col gap-4 items-start">
//                     {/* <div className="text-sm text-gray-700">
//                       <b>Amount:</b> {product.quantity}
//                     </div> */}
//                     <div className="text-sm text-gray-700">
//                       <b>Size:</b> {product.product.size}
//                     </div>
//                     <div className="text-sm text-gray-700">
//                       <b>Color:</b> {product.product.color}
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               {/* Tercera columna para los botones */}
//               <li className="flex justify-center gap-2 items-center">
//                 <button
//                   onClick={() =>
//                     handleDecreaseQuantity(
//                       product.product.id,
//                       product.product.color,
//                       product.product.size
//                     )
//                   }
//                   className="text-2xl font-semibold text-red-500 focus:outline-none"
//                 >
//                   -
//                 </button>
//                 <label type="text" className="w-[11px] text-center">
//                   {product.quantity}
//                 </label>

//                 <button
//                   onClick={() =>
//                     handleIncreaseQuantity(
//                       product.product.id,
//                       product.product.color,
//                       product.product.size
//                     )
//                   }
//                   className="text-2xl font-semibold text-green-700 focus:outline-none"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleRemoveProduct(
//                       product.product.id,
//                       product.product.color,
//                       product.product.size
//                     )
//                   }
//                   className="font-semibold text-red-500 focus:outline-none"
//                 >
//                   <DeleteIcon />
//                 </button>
//               </li>
//             </ul>
//           ))}
//           {/* Sección para el total de productos y precio total */}
//           <div className="text-center py-4">
//             <p className="text-base">
//               <b>Total Products: </b>
//               {totalProducts}
//             </p>
//             <p className="text-lg">
//               <b>Total Price: </b>${totalPrice}
//             </p>
//           </div>
//           {/* Botón para ir a la pasarela de pago */}
//           <div className="text-center py-4">
//             <button
//               onClick={onClose}
//               className="flex mt-2 mb-2 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
//             >
//               Go to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartMenu;