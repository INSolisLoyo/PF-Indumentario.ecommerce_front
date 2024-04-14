import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFavoriteStore from "../GlobalStoreZustand/useFavoriteStore"; // Importa el hook de estado global de favoritos

const Card = ({ res }) => {
  const { addToFavorites, favorites, removeFromFavorites } = useFavoriteStore(); // Obtén los favoritos y las funciones para agregar/quitar de favoritos
  const [itemName, setItemName] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const arr = res.name.split(" ");
    const newItemName = arr.slice(-3).join(" ");
    setItemName(newItemName);
  }, []);

  useEffect(() => {
    // Verifica si el producto actual está en la lista de favoritos
    setIsFavorite(favorites.some((product) => product.id === res.id));
  }, [favorites, res.id]);

  
  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(res.id); // Elimina el producto de favoritos
    } else {
      addToFavorites(res); // Agrega el producto a favoritos
    }
  };

  return (
    <div className="font-RedHat">
      <Link to={`/detail/${res.id}`}>
        <img
          src={res.images[0]}
          alt=""
          className="h-[350px] w-[280px] rounded-t-xl object-cover"
        />
      </Link>
      <div
        className="md:cursor-pointer absolute top-1 right-1 p-1 bg-orange-200 my-2 mr-2 border-[1px] border-primary rounded-full w-[40px] h-[40px]"
        onClick={handleToggleFavorite}
      >
        <span
          role="img"
          aria-label="corazon"
          style={{
            fontSize: "23px",
            verticalAlign: "middle",
            display: "inline-block",
            lineHeight: "30px",
          }}
        >
          {isFavorite ? "❤️" : "🤍"} {/* Cambia el corazón a rojo si está en favoritos */}
        </span>{" "}
      </div>
      <div className="flex flex-wrap justify-between px-2 pt-2">
        <div className="text-md font-bold">{itemName}</div>
        <div className="text-md ">${res.price}</div>
      </div>
      <div className="px-2">{res.category}</div>
    </div>
  );
};

export default Card;