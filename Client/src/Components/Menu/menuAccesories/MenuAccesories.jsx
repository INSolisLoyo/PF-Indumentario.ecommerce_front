import React from "react";
import { useMenuAccesoriesStore } from "../../useMenuStore/UseMenuStore";

const MenuAccesories = () => {
  const { isOpen, toggleMenuAccesories } = useMenuAccesoriesStore();

  const backgroundStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // bg-slate-400 con opacidad 50%
  };

  return (
    <div>
      <div
        onClick={toggleMenuAccesories}
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        Accesories
      </div>

      {isOpen && (
        <div
          style={backgroundStyle}
          className="absolute p-11 z-10 top-[82px] h-[350px] left-0 mt-1 w-full bg-white shadow-lg "
        >
          <ul>
            <li>
              <a href="/co/accesorios/novedades-n32872.html">
                Accesorios Variados
              </a>
            </li>
            {/* Otras opciones del menú */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuAccesories;
