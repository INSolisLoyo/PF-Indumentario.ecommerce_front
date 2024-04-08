import React, { useState, useEffect } from "react";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import useCartStore from "../GlobalStoreZustand/useCartStore";
import useFavoriteStore from "../GlobalStoreZustand/useFavoriteStore";
import Logo from "../../img/logo.png";
import Login from "../Login/Login";
import Account from "../Account/Account";
import { NavLink, Link, useLocation } from "react-router-dom";
import MenuWomen from "../Menu/menuWomen/MenuWomen";
import MenuMen from "../Menu/menuMen/MenuMen";
import MenuStore from "../Menu/menuStore/MenuStore";
import MenuAbout from "../Menu/menuAbout/MenuAbout";
import SearchBar from "./SearchBar";
import CartMenu from "../Menu/CartMenu/CartMenu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function NavBar() {
  const isRegisteredUser = useStore((state) => state.registeredUser);
  const { name } = useStore((state) => state.user);
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showUserName, setShowUserName] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [showFavoriteMenu, setShowFavoriteMenu] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const favorites = useFavoriteStore((state) => state.favorites);

  const handleMenuClick = () => {
    setShowLinks(!showLinks);
  };

  const handleProfileClick = () => {
    setShowSidebar(true);
  };

  const handleCloseSideBar = () => {
    setShowSidebar(false);
  };

  const handleCartClick = () => {
    setShowCartMenu(!showCartMenu);
  };

  const handleFavoriteClick = () => {
    setShowFavoriteMenu(!showFavoriteMenu);
  };

  const handleCloseCartMenu = () => {
    setShowCartMenu(false);
  };

  return (
    <div className="w-full mx-auto flex justify-around py-8 gap-4 h-10 items-center bg-white/50 fixed font-RedHat z-[100] ">
      <button className="lg:hidden " onClick={handleMenuClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="logo pl-5 ">
        <NavLink to="/">
          <img className="w-[160px]" src={Logo} alt="BeeComfree" />
        </NavLink>
      </div>

      <div className={`links transition-opacity duration-300 pt-[10px] h-[150px] border-b-2 border-slate-500  bg-white text-black w-full left-0 top-10 text-lg lg:hidden ${showLinks ? "absolute" : "hidden"}  `}>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200  " href="#">
          Women
        </a>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200 " href="#">
          Men
        </a>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200" href="/cards">
          Store
        </a>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200" href="#">
          About
        </a>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200" href="/create">
          Create
        </a>
      </div>

      <div className="links text-lg hidden lg:flex ">
        <div className="pl-6 pr-6" href="#">
          <MenuWomen />
        </div>
        <div className="pl-6  pr-6" href="#">
          <MenuMen />
        </div>
        <div className="pl-6  pr-6  " href="#">
          <MenuStore />
        </div>
        <div className="pl-6  pr-6  " href="#">
          <MenuAbout />
        </div>
        <div className="block uppercase font-medium cursor-pointer focus:outline-none">
          <Link to="/create">Create</Link>
        </div>
      </div>

      <div className="searchbar hidden lg:flex ">
        {location.pathname === "/cards" && <SearchBar />}
      </div>


      <div className="flex gap-4">
        <div className="profile pr-2 cursor-pointer flex gap-0.5 sm:gap-.5 md:gap-2 " onClick={handleProfileClick}>
          {showUserName && <p>Hello {name}</p>}
          <AccountCircleIcon />
        </div>
      
      <div className="flex gap-4">
        <div className="favorite pr-2 cursor-pointer flex gap-0.5 sm:gap-.5 md:gap-2 " onClick={handleFavoriteClick}>
          <FavoriteIcon />
          {favorites.length > 0 && (
            <span className="absolute top-0 right-[calc(.8rem)] bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </div>
      </div>

        <div className="car flex relative" onClick={handleCartClick}>
          <div className="car-shop pr-6 cursor-pointer relative">
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <span className="absolute top-0 right-[calc(.8rem)] bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.reduce((total, product) => total + product.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      </div>

      {showCartMenu && <CartMenu onClose={handleCloseCartMenu} cart={cart} />}
      {showFavoriteMenu && (
        <div className="favorite-menu">
          {/* Aquí renderiza el menú desplegable de favoritos */}
          {/* Por ejemplo: */}
          <ul>
            {favorites.map((favorite, index) => (
              <li key={index}>{/* Renderiza cada elemento favorito */}</li>
            ))}
          </ul>
        </div>
      )}

      {showSidebar && isRegisteredUser ? (
        <Account onClose={handleCloseSideBar} setShowSidebar={setShowSidebar} />
      ) : null}
      {showSidebar && !isRegisteredUser ? (
        <Login onClose={handleCloseSideBar} />
      ) : null}
    </div>
  );
}





// import React, { useState, useEffect } from "react";
// import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
// import useCartStore from "../GlobalStoreZustand/useCartStore"; // Importa el hook del carrito
// import Logo from "../../img/logo.png";
// import Login from "../Login/Login";
// import Account from "../Account/Account";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import MenuWomen from "../Menu/menuWomen/MenuWomen";
// import MenuMen from "../Menu/menuMen/MenuMen";
// import MenuStore from "../Menu/menuStore/MenuStore";
// import MenuAbout from "../Menu/menuAbout/MenuAbout";
// import SearchBar from "./SearchBar";
// import CartMenu from "../Menu/CartMenu/CartMenu"; // Importa el componente del menú desplegable del carrito
// import AccountCircleIcon from "@material-ui/icons/AccountCircle"; // Importa el icono de login de Material-UI
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"; // Importa el icono del carrito de Material-UI

// export default function NavBar() {
//   const isRegisteredUser = useStore((state) => state.registeredUser);
//   const { name } = useStore((state) => state.user);
//   const location = useLocation();

//   const [showLinks, setShowLinks] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showUserName, setShowUserName] = useState(false);
//   const [showCartMenu, setShowCartMenu] = useState(false);

//   const cart = useCartStore((state) => state.cart);

//   const handleMenuClick = () => {
//     setShowLinks(!showLinks);
//   };

//   const handleProfileClick = () => {
//     setShowSidebar(true);
//   };

//   const handleCloseSideBar = () => {
//     setShowSidebar(false);
//   };

//   useEffect(() => {
//     if (isRegisteredUser) {
//       setShowUserName(true);
//     } else {
//       setShowUserName(false);
//       setShowSidebar(false);
//       setShowUserName(false);
//     }
//   }, [isRegisteredUser]);

//   const handleCartClick = () => {
//     setShowCartMenu(!showCartMenu);
//   };

//   const handleCloseCartMenu = () => {
//     setShowCartMenu(false);
//   };

//   return (
//     <div className="w-full mx-auto flex justify-around py-8 gap-4 h-10 items-center bg-white/50 fixed font-RedHat z-[100] ">
//       <button className="lg:hidden " onClick={handleMenuClick}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//       </button>
//       <div className="logo pl-5 ">
//         <NavLink to="/">
//           <img className="w-[160px]" src={Logo} alt="BeeComfree" />
//         </NavLink>
//       </div>

//       {/* Elementos de la barra de navegación */}
//       <div
//         className={`links transition-opacity duration-300 pt-[10px] h-[150px] border-b-2 border-slate-500  bg-white text-black w-full left-0 top-10 text-lg lg:hidden ${
//           showLinks ? "absolute" : "hidden"
//         }  `}
//       >
//         <a
//           className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200  "
//           href="#"
//         >
//           Women
//         </a>
//         <a
//           className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200 "
//           href="#"
//         >
//           Men
//         </a>
//         <a
//           className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200"
//           href="/cards"
//         >
//           Store
//         </a>
//         <a
//           className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200"
//           href="#"
//         >
//           About
//         </a>
//         <a
//           className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200"
//           href="/create"
//         >
//           Create
//         </a>
//       </div>

//       <div className="links text-lg hidden lg:flex ">
//         <div className="pl-6 pr-6" href="#">
//           <MenuWomen />
//         </div>
//         <div className="pl-6  pr-6" href="#">
//           <MenuMen />
//         </div>
//         <div className="pl-6  pr-6  " href="#">
//           <MenuStore />
//         </div>
//         <div className="pl-6  pr-6  " href="#">
//           <MenuAbout />
//         </div>
//         <div className="block uppercase font-medium cursor-pointer focus:outline-none">
//           <Link to="/create">Create</Link>
//         </div>
//       </div>

//       <div className="searchbar hidden lg:flex ">
//         {location.pathname === "/cards" && <SearchBar />}
//       </div>

//       {/* Icono del carrito con el número de elementos */}
//       <div className="flex gap-4">
//         <div
//           className="profile pr-2 cursor-pointer flex gap-0.5 sm:gap-.5 md:gap-2 "
//           onClick={handleProfileClick}
//         >
//           {showUserName && <p>Hello {name}</p>}
//           <AccountCircleIcon />
//         </div>

//         <div className="car flex relative" onClick={handleCartClick}>
//           <div className="car-shop pr-6 cursor-pointer relative">
//             <ShoppingCartIcon />
//             {/* Número de elementos en el carrito */}
//             {cart.length > 0 && (
//             <span className="absolute top-0 right-[calc(.8rem)] bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
//               {cart.reduce((total, product) => total + product.quantity, 0)}
//             </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mostrar el menú desplegable del carrito */}
//       {showCartMenu && <CartMenu onClose={handleCloseCartMenu} cart={cart} />}

//       {/* Elementos adicionales del Navbar */}
//       {showSidebar && isRegisteredUser ? (
//         <Account onClose={handleCloseSideBar} setShowSidebar={setShowSidebar} />
//       ) : null}
//       {showSidebar && !isRegisteredUser ? (
//         <Login onClose={handleCloseSideBar} />
//       ) : null}
//     </div>
//   );
// }