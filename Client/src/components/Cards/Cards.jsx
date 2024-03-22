import React, { useEffect } from "react";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import useStore from "../../store/store";

const Cards = () => {
  const {
    allProducts,
    totalPages,
    currentPage,
    addProducts,
  } = useStore();

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Cargar la primera página por defecto
    loadProducts(1);
  }, []);

  const loadProducts = (pageNumber) => {
    addProducts(
      null, // name
      null, // category
      null, // minPrice
      null, // maxPrice
      null, // material
      null, // colour
      10,   // productLimit (puedes ajustar el número de productos por página)
      pageNumber,
      "asc", // orderType
      "name" // order
    );
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="flex-col pt-[120px] justify-center">
      <div className="flex justify-end pr-[180px] w-full">
        <div
          className="border-solid p-2 bg-primary hover:bg-secondary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[12%] float-right"
          onClick={toggleFilters}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </div>
      </div>
      {showFilters && <Filters />}
      <div className="flex pt-[40px] justify-center w-full">
        <div
          className="flex flex-wrap gap-10 justify-center"
          style={{ maxWidth: "90vw" }}
        >
          {allProducts.map((product) => (
            <div key={product.id} className="relative">
              <Card res={product} />
            </div>
          ))}
        </div>
      </div>
      {totalPages > 0 && (
        <div className="mt-5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-4 py-2 mx-1 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded`}
              onClick={() => loadProducts(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
