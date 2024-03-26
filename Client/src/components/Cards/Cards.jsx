import React, { useEffect } from "react";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import axios from "axios";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

const URL = "http://localhost:3001/products";

const Cards = () => {
  const {
    items,
    showFilters,
    currentPage,
    name,
    category,
    minPrice,
    maxPrice,
    material,
    colour,
    productLimit,
    orderType,
    order,
    setItems,
    setShowFilters,
    setCurrentPage,
    setName,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setMaterial,
    setColour,
    setProductLimit,
    setOrderType,
    setOrder,
  } = useStore();

  useEffect(() => {
    fetchData();
  }, [
    currentPage,
    name,
    category,
    minPrice,
    maxPrice,
    material,
    colour,
    orderType,
    order,
    productLimit,
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.post(URL, {
        name,
        category,
        minPrice,
        maxPrice,
        material,
        colour,
        productLimit,
        pageNumber: currentPage,
        orderType,
        order,
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (items.length > 0 && items.length >= productLimit) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full flex-col pt-20 justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-end items-center w-full md:justify-start md:pl-16">
          <select
            className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[6px] float-left"
            onChange={(e) => setProductLimit(parseInt(e.target.value))}
            value={productLimit}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
        </div>

        <div className="flex justify-start items-center w-full md:justify-end md:pr-16">
          <div
            className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[6px] float-right"
            onClick={toggleFilters}
          >
            Filter
          </div>
        </div>
      </div>
      {showFilters && <Filters />}
      <div className="flex pt-[40px] justify-center w-full">
        <div
          className="flex flex-wrap gap-10 justify-center"
          style={{ maxWidth: "90vw" }}
        >
          {items.map((res) => (
            <div key={res.id} className="relative">
              <Card res={res} />
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-center mt-4">
        <button
          className="mx-2 px-3 py-1 border bg-gray-200"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        {Array.from(
          { length: Math.ceil(items.length / productLimit) },
          (_, i) => (
            <button
              key={i}
              className={`mx-2 px-3 py-1 border ${
                currentPage === i + 1 ? "bg-gray-400" : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
        <button
          className="mx-2 px-3 py-1 border bg-gray-200"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;






// import React, { useEffect } from "react";
// import Card from "../Card/Card";
// import Filters from "../Filters/Filters";
// import axios from "axios";
// import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

// const URL = "http://localhost:3001/products";

// const Cards = () => {
//   const {
//     items,
//     showFilters,
//     currentPage,
//     name,
//     category,
//     minPrice,
//     maxPrice,
//     material,
//     colour,
//     productLimit,
//     orderType,
//     order,
//     setItems,
//     setShowFilters,
//     setCurrentPage,
//     setName,
//     setCategory,
//     setMinPrice,
//     setMaxPrice,
//     setMaterial,
//     setColour,
//     setProductLimit,
//     setOrderType,
//     setOrder,
//   } = useStore();

//   useEffect(() => {
//     fetchData();
//   }, [
//     currentPage,
//     name,
//     category,
//     minPrice,
//     maxPrice,
//     material,
//     colour,
//     orderType,
//     order,
//     productLimit,
//   ]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.post(URL, {
//         name,
//         category,
//         minPrice,
//         maxPrice,
//         material,
//         colour,
//         productLimit,
//         pageNumber: currentPage,
//         orderType,
//         order,
//       });
//       setItems(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const toggleFilters = () => {
//     setShowFilters(!showFilters);
//   };

//   return (
//     <div className="flex-col pt-[120px] justify-center">
//       <div className="flex justify-around">
//         <div className="pl-[180px] w-full">
//           <select
//             className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[6px] float-left"
//             onChange={(e) => setProductLimit(parseInt(e.target.value))}
//             value={productLimit}
//           >
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//             <option value={30}>30</option>
//             <option value={40}>40</option>
//           </select>
//         </div>

//         <div className="flex justify-end pr-[180px] w-full">
//           <div
//             className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[6px] float-right"
//             onClick={toggleFilters}
//           >
//             Filter
//           </div>
//         </div>
//       </div>
//       {showFilters && <Filters />}
//       <div className="flex pt-[40px] justify-center w-full">
//         <div
//           className="flex flex-wrap gap-10 justify-center"
//           style={{ maxWidth: "90vw" }}
//         >
//           {items.map((res) => (
//             <div key={res.id} className="relative">
//               <Card res={res} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center mt-4">
//         {Array.from(
//           { length: Math.ceil(items.length / productLimit) },
//           (_, i) => (
//             <button
//               key={i}
//               className={`mx-2 px-3 py-1 border ${
//                 currentPage === i + 1 ? "bg-gray-400" : "bg-gray-200"
//               }`}
//               onClick={() => handlePageChange(i + 1)}
//             >
//               {i + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;
