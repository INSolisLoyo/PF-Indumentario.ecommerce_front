import React, { useState } from "react";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import useCartStore from "../GlobalStoreZustand/useCartStore"; // Importa el hook del estado del carrito
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
import Perfil from "../../img/perfil.png";
import Shop from "../../img/shop.png";
import Favorite from "../../img/favorite.png";
import FavoritesMenu from "../Menu/FavoritesMenu/FavoritesMenu";

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
    <div className="w-full mx-auto flex justify-around py-8 gap-4 h-[100px] items-center bg-white/70 fixed font-RedHat z-[100] ">
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
          <img className="w-[200px]" src={Logo} alt="BeeComfree" />
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
        {/* <div className="block uppercase font-medium cursor-pointer focus:outline-none">
          <Link to="/create">Create</Link>
        </div> */}
      </div>

      <div className="searchbar hidden lg:flex ">
        {location.pathname === "/cards" && <SearchBar />}
      </div>

      <div className="flex justify-center text-center items-center content-center gap-3">
        {isRegisteredUser ? (
          <div className="profile pr-2 text-lg cursor-pointer flex   md:gap-2 " onClick={handleProfileClick}>
            <p><b>Welcome {name}</b></p>
            {/* <img className="h-6" src={Perfil} alt="" /> */}
          </div>
        ) : (
          <div className="profile pr-2 cursor-pointer flex gap-0.5 sm:gap-.5 md:gap-2 " onClick={handleProfileClick}>
            <img className="h-6" src={Perfil} alt="" />
          </div>
        )}

        <div className="favorite pr-4 cursor-pointer flex gap-0.5 sm:gap-.5 md:gap-2 relative" onClick={handleFavoriteClick}>
          <img className="h-6" src={Favorite} alt="" />
          {favorites.length > 0 && (
            <span className="absolute top-0 right-[calc(.4rem)] bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </div>

        <div className="car flex relative" onClick={handleCartClick}>
          <div className="car-shop pr-6 cursor-pointer relative">
            <img className="h-6" src={Shop} alt="" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-[calc(.8rem)] bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.reduce((total, product) => total + product.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      </div>

      {showCartMenu && <CartMenu onClose={handleCloseCartMenu} cart={cart} />}
      {showFavoriteMenu && <FavoritesMenu onClose={() => setShowFavoriteMenu(false)} />}
      {showSidebar && isRegisteredUser ? (
        <Account onClose={handleCloseSideBar} setShowSidebar={setShowSidebar} />
      ) : null}
      {showSidebar && !isRegisteredUser ? (
        <Login onClose={handleCloseSideBar} />
      ) : null}
    </div>
  );
}