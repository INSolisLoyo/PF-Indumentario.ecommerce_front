import React, { useState, useEffect } from "react";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import useStore from "../../GlobalStoreZustand/GlobalStoreZustand";
import { useNavigate } from "react-router-dom";
import modaWomen from "../../../img/moda-women.jpg";
import axios from "../../../axios/axios"; // Importa Axios

const MenuWomen = () => {
  const { womenMenuOpen, toggleWomenMenu } = useMenuStore();
  const { setGender } = useStore();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {

        const response = await axios.get("/categories"); // Usa Axios para obtener las categorías
        setCategories(response.data); // Establece las categorías en el estado

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (womenMenuOpen) {
      fetchCategories();
    }
  }, [womenMenuOpen]);

  const handleClick = () => {
    toggleWomenMenu();
  };

  const handleCategoryClick = (category) => {
    setGender("Women");
    navigate(`/cards?gender=Women&category=${category}`);
    toggleWomenMenu(); // Cerrar el menú después de hacer clic en una categoría
  };

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (womenMenuOpen && !event.target.closest(".women-menu")) {
        toggleWomenMenu();
      }
    };

    document.body.addEventListener("click", handleCloseMenu);

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
        <div className="absolute top-full shadow-lg transform transition-transform duration-500">
          <div className="flex justify-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
            <ul>
              <li className="font-bold">CATEGORIES</li>
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" onClick={() => handleCategoryClick(category)}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <img
                className="w-[220px] rounded-full"
                src={modaWomen}
                alt="Moda Women"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MenuWomen;

// import React, { useState, useEffect } from "react";
// import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
// import useStore from "../../GlobalStoreZustand/GlobalStoreZustand";
// import { useNavigate } from "react-router-dom";
// import modaWomen from '../../../img/moda-women.jpg';

// const MenuWomen = () => {
//   const { womenMenuOpen, toggleWomenMenu } = useMenuStore();
//   const { setGender } = useStore();
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("/categories");
//         if (response.ok) {
//           const data = await response.json();
//           setCategories(data);
//         } else {
//           console.error("Failed to fetch categories");
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     if (womenMenuOpen) {
//       fetchCategories();
//     }
//   }, [womenMenuOpen]);

//   const handleClick = () => {
//     toggleWomenMenu();
//   };

//   const handleCategoryClick = (category) => {
//     setGender("Women");
//     navigate(`/cards?gender=Women&category=${category}`);
//     toggleWomenMenu(); // Cerrar el menú después de hacer clic en una categoría
//   };

//   useEffect(() => {
//     const handleCloseMenu = (event) => {
//       if (womenMenuOpen && !event.target.closest(".women-menu")) {
//         toggleWomenMenu();
//       }
//     };

//     document.body.addEventListener("click", handleCloseMenu);

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
//         <div className="absolute top-full shadow-lg transform transition-transform duration-500">
//           <div className="flex justify-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
//             <ul>
//               <li className="font-bold">CATEGORIES</li>
//               {categories.map((category, index) => (
//                 <li key={index}>
//                   <a href="#" onClick={() => handleCategoryClick(category)}>
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div>
//             <img className="w-[220px] rounded-full" src={modaWomen} alt="Moda Women" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuWomen;
