import React, { useState, useEffect } from "react";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import useStore from "../../GlobalStoreZustand/GlobalStoreZustand";
import { useNavigate } from "react-router-dom"; // Importa useNavigate en lugar de useHistory
import womenImage from '../../../img/moda-women.jpg';
import axios from "../../../axios/axios";

const MenuWomen = () => {
  const {
    womenMenuOpen,
    toggleWomenMenu,
    menMenuOpen,
    storeMenuOpen,
    aboutMenuOpen,
    toggleMenMenu,
    toggleStoreMenu,
    toggleAboutMenu,
  } = useMenuStore();
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías
  const { setGender, setCategory } = useStore(); // Obtén las funciones para actualizar el género y la categoría en el estado global
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  useEffect(() => {
    // Función para obtener las categorías desde la API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/categories');
        if (response.status === 200) {
          const data = response.data;
          setCategories(data); // Almacena las categorías en el estado
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Llama a la función para obtener las categorías cuando el menú se abre
    if (womenMenuOpen) {
      fetchCategories();
    }
  }, [womenMenuOpen]);

  const handleClick = () => {
    toggleWomenMenu();
    if (menMenuOpen) toggleMenMenu();
    if (aboutMenuOpen) toggleAboutMenu();
  };

  const handleCategoryClick = (category) => {
    // Actualizar el género y la categoría en el estado global
    setGender("Women");
    setCategory(category);
    // Redirigir a la página de Cards
    navigate("/cards"); // Utiliza navigate para la navegación
  };

  useEffect(() => {
    // Función para cerrar el menú si se hace clic fuera de él
    const handleCloseMenu = (event) => {
      if (womenMenuOpen && !event.target.closest(".women-menu")) {
        toggleWomenMenu();
      }
    };

    // Agregar el manejador de eventos al cuerpo del documento
    document.body.addEventListener("click", handleCloseMenu);

    // Limpiar el manejador de eventos al desmontar el componente
    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
    };
  }, [womenMenuOpen, toggleWomenMenu]);

  return (
    <div className="women-menu">
      <div
        onClick={handleClick}
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        Women
      </div>

      {womenMenuOpen && (
        // Menú desplegable
        <div
          className={`absolute top-full shadow-lg transform transition-transform duration-500${
            womenMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
            <ul>
              <li className="font-bold">CATEGORIES</li>
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
            
            <ul>
              <img className="w-[220px] rounded-full" src={womenImage} alt="Discounts" />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuWomen;








// import React, { useState, useEffect } from "react";
// import { useMenuStore } from "../../UseMenuStore/UseMenuStore";

// const MenuWomen = () => {
//   const {
//     womenMenuOpen,
//     toggleWomenMenu,
//     menMenuOpen,
//     storeMenuOpen,
//     aboutMenuOpen,
//     toggleMenMenu,
//     toggleStoreMenu,
//     toggleAboutMenu,
//   } = useMenuStore();
//   const [categories, setCategories] = useState([]); // Estado para almacenar las categorías

//   useEffect(() => {
//     // Función para obtener las categorías desde la API
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:3001/utilities/categories"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setCategories(data); // Almacena las categorías en el estado
//         } else {
//           console.error("Failed to fetch categories");
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     // Llama a la función para obtener las categorías cuando el menú se abre
//     if (womenMenuOpen) {
//       fetchCategories();
//     }
//   }, [womenMenuOpen]);

//   const handleClick = () => {
//     toggleWomenMenu();
//     if (menMenuOpen) toggleMenMenu();
//     if (aboutMenuOpen) toggleAboutMenu();
//   };

//   useEffect(() => {
//     // Función para cerrar el menú si se hace clic fuera de él
//     const handleCloseMenu = (event) => {
//       if (womenMenuOpen && !event.target.closest(".women-menu")) {
//         toggleWomenMenu();
//       }
//     };

//     // Agregar el manejador de eventos al cuerpo del documento
//     document.body.addEventListener("click", handleCloseMenu);

//     // Limpiar el manejador de eventos al desmontar el componente
//     return () => {
//       document.body.removeEventListener("click", handleCloseMenu);
//     };
//   }, [womenMenuOpen, toggleWomenMenu]);

//   return (
//     <div className="women-menu">
//       <div
//         onClick={handleClick}
//         className="block uppercase font-extrabold cursor-pointer focus:outline-none"
//       >
//         Women
//       </div>

//       {womenMenuOpen && (
//         // Menú desplegable
//         <div
//           className={`absolute top-full left-0 w-full shadow-lg transform transition-transform duration-500 ${
//             womenMenuOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex text-pink-600 justify-center gap-[50px] p-11 z-10 h-[350px] bg-pink-100/80">
//             <ul>
//               <li className="font-bold">CATEGORIES</li>
//               {categories.map((category, index) => (
//                 <li key={index}>
//                   <a href="#">{category}</a>
//                 </li>
//               ))}
//             </ul>
            
//             <ul>
//               <img className="w-[220px] rounded-full" src="src\img\moda-women\moda-women.jpg" alt="Discounts" />
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuWomen;
