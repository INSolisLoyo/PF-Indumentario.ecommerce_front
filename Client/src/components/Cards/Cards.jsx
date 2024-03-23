import React, { useEffect } from "react";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import axios from "axios";
import useStore from "../store/store";

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
  }, [currentPage, name, category, minPrice, maxPrice, material, colour, orderType, order]);

  const fetchData = async () => {
    try {
      const response = await axios.post(URL, {
        name,
        category,
        minPrice,
        maxPrice,
        material,
        colour,
        productLimit: 30,
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

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="flex-col pt-[120px] justify-center">
      <div className="flex justify-around">
        <div className="pl-[180px] w-full">
          <select
            className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[6px] float-left"
            onChange={(e) => setProductLimit(parseInt(e.target.value))}
            value={productLimit}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>

        <div className="flex justify-end pr-[180px] w-full">
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
  {Array.from({ length: Math.ceil(items.length / productLimit) }, (_, i) => (
    <button
      key={i}
      className={`mx-2 px-3 py-1 border ${
        currentPage === i + 1 ? "bg-gray-400" : "bg-gray-200"
      }`}
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}
    </button>
  ))}
</div>


    </div>
  );
};

export default Cards;











// import React, { useEffect, useState } from "react";
// import Card from "../Card/Card";
// import Filters from "../Filters/Filters";
// import axios from "axios";

// const URL = "http://localhost:3001/products";
// const ITEMS_PER_PAGE = 10; // Número de elementos por página

// const Cards = () => {
//   const [items, setItems] = useState([]);
//   const [showFilters, setShowFilters] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); // Comenzamos en la página 1

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "",
//           category: "",
//           minPrice: "",
//           maxPrice: "",
//           material: [],
//           colour: [],
//           productLimit: ITEMS_PER_PAGE,
//           pageNumber: currentPage,
//           orderType: "",
//           order: "",
//         }),
//       });
//       setItems(await response.json());
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
//           <select className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[6px] float-left">
//             <option disabled selected>
//               Select option
//             </option>
//             <option>10</option>
//             <option>20</option>
//             <option>30</option>
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
//     </div>
//   );
// };

// export default Cards;






// import React, { useEffect, useState } from "react";
// import Card from "../Card/Card";
// import Filters from "../Filters/Filters";
// import axios from "axios";

// const URL = "http://localhost:3001/products";
// const ITEMS_PER_PAGE = 10; // Número de elementos por página

// const Cards = () => {
//   const [items, setItems] = useState([]);
//   const [showFilters, setShowFilters] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); // Comenzamos en la página 1

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(URL, {
//         params: {
//           pageNumber: currentPage,
//           productLimit: ITEMS_PER_PAGE,
//         },
//       });
//       setItems(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleNextPageChange = (page) => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPageChange = (page) => {
//     setCurrentPage(currentPage - 1);
//   };

//   const toggleFilters = () => {
//     setShowFilters(!showFilters);
//   };

//   return (
//     <div className="flex-col pt-[120px] justify-center items-center">
//       <div className="flex justify-end pr-[180px] w-full">
//         <div
//           className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[12%] float-right"
//           onClick={toggleFilters}
//         >
//           Filter
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

//       <div className="mt-10 w-screen flex justify-center gap-20">
//         <div onClick={handlePreviousPageChange} className="hover:cursor-pointer bg-primary hover:bg-amber-600 p-2 rounded-[7px]">Prev</div>
//         <div className="p-2">{currentPage} </div>
//         <div onClick={handleNextPageChange} className="hover:cursor-pointer bg-primary hover:bg-amber-600 p-2 rounded-[7px]">Next</div>
//       </div>
//     </div>
//   );
// };

// export default Cards;