import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";

const URL = "http://localhost:3001/products";

const Cards = () => {
  const [items, setItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

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
          {items.map((res) => (
            <div key={res.id} className="relative">
              <Card res={res} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
