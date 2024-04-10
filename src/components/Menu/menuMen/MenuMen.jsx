import React, { useState, useEffect } from "react";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import useStore from "../../GlobalStoreZustand/GlobalStoreZustand";
import { useNavigate } from "react-router-dom";
import modaMen from "../../../img/moda-men.jpg";
import axios from "../../../axios/axios"; // Importar axios

const MenuMen = () => {
  const { menMenuOpen, toggleMenMenu } = useMenuStore();
  const { setGender } = useStore();
  const navigate = useNavigate();
  const [menCategories, setMenCategories] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post("/product"); // Cambiar la ruta por /product
        const product = response.data;
        const menCategories = product
          .filter(product => product.gender === "Men")
          .map(product => product.category)
          .filter((category, index, self) => self.indexOf(category) === index) // Eliminar categorías duplicadas
          .sort(); // Ordenar las categorías alfabéticamente
        setMenCategories(menCategories);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (menMenuOpen) {
      fetchProduct();
    }
  }, [menMenuOpen]);

  const handleClick = () => {
    toggleMenMenu();
  };

  const handleCategoryClick = (category) => {
    setGender("Men");
    navigate(`/cards?gender=Men&category=${category}`);
    toggleMenMenu();
  };

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (menMenuOpen && !event.target.closest(".men-menu")) {
        toggleMenMenu();
      }
    };

    document.body.addEventListener("click", handleCloseMenu);

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
        <div className="absolute top-full shadow-lg transform transition-transform duration-500">
          <div className="flex justify-center items-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
            <ul>
              <li className="font-bold">CATEGORIES</li>
              {menCategories.map((category, index) => (
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
                src={modaMen}
                alt="Moda Men"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMen;





// import React, { useState, useEffect } from "react";
// import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
// import useStore from "../../GlobalStoreZustand/GlobalStoreZustand";
// import { useNavigate } from "react-router-dom";
// import modaMen from "../../../img/moda-men.jpg";
// import axios from "../../../axios/axios"; // Importar axios

// const MenuMen = () => {
//   const { menMenuOpen, toggleMenMenu } = useMenuStore();
//   const { setGender } = useStore();
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {

//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("/categories"); // Cambiar fetch por axios.get
//         setCategories(response.data); // Utilizar response.data para obtener los datos
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };


//     if (menMenuOpen) {
//       fetchCategories();
//     }
//   }, [menMenuOpen]);

//   const handleClick = () => {
//     toggleMenMenu();
//   };

//   const handleCategoryClick = (category) => {
//     setGender("Men");
//     navigate(`/cards?gender=Men&category=${category}`);
//     toggleMenMenu();
//   };

//   useEffect(() => {
//     const handleCloseMenu = (event) => {
//       if (menMenuOpen && !event.target.closest(".men-menu")) {
//         toggleMenMenu();
//       }
//     };

//     document.body.addEventListener("click", handleCloseMenu);

//     return () => {
//       document.body.removeEventListener("click", handleCloseMenu);
//     };
//   }, [menMenuOpen, toggleMenMenu]);

//   return (
//     <div className="men-menu">
//       <div
//         onClick={handleClick}
//         className="block uppercase font-extrabold cursor-pointer focus:outline-none"
//       >
//         Men
//       </div>

//       {menMenuOpen && (
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
//               <img
//                 className="w-[220px] rounded-full"
//                 src={modaMen}
//                 alt="Moda Men"
//               />
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuMen;