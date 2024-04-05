import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import SearchBar from "../Navbar/SearchBar";
import axios from "axios";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import CustomPagination from "../CustomPagination/CustonPagination";

const URL = "http://localhost:3001/product";
const PRODUCTS_PER_PAGE = 10;

const Cards = () => {
  const location = useLocation();

  let {
    items,
    totalItems,
    showFilters,
    currentPage,
    name,
    gender,
    minPrice,
    maxPrice,
    material,
    colour,
    orderType,
    order,
    setItems,
    setTotalItems,
    setShowFilters,
    setCurrentPage,
    setName,
    setGender,
    setMinPrice,
    setMaxPrice,
    setMaterial,
    setColour,
    setOrderType,
    setOrder,
  } = useStore();

  const [displayedItems, setDisplayedItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(URL, {
        name,
        // gender,
        minPrice,
        maxPrice,
        material,
        colour,
        productLimit: PRODUCTS_PER_PAGE,
        pageNumber: currentPage,
        orderType,
        order,
      });
      setItems(response.data);
      setTotalItems(response.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Depuración del cliente: Imprimir detalles del error de Axios
      console.log("Error response:", error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [
    name,
    currentPage,
    // gender,
    minPrice,
    maxPrice,
    material,
    colour,
    orderType,
    order,
  ]);

  useEffect(() => {
    // console.log(location.pathname);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, items.length);
    setDisplayedItems(items.slice(startIndex, endIndex));
  }, [items, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);

  return (
    
    <div className="flex-col pt-[120px] justify-center font-RedHat">
      <div className="flex justify-around relative">
        <div className="flex flex-col gap-4 items-center justify-center w-full h-auto lg:flex-row lg:justify-end md:px-12">
          <div className=" w-full h-12 flex justify-center lg:hidden">
          {
            location.pathname === '/cards' && (
              <SearchBar />           
            )
          }
          </div>
          <div
            className="border-solid px-4 py-2  bg-primary/20 hover:bg-primary hover:text-white hover:shadow-lg hover:cursor-pointer rounded-[6px] float-right"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </div>
        </div>
        {showFilters && <Filters />}
      </div>
      <div className="flex pt-[40px] justify-center w-full">
        <div
          className="flex flex-wrap gap-10 justify-center"
          style={{ maxWidth: "90vw" }}
        >
          {displayedItems.map((res) => (
            <div key={res.id} className="relative">
              <Card res={res} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={handlePageChange}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};

export default Cards;