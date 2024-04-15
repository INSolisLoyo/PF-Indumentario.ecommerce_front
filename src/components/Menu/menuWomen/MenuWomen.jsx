import React, { useState, useEffect } from "react";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import useStore from "../../GlobalStoreZustand/GlobalStoreZustand";
import { useNavigate } from "react-router-dom";
import modaWomen from "../../../img/moda-women.jpg";
import axios from "../../../axios/axios"; // Importar axios

const MenuWomen = () => {
  const { womenMenuOpen, toggleWomenMenu } = useMenuStore();
  const { setGender } = useStore();
  const navigate = useNavigate();
  const [womenCategories, setWomenCategories] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post("/product");
        const product = response.data;
        const womenCategories = product
          .filter(product => product.gender === "Women")
          .map(product => product.category)
          .filter((category, index, self) => self.indexOf(category) === index) // Eliminar categorías duplicadas
          .sort(); // Ordenar las categorías alfabéticamente
        setWomenCategories(womenCategories);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (womenMenuOpen) {
      fetchProduct();
    }
  }, [womenMenuOpen]);

  const handleClick = () => {
    toggleWomenMenu();
  };

  const handleCategoryClick = (category) => {
    setGender("Women");
    navigate(`/cards?gender=Women&category=${category}`);
    toggleWomenMenu();
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
          <div className="flex justify-center items-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
            <ul>
              <li className="font-bold">CATEGORIES</li>
              {womenCategories.map((category, index) => (
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