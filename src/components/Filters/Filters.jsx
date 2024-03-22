import React, { useState } from "react";

const Filters = () => {
  // Estados para almacenar los valores de los filtros y el estado para mostrar/ocultar el div de filtros
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(true); // Estado para mostrar/ocultar el div de filtros

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los valores de los filtros a la función que maneja la aplicación de los filtros
    console.log("Filtros aplicados:", {
      category,
      material,
      color,
      minPrice,
      maxPrice,
    });
    // Ocultar el div de filtros al hacer clic en "Apply Filters"
    setShowFilters(false);
  };

  return (
    <>
      {showFilters && ( // Renderizar el div de filtros solo si showFilters es true
        <div className="absolute text-black flex-col justify-center right-[176px] mt-[40px] w-[281px] p-3 h-[650px] bg-[#E9CFC6] z-[50] rounded-[12px] font-RedHat shadow-md border border-primary ">
          <div className="border-b-[#C17B60] border-b-[1px]  pb-1 text-center text-2xl font-bold ">
            Search filters
          </div>
          <form className="text-lg" onSubmit={handleSubmit}>
            <div className="mt-4 ml-1">
              <div>Category:</div>
              <select
                className="mb-4"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
              </select>

              <div>Material:</div>
              <select
                className="mb-4"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                <option value="">Select material</option>
                <option value="Cotton">Cotton</option>
                <option value="Pollyester">Pollyester</option>
              </select>
              <div>Color:</div>
              <select
                className="mb-4"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="">Select color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
              </select>
              <div className="flex justify-between gap-5 mb-6">
                <div>
                  Min price:
                  <input
                    className="w-[110px]"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div>
                  Max price:
                  <input
                    className="w-[110px]"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-primary content-center hover:bg-orange-700 text-black font-bold py-2 px-4 w-fit rounded mt-4 block mx-auto">
              Apply Filters
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Filters;





// import React, { useState } from "react";

// const Filters = () => {
//   // Estados para almacenar los valores de los filtros
//   const [category, setCategory] = useState("");
//   const [material, setMaterial] = useState("");
//   const [color, setColor] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   // Función para manejar el envío del formulario
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí puedes enviar los valores de los filtros a la función que maneja la aplicación de los filtros
//     console.log("Filtros aplicados:", {
//       category,
//       material,
//       color,
//       minPrice,
//       maxPrice,
//     });
//   };

//   return (
//     <div className="absolute text-black flex-col justify-center right-[176px] mt-[40px] w-[281px] p-3 h-[650px] bg-[#E9CFC6] z-[50] rounded-[12px] font-RedHat shadow-md border border-primary ">
//       <div className="border-b-[#C17B60] border-b-[1px]  pb-1 text-center text-2xl font-bold ">
//         Search filters
//       </div>
//       <form className="text-lg" onSubmit={handleSubmit}>
//         <div className="mt-2">
//           <div>Category:</div>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//           <div>Material:</div>
//           <input
//             type="text"
//             value={material}
//             onChange={(e) => setMaterial(e.target.value)}
//           />
//           <div>Color:</div>
//           <input
//             type="text"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//           <div className="flex justify-between gap-5">
//             <div>
//               Min price:
//               <input
//                 className="w-[110px]"
//                 type="number"
//                 value={minPrice}
//                 onChange={(e) => setMinPrice(e.target.value)}
//               />
//             </div>
//             <div>
//               Max price:
//               <input
//                 className="w-[110px]"
//                 type="number"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//         <button className="bg-primary hover:bg-orange-700 text-black font-bold py-2 px-4 rounded mt-4">
//           Apply Filters
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Filters;

// import React from "react";

// const Filters = () => {
//   return (
//     <div className="absolute flex-col justify-center right-[176px] mt-[40px] w-[281px] p-3 h-[650px] bg-primary z-[50] rounded-[12px] shadow-md shadow-secondary ">
//       <div className="border-b-red-800 border-b-[1px]  pb-1 text-center text-2xl font-bold font-RedHat">
//         Search filters
//       </div>
//       <div className="mt-2">
//         <div>Category:</div>
//         <div>Material:</div>
//         <div>Color:</div>
//         <div className="flex justify-between">
//           <div>Min price:<select></select></div>
//           <div>Max price:<select></select></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;
