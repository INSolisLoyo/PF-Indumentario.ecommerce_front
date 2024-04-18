import React, { useEffect, useState } from "react";
import useFavoriteStore from "../../GlobalStoreZustand/useFavoriteStore";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import axios from "../../../axios/axios"

const FavoritesMenu = () => {
  const clearFavorites = useFavoriteStore((state) => state.clearFavorites); // Función para limpiar los favoritos
  const { favoritesMenuOpen, toggleFavoritesMenu } = useMenuStore(); // Utiliza el estado global para controlar si el menú de favoritos está abierto
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToFavorites, favorites, removeFromFavorites } = useFavoriteStore(); // Obtén los favoritos y las funciones para agregar/quitar de favoritos

  const handleRemoveFromFavorites = async (productId) => {
    try {
      // Obtener todos los favoritos del usuario
      const response = await axios.get(`/favorite`);
      const favoriteProducts = response.data;
  
      // Buscar el favorito correspondiente al productId
      const favoriteToDelete = favoriteProducts.find(
        (favorite) => favorite.productId === productId
      );
  
      if (favoriteToDelete) {
        const favoriteId = favoriteToDelete.id;
        // Eliminar el favorito de la base de datos
        await axios.delete(`/favorite/${favoriteId}`);
        // También elimina el favorito de la lista local
        removeFromFavorites(productId);
        

      } else {
        console.error("No se encontró el favorito en la base de datos");
      }
    } catch (error) {
      console.error("Error al eliminar favorito de la base de datos:", error);
    }
  };

  const handleClick = () => {
    toggleFavoritesMenu();
  };

  const handleClearFavorites = () => {
    clearFavorites();
  };

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (favoritesMenuOpen && !event.target.closest(".favorites-menu")) {
        if (favorites.length > 0) {
          toggleFavoritesMenu();
        }
      }
    };

    document.body.addEventListener("click", handleCloseMenu);

    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
    };
  }, [favoritesMenuOpen, toggleFavoritesMenu, favorites]);

  const totalFavorites = favorites.length;

  return (
    <div className="favorites-menu">
      <div className="relative flex items-center" onClick={handleClick}>
        <FavoriteIcon
          style={{ fontSize: 35 }}
          className="text-2xl cursor-pointer"
        />
        {totalFavorites > 0 && (
          <div className="absolute top-0 right-0 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs">
            {totalFavorites}
          </div>
        )}
      </div>

      {favoritesMenuOpen && (
        <div className="divide-y divide-gray-400 bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[500px] max-h-[450px] overflow-y-auto rounded-lg">
          <div className="flex justify-center items-center">
            <div className="w-[40px]"></div>
            <h2 className="text-center text-lg font-semibold py-4 w-[75%]">
              Favorites
            </h2>
            <div className="w-[40px]">
              <CloseIcon
                style={{ fontSize: 30, marginLeft: 10, cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavoritesMenu(); // Cierra el menú de favoritos al hacer clic en el icono de cerrar
                }}
              />
            </div>
          </div>

          {favorites.length === 0 ? (
            <div className="empty-cart text-center py-8">
              <div className="text-gray-400">
                <FavoriteIcon style={{ fontSize: 100 }} />
              </div>
              <p className="empty-cart-text text-lg font-semibold mt-4">
                Your favorites is empty
              </p>
            </div>
          ) : (
            <>
              {favorites.map((favorite, index) => (
                <ul
                  key={index}
                  className="py-6 grid grid-cols-3 gap-6 items-center"
                >
                  <li className="flex justify-center">
                    {favorite && favorite.images && (
                      <img
                        className="w-16 h-20 object-cover"
                        src={favorite.images[0]}
                        alt={favorite.name}
                      />
                    )}
                  </li>
                  <li>
                    <div className="flex-col justify-start items-start">
                      <h3 className="text-base font-semibold">
                        {favorite.name}
                      </h3>
                      <h2 className="text-base font-semibold">
                        $ {favorite.price}
                      </h2>
                    </div>
                  </li>
                  <li className="flex justify-center items-center">
                    <button
                      onClick={() => handleRemoveFromFavorites(favorite.id)}
                      className="font-semibold text-red-500 focus:outline-none"
                    >
                      <DeleteIcon />
                    </button>
                  </li>
                </ul>
              ))}
              <div className="text-center py-4">
                <p className="text-base mt-2">
                  Total Favorites: {totalFavorites}
                </p>
                <button
                  onClick={handleClearFavorites}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Clear All Favorites
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoritesMenu;
