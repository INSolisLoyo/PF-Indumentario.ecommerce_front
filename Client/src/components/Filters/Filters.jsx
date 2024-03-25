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
    setCategory,
    setMaterial,
    setColour,
    setMinPrice,
    setMaxPrice,
    setOrderType,
    setOrder,
    setShowFilters,
    fetchData,
  } = useStore();

  const handleReset = () => {
    setCategory("");
    setMaterial([]); // Reiniciar material como un arreglo vacío
    setColour([]); // Reiniciar colour como un arreglo vacío
    setMinPrice("");
    setMaxPrice("");
    setOrderType("");
    setOrder("");
    fetchData();
  };

  const handleCloseFilters = () => {
    setShowFilters(false);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeMaterial = (e) => {
    const value = e.target.value.split(",");
    setMaterial(value.length > 0 ? value : []); // Reiniciar material como un arreglo vacío si no hay selección
  };

  const handleChangeColour = (e) => {
    const value = e.target.value.split(",");
    setColour(value.length > 0 ? value : []); // Reiniciar colour como un arreglo vacío si no hay selección
  };

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleChangeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleChangeOrderType = (e) => {
    setOrderType(e.target.value);
  };

  const handleChangeOrder = (e) => {
    setOrder(e.target.value);
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
            onChange={handleChangeCategory}
          >
            <option value="">Select category</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
          </select>

          <div>Material:</div>
          <select
            className="mb-4"
            value={material ? material.join(",") : ""}
            onChange={handleChangeMaterial}
          >
            <option value="">Select material</option>
            <option value="Cotton">Cotton</option>
            <option value="Polyester">Polyester</option>
          </select>
          <div>Color:</div>
          <select
            className="mb-4"
            value={colour ? colour.join(",") : ""}
            onChange={handleChangeColour}
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
                onChange={handleChangeMinPrice}
              />
            </div>
            <div>
              Max price:
              <input
                className="w-[110px]"
                type="number"
                value={maxPrice}
                onChange={handleChangeMaxPrice}
              />
            </div>
          </div>

          <div>Order by:</div>
          <select
            className="mb-4"
            value={orderType}
            onChange={handleChangeOrderType}
          >
            <option value="">Select order type</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>

          <div>Order:</div>
          <select
            className="mb-4"
            value={order}
            onChange={handleChangeOrder}
          >
            <option value="">Select order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </form>
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
        onClick={handleCloseFilters}
      >
        Close
      </button>
    </div>
  );
};

export default Filters;








// import React from "react";
// import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

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
//     fetchData, // Agregamos la función fetchData
//   } = useStore();

//   const handleReset = () => {
//     setCategory("");
//     setMaterial("");
//     setColour("");
//     setMinPrice("");
//     setMaxPrice("");
//     setOrderType("");
//     setOrder("");
//     fetchData(); // Llamamos a fetchData para refrescar los datos
//   };

//   const toggleFilters = () => {
//     setShowFilters(false); // Solo cerramos los filtros sin modificar currentPage
//   };

//   const handleChangeCategory = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleChangeMaterial = (e) => {
//     setMaterial(e.target.value.split(","));
//   };

//   const handleChangeColour = (e) => {
//     setColour(e.target.value.split(","));
//   };

//   const handleChangeMinPrice = (e) => {
//     setMinPrice(e.target.value);
//   };

//   const handleChangeMaxPrice = (e) => {
//     setMaxPrice(e.target.value);
//   };

//   const handleChangeOrderType = (e) => {
//     setOrderType(e.target.value);
//   };

//   const handleChangeOrder = (e) => {
//     setOrder(e.target.value);
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
//             onChange={handleChangeCategory}
//           >
//             <option value="">Select category</option>
//             <option value="Women">Women</option>
//             <option value="Men">Men</option>
//           </select>

//           <div>Material:</div>
//           <select
//             className="mb-4"
//             value={material ? material.join(",") : ""}
//             onChange={handleChangeMaterial}
//           >
//             <option value="">Select material</option>
//             <option value="Cotton">Cotton</option>
//             <option value="Polyester">Polyester</option>
//           </select>
//           <div>Color:</div>
//           <select
//             className="mb-4"
//             value={colour ? colour.join(",") : ""}
//             onChange={handleChangeColour}
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
//                 onChange={handleChangeMinPrice}
//               />
//             </div>
//             <div>
//               Max price:
//               <input
//                 className="w-[110px]"
//                 type="number"
//                 value={maxPrice}
//                 onChange={handleChangeMaxPrice}
//               />
//             </div>
//           </div>

//           <div>Order by:</div>
//           <select
//             className="mb-4"
//             value={orderType}
//             onChange={handleChangeOrderType}
//           >
//             <option value="">Select order type</option>
//             <option value="name">Name</option>
//             <option value="price">Price</option>
//           </select>

//           <div>Order:</div>
//           <select
//             className="mb-4"
//             value={order}
//             onChange={handleChangeOrder}
//           >
//             <option value="">Select order</option>
//             <option value="asc">Ascending</option>
//             <option value="desc">Descending</option>
//           </select>
//         </div>
//       </form>
//       <button
//         type="button"
//         className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto"
//         onClick={handleReset}
//       >
//         Clear Filters
//       </button>
//       <button
//         type="button"
//         className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto"
//         onClick={toggleFilters}
//       >
//         Close
//       </button>
//     </div>
//   );
// };

// export default Filters;