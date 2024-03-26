import React, { useState } from "react";
import Logo from "../../img/logo.png";
import Login from "../Login/Login";
import { NavLink, Navigate, useNavigate, useLocation } from "react-router-dom";
import MenuWomen from "../Menu/menuWomen/MenuWomen";
import MenuMen from "../Menu/menuMen/MenuMen";
import MenuStore from "../Menu/menuStore/MenuStore";
import MenuAbout from "../Menu/menuAbout/MenuAbout";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleMenuClick = () => {
    setShowLinks(!showLinks); // Alternar la visibilidad de los enlaces al hacer clic en el botón de menú
  };

  const handleProfileClick = () => {
    setShowLogin(!showLogin);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="w-full mx-auto flex justify-around py-8 gap-4 h-10 items-center bg-white/50 fixed font-RedHat z-[100] ">
      <button className="xl:hidden " onClick={handleMenuClick} >
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
        <NavLink to="/" >
        <img className="w-[160px]" src={Logo} alt="BeeComfree" />
        </NavLink>
      </div>

      {/* Aquí se agregan los enlaces que se mostrarán en la versión responsive */}
      <div className={`links transition-opacity duration-300 pt-[10px] h-[150px] border-b-2 border-slate-500  bg-white text-black w-full left-0 top-10 text-lg lg:hidden ${showLinks ? "absolute" : "hidden"}  `}>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200  " href="#">
          Women
        </a>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200 " href="#">
          Men
        </a>
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200" href="/cards">
          Store
        </a>{" "}
        <a className="pl-6 pr-6 block hover:ml-[5px] ease-in duration-200" href="#">
          About
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
      </div>


      <div className="searchbar hidden lg:flex ">
        {
          location.pathname === '/cards' && (
            <SearchBar />           
          )
        }
      </div>

      <div className="car flex ">
        <div className="car-shop pr-6 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>


        <div
          className="profile pr-4 cursor-pointer "
          onClick={handleProfileClick}
        >
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
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>

      {showLogin && <Login onClose={handleCloseLogin} />}
    </div>
  );
}
