import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../GlobalStoreZustand/useCartStore";
import useFavoriteStore from "../GlobalStoreZustand/useFavoriteStore"; // Importa el hook de estado global de favoritos
import Swal from "sweetalert2";

const Card = ({ res }) => {
  const { addToCart } = useCartStore();
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

  const handleAddToCart = () => {
    addToCart(res); // Agrega el producto al carrito
    // Muestra una alerta con SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Product added to cart!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
          className="h-[350px] w-[280px] rounded-[12px]"
        />
      </Link>
      <div
        className="md:cursor-pointer absolute top-1 right-1 p-1 bg-orange-100 my-2 mr-2 border-[1px] border-orange-950 rounded-full w-[40px] h-[40px]"
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
          {isFavorite ? "❤️" : "🤎"} {/* Cambia el corazón a rojo si está en favoritos */}
        </span>{" "}
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="text-md font-bold">{itemName}</div>
        <div className="text-md ">${res.price}</div>
      </div>
      <div>{res.category}</div>
    </div>
  );
};

export default Card;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useCartStore from "../GlobalStoreZustand/useCartStore";
// import Swal from "sweetalert2";

// const Card = ({ res }) => {
//   const { addToCart } = useCartStore();
//   const [itemName, setItemName] = useState("");

//   useEffect(() => {
//     const arr = res.name.split(" ");
//     const newItemName = arr.slice(-3).join(" ");
//     setItemName(newItemName);
//   }, []);

//   const handleAddToCart = () => {
//     addToCart(res); // Agregar el producto al carrito
//     // Mostrar una alerta con SweetAlert2
//     console.log(res);
//     Swal.fire({
//       icon: "success",
//       title: "Product added to cart!",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="font-RedHat">
//       <Link to={`/detail/${res.id}`}>
//         <img
//           src={res.images[0]}
//           alt=""
//           className="h-[350px] w-[280px] rounded-[12px]"
//         />
//       </Link>
//       <div className="md:cursor-pointer absolute top-1 right-1 p-1 bg-orange-100 my-2 mr-2 border-[1px] border-orange-950 rounded-full w-[40px] h-[40px]">
//         <span
//           role="img"
//           aria-label="corazon"
//           style={{
//             fontSize: "23px",
//             verticalAlign: "middle",
//             display: "inline-block",
//             lineHeight: "30px",
//           }}
//         >
//           🤎
//         </span>{" "}
//       </div>
//       <div className="flex flex-wrap justify-between">
//         <div className="text-md font-bold">{itemName}</div>
//         <div className="text-md ">${res.price}</div>
//       </div>
//       <div>{res.category}</div>

//     </div>
//   );
// };

// export default Card;