import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import SearchBar from "../Navbar/SearchBar";
import axios from "../../axios/axios";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import CustomPagination from "../CustomPagination/CustonPagination";
import useCartStore from "../GlobalStoreZustand/useCartStore";

const URL = "/product";
const PRODUCTS_PER_PAGE = 10;

const Cards = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const gender = queryParams.get("gender");
  const category = queryParams.get("category");

  let {
    items,
    totalItems,
    showFilters,
    currentPage,
    name,
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
    setMinPrice,
    setMaxPrice,
    setMaterial,
    setColour,
    setOrderType,
    setOrder
  } = useStore();

  const [displayedItems, setDisplayedItems] = useState([]);
  const cart = useCartStore((state) => state.cart);

  const fetchData = async () => {
    try {
      const response = await axios.post(URL, {
        name,
        minPrice,
        maxPrice,
        material,
        colour,
        gender: gender ? gender : undefined,
        category: category ? category : undefined,
        productLimit: PRODUCTS_PER_PAGE,
        pageNumber: currentPage,
        orderType,
        order
      });
      setItems(response.data);
      setTotalItems(response.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log("Error response:", error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [
    name,
    currentPage,
    minPrice,
    maxPrice,
    material,
    colour,
    gender,
    category,
    orderType,
    order
  ]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, items.length);
    setDisplayedItems(items.slice(startIndex, endIndex));
  }, [items, currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex-col pt-[120px] justify-center font-RedHat">
      <div className="flex justify-around relative">
        <div className="flex flex-col gap-4 items-center justify-center w-full h-auto lg:flex-row lg:justify-end md:px-12">
          <div className=" w-full h-12 flex justify-center lg:hidden">
            {location.pathname === "/cards" && <SearchBar />}
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
      <div className="flex pt-[40px] pb-8 justify-center w-full">
        <div
          className="flex flex-wrap gap-10 justify-center"
          style={{ maxWidth: "90vw" }}
        >

          {displayedItems.length > 0 ? (
            displayedItems.map((res) => (
              <div key={res.id} className="relative">
                <Card res={res} />
              </div>
            ))
          ) : (
            <p className="text-xl text-gray-400">There are no items available with the selected filters.</p>
          )}

        </div>
      </div>

      <div className="flex justify-center mt-4">
        {displayedItems.length > 0 ? (
          <CustomPagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalItems / PRODUCTS_PER_PAGE)}
            onChangePage={handlePageChange}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Cards;
