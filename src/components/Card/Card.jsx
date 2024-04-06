import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../GlobalStoreZustand/useCartStore";
import Swal from "sweetalert2";

const Card = ({ res }) => {
  const { addToCart } = useCartStore();
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    const arr = res.name.split(" ");
    const newItemName = arr.slice(-3).join(" ");
    setItemName(newItemName);
  }, []);

  const handleAddToCart = () => {
    addToCart(res); // Agregar el producto al carrito
    // Mostrar una alerta con SweetAlert2
    console.log(res);
    Swal.fire({
      icon: "success",
      title: "Product added to cart!",
      showConfirmButton: false,
      timer: 1500,
    });
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
      <div className="md:cursor-pointer absolute top-1 right-1 p-1 bg-orange-100 my-2 mr-2 border-[1px] border-orange-950 rounded-full w-[40px] h-[40px]">
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
          🤎
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

// const Card = ({ res }) => {
//   const handlerClick = () => {
//     return alert("Hola");
//   };

//   const [itemName, setItemName] = useState('');

//   useEffect(() => {

//     const arr = res.name.split(' ');
//     const newItemName = arr.slice(-3).join(' ');
//     setItemName(newItemName)

//   }, [])

//   return (
//     <Link to={`/detail/${res.id}`} >
//       <div className="font-RedHat">
//         <img
//           src={res.images[0]}
//           alt=""
//           className="h-[390px] w-[280px] rounded-[12px]"
//         />
//         <div className="md:cursor-pointer absolute top-1 right-1 p-1 bg-orange-100 my-2 mr-2 border-[1px] border-orange-950 rounded-full w-[40px] h-[40px]">
//           <span
//             role="img"
//             aria-label="corazon"
//             style={{
//               fontSize: "23px",
//               verticalAlign: "middle",
//               display: "inline-block",
//               lineHeight: "30px",
//             }}
//           >
//             🤎
//           </span>{" "}
//         </div>
//         <div className="flex flex-wrap justify-between">
//           <div className="text-md font-bold">{itemName}</div>
//           <div className="text-md ">${res.price}</div>
//         </div>
//         <div>{res.category}</div>
//       </div>
//     </Link>
//   );
// };

// export default Card;
