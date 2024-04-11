import React, { useEffect, useRef } from "react";
import useFavoriteStore from "../../GlobalStoreZustand/useFavoriteStore";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon  from "@mui/icons-material/Favorite";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore"; // Importa el estado global

const FavoritesMenu = ({ onClose }) => {
  const menuRef = useRef(null);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);
  const favorites = useFavoriteStore((state) => state.favorites);
  const { toggleFavoriteMenu } = useMenuStore(); // Estado global para controlar si el menú de favoritos está abierto

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleFavoriteMenu(); // Cierra el menú de favoritos
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, toggleFavoriteMenu]);

  const totalFavorites = favorites.length;

  return (
    <div className="divide-y divide-gray-400 bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full shadow-lg absolute z-50 w-[400px] max-h-[450px] overflow-y-auto" ref={menuRef}>
      <h2 className="text-center text-lg font-semibold py-4">Favorites</h2>
      {totalFavorites === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-400">
          <FavoriteIcon style={{ fontSize: 100 }}/>
          </div>
          <p className="text-center text-lg font-semibold mt-4">No favorites added</p>
        </div>
      ) : (
        <>
          {favorites.map((favorite, index) => (
            <ul key={index} className="py-6 grid grid-cols-3 gap-6 items-center">
              <Link to={`/detail/${favorite.id}`} onClick={onClose}>
                <li className="flex justify-center">
                  <img className="w-16 h-20 object-cover" src={favorite.images} alt={favorite.name} />
                </li>
              </Link>
              <Link to={`/detail/${favorite.id}`} onClick={onClose}>
                <li>
                  <div className="flex-col justify-start items-start">
                    <h3 className="text-base font-semibold">{favorite.name}</h3>
                    <h2 className="text-base font-semibold">$ {favorite.price}</h2>
                  </div>
                </li>
              </Link>
              <li className="flex justify-center items-center">
                <button onClick={() => handleRemoveFromFavorites(favorite.id)} className="font-semibold text-red-500 focus:outline-none">
                  <DeleteIcon />
                </button>
              </li>
            </ul>
          ))}
          <div className="text-center py-4">
            <p className="text-base mt-2">Total Favorites: {totalFavorites}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesMenu;







// import React, { useEffect, useRef } from "react";
// import useFavoriteStore from "../../GlobalStoreZustand/useFavoriteStore";
// import { Link } from "react-router-dom";
// import DeleteIcon from '@mui/icons-material/Delete';

// const FavoritesMenu = ({ onClose }) => {
//   const menuRef = useRef(null);
//   const removeFromFavorites = useFavoriteStore(
//     (state) => state.removeFromFavorites
//   );
//   const favorites = useFavoriteStore((state) => state.favorites);

//   const handleRemoveFromFavorites = (productId) => {
//     removeFromFavorites(productId);
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuRef]);

//   const totalFavorites = favorites.length;

//   return (
//     <div
//       ref={menuRef}
//       className="favorites-menu bg-gradient-to-t from-[#dfb69f] to-white right-4 top-full p-6 shadow-lg absolute z-50 w-[400px] max-h-[450px] overflow-y-auto"
//     >
//       <h2 className="text-xl text-center font-semibold mb-4">Favorites</h2>
//       <hr />
//       {totalFavorites === 0 ? (
//         <p className="text-center pt-6 text-gray-700">No favorites added</p>
//       ) : (
//         <div className="divide-y divide-gray-400">
//           {favorites.map((favorite, index) => (
//             <ul
//               key={index}
//               className="py-6 flex gap-8 justify-between items-center"
//             >
//               <Link to={`/detail/${favorite.id}`} onClick={onClose}>
//                 <li>
//                   <img
//                     className="min-w-16 max-w-16  min-h-20 max-h-20 object-cover"
//                     src={favorite.images}
//                     alt={favorite.name}
//                   />
//                 </li>
//               </Link>
//               <Link to={`/detail/${favorite.id}`} onClick={onClose}>
//                 <li>
//                   <div className="flex justify-center text-center">
//                     <h3 className="text-base font-semibold">{favorite.name}</h3>
//                   </div>
//                   <div className="flex justify-center text-center">
//                     <h2 className="text-base font-semibold">
//                       $ {favorite.price}
//                     </h2>
//                   </div>
//                 </li>
//               </Link>
//               <li>
//                 <button
//                   onClick={() => handleRemoveFromFavorites(favorite.id)}
//                   className="font-semibold text-red-500 focus:outline-none"
//                 >
//                   <DeleteIcon />
//                 </button>
//               </li>
//             </ul>
//           ))}
//         </div>
//       )}
//       <div className="divide-y">
//         {/* Muestra el total de favoritos */}
//         {totalFavorites > 0 && (
//           <p className="text-base mt-2">Total Favorites: {totalFavorites}</p>
//         )}
//       </div>
//       <button
//         onClick={onClose}
//         className="flex mt-6 mx-auto bg-[#F1E2DB] text-black px-4 py-2 rounded-md hover:bg-primary focus:outline-none"
//       >
//         Close
//       </button>
//     </div>
//   );
// };

// export default FavoritesMenu;
