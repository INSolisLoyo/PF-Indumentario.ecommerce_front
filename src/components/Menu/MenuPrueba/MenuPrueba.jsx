import React, { useEffect } from 'react'
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";

const MenuPrueba = () => {

  const { pruebaMenuOpen, togglePruebaMenu } = useMenuStore();

  const handleClick = () => {
    togglePruebaMenu();
  };

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (pruebaMenuOpen && !event.target.closest(".prueba-menu")) {
        togglePruebaMenu();
      }
    };

    document.body.addEventListener("click", handleCloseMenu);

    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
    };
  }, [pruebaMenuOpen, togglePruebaMenu]);

  return (
    <div className='prueba-menu'>
      <div
        onClick={handleClick}
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        Carrito de prueba
      </div>

      {pruebaMenuOpen && (
        <div className="absolute top-full shadow-lg transform transition-transform duration-500">
          <div className="flex justify-center items-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
            <div>
              Esta es una prueba
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default MenuPrueba