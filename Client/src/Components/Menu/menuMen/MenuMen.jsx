import React from "react";
import { useMenuMenStore } from "../../useMenuStore/UseMenuStore";

const MenuMen = () => {
  const { isOpen, toggleMenuMen } = useMenuMenStore();

  const backgroundStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)' // bg-slate-400 con opacidad 50%
  };

  return (
    <div>
      
        <div onClick={toggleMenuMen} className="block uppercase font-extrabold cursor-pointer focus:outline-none">
          Men
        </div>

        {isOpen && (
          <div style={backgroundStyle} className="absolute p-11 z-10 top-[82px] h-[350px] left-0 mt-1 w-full bg-white shadow-lg ">
            <ul>
              <li>
                <a href="/co/men/novedades-n3283.html">Ellos</a>
              </li>
              {/* Otras opciones del menú */}
            </ul>
          </div>
        )}
      
    </div>
  );
}

export default MenuMen;
