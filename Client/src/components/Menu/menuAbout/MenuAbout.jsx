import React from "react";
import { useMenuAboutStore } from "../../UseMenuStore/UseMenuStore";

const MenuAbout = () => {
  const { isOpen, toggleMenuAbout } = useMenuAboutStore();

  const backgroundStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // bg-slate-400 con opacidad 50%
  };

  return (
    <div>
      <div
        onClick={toggleMenuAbout}
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        About
      </div>

      {isOpen && (
        <div
          style={backgroundStyle}
          className="absolute p-11 z-10 top-[82px] h-[350px] left-0 mt-1 w-full bg-white shadow-lg "
        >
          <ul>
            <li>
              <a href="/co/about/novedades-n32875.html">About</a>
            </li>
            {/* Otras opciones del menú */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuAbout;
