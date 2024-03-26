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
    setFetchData,
  } = useStore();

  const handleReset = () => {
    setCategory("");
    setMaterial([]);
    setColour([]);
    setMinPrice("");
    setMaxPrice("");
    setOrderType("");
    setOrder("");
    setFetchData(() => {});
  };

  const toggleFilters = () => {
    setShowFilters(false);
  };

  const handleToggleCategory = (value) => {
    setCategory(category === value ? "" : value);
  };

  const handleToggleMaterial = (value) => {
    if (material.includes(value)) {
      setMaterial(material.filter((item) => item !== value));
    } else {
      setMaterial([...material, value]);
    }
  };

  const handleToggleColour = (value) => {
    if (colour.includes(value)) {
      setColour(colour.filter((item) => item !== value));
    } else {
      setColour([...colour, value]);
    }
  };

  const handlePriceRangeChange = (newValues) => {
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  const handleToggleOrderType = (value) => {
    setOrderType(orderType === value ? "" : value);
  };

  const handleToggleOrder = (value) => {
    setOrder(order === value ? "" : value);
  };

  return (
    <div className="absolute text-black flex-col justify-center right-[176px] mt-[40px] w-[281px] p-3 h-[650px] bg-[#E9CFC6] z-[50] rounded-[12px] font-RedHat shadow-md border border-primary ">
      <div className="border-b-[#C17B60] border-b-[1px]  pb-1 text-center text-2xl font-bold ">
        Search filters
      </div>
      <form className="text-lg">
        <div className="mt-4 ml-1">
          <div className="mb-2">
            <div className="font-bold">Category:</div>
            <div className="flex gap-3">
              <label>
                <input
                  type="checkbox"
                  checked={category === "Women"}
                  onChange={() => handleToggleCategory("Women")}
                />{" "}
                Women
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={category === "Men"}
                  onChange={() => handleToggleCategory("Men")}
                />{" "}
                Men
              </label>
            </div>
          </div>

          <div className="mb-2">
            <div className="font-bold">Material:</div>
            <div className="flex gap-3">
              {["Cotton", "Polyester"].map((materialType) => (
                <label key={materialType}>
                  <input
                    type="checkbox"
                    value={materialType}
                    checked={material.includes(materialType)}
                    onChange={() => handleToggleMaterial(materialType)}
                  />{" "}
                  {materialType}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <div className="font-bold">Color:</div>
            <div className="flex flex-wrap gap-2">
              {["Red", "Blue", "Green", "Gray", "Black"].map((color) => (
                <label key={color}>
                  <input
                    type="checkbox"
                    value={color}
                    checked={colour.includes(color)}
                    onChange={() => handleToggleColour(color)}
                  />{" "}
                  {color}
                </label>
              ))}
            </div>
          </div>

          <div className="flex-col justify-between gap-1 mb-2">
            <div>
              <div className="font-bold">Price Range:</div>
              <div className="flex gap-3">
              <div>Min:</div>
              <input
                type="range"
                min="0"
                max="600"
                value={minPrice}
                onChange={(e) =>
                  handlePriceRangeChange([e.target.value, maxPrice])
                }
                style={{ width: "160px" }}
              />
              <span>{minPrice}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div>Max:</div>
              <input
                type="range"
                min="0"
                max="600"
                value={maxPrice}
                onChange={(e) =>
                  handlePriceRangeChange([minPrice, e.target.value])
                }
                style={{ width: "160px" }}
              />
              <span>{maxPrice}</span>
            </div>
          </div>

          <div className="mb-2">
            <div className="font-bold">Order by:</div>
            <div className="flex gap-3">
              <label>
                <input
                  type="checkbox"
                  checked={orderType === "name"}
                  onChange={() => handleToggleOrderType("name")}
                />{" "}
                Name
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={orderType === "price"}
                  onChange={() => handleToggleOrderType("price")}
                />{" "}
                Price
              </label>
            </div>
          </div>

          <div className="mb-2">
            <div className="font-bold">Order:</div>
            <div className="flex gap-3">
              <label>
                <input
                  type="checkbox"
                  checked={order === "asc"}
                  onChange={() => handleToggleOrder("asc")}
                />{" "}
                Ascending
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={order === "desc"}
                  onChange={() => handleToggleOrder("desc")}
                />{" "}
                Descending
              </label>
            </div>
          </div>
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
        onClick={toggleFilters}
      >
        Close
      </button>
    </div>
  );
};

export default Filters;