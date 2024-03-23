import React from "react";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

const Filters = () => {
  const {
    category,
    material,
    colour,
    minPrice,
    maxPrice,
    orderType,
    order,
    showFilters,
    setCategory,
    setMaterial,
    setColour,
    setMinPrice,
    setMaxPrice,
    setOrderType,
    setOrder,
    setShowFilters,
  } = useStore();

  const handleReset = () => {
    setCategory("");
    setMaterial("");
    setColour("");
    setMinPrice("");
    setMaxPrice("");
    setOrderType("");
    setOrder("");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="absolute text-black flex-col justify-center right-[176px] mt-[40px] w-[281px] p-3 h-[650px] bg-[#E9CFC6] z-[50] rounded-[12px] font-RedHat shadow-md border border-primary ">
      <div className="border-b-[#C17B60] border-b-[1px]  pb-1 text-center text-2xl font-bold ">
        Search filters
      </div>
      <form className="text-lg">
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
            value={material ? material.join(",") : ""}
            onChange={(e) => setMaterial(e.target.value.split(","))}
          >
            <option value="">Select material</option>
            <option value="Cotton">Cotton</option>
            <option value="Polyester">Polyester</option>
          </select>
          <div>Color:</div>
          <select
            className="mb-4"
            value={colour ? colour.join(",") : ""}
            onChange={(e) => setColour(e.target.value.split(","))}
          >
            <option value="">Select color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Gray">Gray</option>
            <option value="Black">Black</option>
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

          <div>Order by:</div>
          <select
            className="mb-4"
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            <option value="">Select order type</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>

          <div>Order:</div>
          <select
            className="mb-4"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="">Select order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button
          type="button"
          className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto"
          onClick={handleReset}
        >
          Clear Filters
        </button>
        <button
          type="button"
          className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto"
          onClick={toggleFilters}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default Filters;

// import React from "react";
// import useStore from "../store/store";

// const Filters = () => {
//   const {
//     category,
//     material,
//     colour,
//     minPrice,
//     maxPrice,
//     orderType,
//     order,
//     setCategory,
//     setMaterial,
//     setColour,
//     setMinPrice,
//     setMaxPrice,
//     setOrderType,
//     setOrder,
//     setShowFilters,
//   } = useStore();

//   const handleReset = () => {
//     setCategory("");
//     setMaterial("");
//     setColour("");
//     setMinPrice("");
//     setMaxPrice("");
//     setOrderType("");
//     setOrder("");
//     setShowFilters(false);
//   };

//   return (
//     <div className="absolute text-black flex-col justify-center right-[176px] mt-[40px] w-[281px] p-3 h-[650px] bg-[#E9CFC6] z-[50] rounded-[12px] font-RedHat shadow-md border border-primary ">
//       <div className="border-b-[#C17B60] border-b-[1px]  pb-1 text-center text-2xl font-bold ">
//         Search filters
//       </div>
//       <form className="text-lg">
//         <div className="mt-4 ml-1">
//           <div>Category:</div>
//           <select
//             className="mb-4"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select category</option>
//             <option value="Women">Women</option>
//             <option value="Men">Men</option>
//           </select>

//           <div>Material:</div>
//           <select
//             className="mb-4"
//             value={material ? material.join(",") : ""} // Convertir el arreglo en una cadena separada por comas
//             onChange={(e) => setMaterial(e.target.value.split(","))} // Convertir la cadena en un arreglo
//           >
//             <option value="">Select material</option>
//             <option value="Cotton">Cotton</option>
//             <option value="Polyester">Polyester</option>
//           </select>
//           <div>Color:</div>
//           <select
//             className="mb-4"
//             value={colour ? colour.join(",") : ""} // Convertir el arreglo en una cadena separada por comas
//             onChange={(e) => setColour(e.target.value.split(","))} // Convertir la cadena en un arreglo
//           >
//             <option value="">Select color</option>
//             <option value="Red">Red</option>
//             <option value="Blue">Blue</option>
//             <option value="Green">Green</option>
//             <option value="Gray">Gray</option>
//             <option value="Black">Black</option>
//           </select>

//           <div className="flex justify-between gap-5 mb-6">
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

//           <div>Order by:</div>
//           <select
//             className="mb-4"
//             value={orderType}
//             onChange={(e) => setOrderType(e.target.value)}
//           >
//             <option value="">Select order type</option>
//             <option value="name">Name</option>
//             <option value="price">Price</option>
//             {/* <option value="rating">Rating</option> */}
//           </select>

//           <div>Order:</div>
//           <select
//             className="mb-4"
//             value={order}
//             onChange={(e) => setOrder(e.target.value)}
//           >
//             <option value="">Select order</option>
//             <option value="asc">Ascending</option>
//             <option value="desc">Descending</option>
//           </select>
//         </div>
//         <button
//           className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto"
//           onClick={handleReset}
//         >
//           Clear Filters
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Filters;
