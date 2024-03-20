import React, { useState } from "react";
import Logo from "../../img/logo.png";
import Login from "../Login/Login";

export default function NavBar() {
  // const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);

  const [isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleProfileClick = () => {
    setShowLogin(!showLogin);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="w-full flex justify-between pl-5 pr-5 h-14 items-center bg-white fixed font-RedHat  ">
      <button onClick={toggleMenu} className="xl:hidden " >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
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
        <img className="w-[240px]" src={Logo} alt="BeeComfree" />
      </div>
      <div className="links text-lg hidden lg:flex ">
        <a className="pl-6 pr-6" href="#">
          Women
        </a>
        <a className="pl-6  pr-6" href="#">
          Men
        </a>
        <a className="pl-6  pr-6  " href="#">
          Accesories
        </a>
        <a className="pl-6  pr-6  " href="#">
          About
        </a>
      </div>
      <div className="searchbar hidden lg:flex ">
        <form className="flex items-center space-x-6">
          <div className="shrink-0"></div>
          <label className="block">
            <input
              type="text"
              className="block w-full text-sm bg-purple-200 rounded-xl"
            />
          </label>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
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
