import React, { useState, useEffect } from "react";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";

const MenuMen = () => {
  const {
    menMenuOpen,
    toggleMenMenu,
    womenMenuOpen,
    storeMenuOpen,
    aboutMenuOpen,
    toggleWomenMenu,
    toggleStoreMenu,
    toggleAboutMenu,
  } = useMenuStore();
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías

  useEffect(() => {
    // Función para obtener las categorías desde la API
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/utilities/categories"
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(data); // Almacena las categorías en el estado
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Llama a la función para obtener las categorías cuando el menú se abre
    if (menMenuOpen) {
      fetchCategories();
    }
  }, [menMenuOpen]);

  const handleClick = () => {
    toggleMenMenu();
    if (womenMenuOpen) toggleWomenMenu();
    if (aboutMenuOpen) toggleAboutMenu();
  };

  useEffect(() => {
    // Función para cerrar el menú si se hace clic fuera de él
    const handleCloseMenu = (event) => {
      if (menMenuOpen && !event.target.closest(".men-menu")) {
        toggleMenMenu();
      }
    };

    // Agregar el manejador de eventos al cuerpo del documento
    document.body.addEventListener("click", handleCloseMenu);

    // Limpiar el manejador de eventos al desmontar el componente
    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
    };
  }, [menMenuOpen, toggleMenMenu]);

  return (
    <div className="men-menu">
      <div
        onClick={handleClick}
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        Men
      </div>

      {menMenuOpen && (
        // Menú desplegable
        <div
          className={`absolute top-full shadow-lg transform transition-transform duration-500 ${
            menMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
            <ul>
              <li className="font-bold">CATEGORIES</li>
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#">{category}</a>
                </li>
              ))}
            </ul>
            <ul>
              <img
                className="w-[220px] rounded-full"
                src="src\img\moda-men\moda-men.jpg"
                alt="Moda Men"
              />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMen;