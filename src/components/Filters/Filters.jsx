import React, { useEffect } from "react";
import axios from "axios";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import chroma from "chroma-js";
import Swal from "sweetalert2";

const Filters = () => {
  const {
    material,
    setMaterial,
    colour,
    setColour,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    orderType,
    setOrderType,
    order,
    setOrder,
    setShowFilters,
    setFetchData,
    materialsOptions,
    setMaterialsOptions,
    coloursOptions,
    setColoursOptions,
    priceRange,
    setPriceRange,
    selectedMaterial,
    setSelectedMaterial,
    selectedColour,
    setSelectedColour,
  } = useStore();

  const animatedComponents = makeAnimated();

  useEffect(() => {
    fetchMaterials();
    fetchColours();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/materials"
      );
      setMaterialsOptions(response.data);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  const fetchColours = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/colours"
      );
      setColoursOptions(response.data);
    } catch (error) {
      console.error("Error fetching colours:", error);
    }
  };

  const handleReset = () => {
    Swal.fire({
      icon: "info",
      title: "Resetting filters...",
    });

    setMaterial([]);
    setColour([]);
    setMinPrice(0);
    setMaxPrice(400);
    setOrderType("");
    setOrder("");
    setFetchData(() => {});
    setSelectedMaterial([]); // Restablecer el valor seleccionado del componente Select de material
    setSelectedColour([]); // Restablecer el valor seleccionado del componente Select de color
    setPriceRange([0, 400]); // Restablecer el rango de precios

    Swal.fire({
      icon: "success",
      title: "Filters reset!",
    });
  };

  const toggleFilters = () => {
    setShowFilters(false);
  };

  const handleToggleMaterial = (selectedOptions) => {
    setSelectedMaterial(selectedOptions); // Actualizar el estado del valor seleccionado
    const selectedValues = selectedOptions.map((option) => option.value);
    const formattedMaterials = selectedValues.map((material) => {
      const words = material.split(' '); // Dividir el material en palabras
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalizar la primera letra de la primera palabra y convertir el resto en minúsculas
      );
      return capitalizedWords.join(' '); // Unir las palabras nuevamente
    });
    setMaterial(formattedMaterials);
  };
  


  const handleToggleColour = (selectedOptions) => {
    setSelectedColour(selectedOptions); // Actualizar el estado del valor seleccionado
    const selectedValues = selectedOptions.map((option) => option.value);
    const formattedColors = selectedValues.map((color) => {
      const words = color.split(' '); // Dividir el color en palabras
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalizar la primera letra de la primera palabra y convertir el resto en minúsculas
      );
      return capitalizedWords.join(' '); // Unir las palabras nuevamente
    });
    setColour(formattedColors);
  };
  

  const handlePriceRangeChange = (newValues) => {
    setPriceRange(newValues);
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  const optionsColour = coloursOptions
    ? coloursOptions.map((color) => ({
        value: color.toLowerCase(),
        label: color,
        color: color,
      }))
    : [];

  const optionsMaterial = materialsOptions
    ? materialsOptions.map((material) => ({
        value: material.toLowerCase(),
        label: material,
      }))
    : [];

  return (
    <div className="absolute w-[350px] text-black p-4 flex-col justify-center md:top-0 md:right-32 bg-primary/70 z-[50] rounded-[12px] font-RedHat shadow-md border border-primary ">
      <div className="border-b-[#C17B60] border-b-[1px]  pb-1 text-center text-2xl font-bold ">
        Search filters
      </div>
      <form className="text-lg">
        <div className="mt-4 ml-1">
          <div className="mb-4">
            <div className="font-bold">Material:</div>
            <Select
              closeMenuOnSelect={false}
              isMulti
              components={animatedComponents}
              options={optionsMaterial}
              value={selectedMaterial} // Asignar el valor seleccionado al componente Select de material
              onChange={handleToggleMaterial}
            />
          </div>

          <div className="mb-4">
            <div className="font-bold">Color:</div>
            <Select
              closeMenuOnSelect={false}
              isMulti
              components={animatedComponents}
              options={optionsColour}
              value={selectedColour} // Asignar el valor seleccionado al componente Select de color
              onChange={handleToggleColour}
              styles={{
                multiValue: (provided, state) => {
                  const color = state.data.color;
                  const lighterColor = chroma(color).alpha(0.2).css();
                  return {
                    ...provided,
                    backgroundColor: lighterColor,
                    borderRadius: "4px",
                    border: `1px solid ${color}`,
                    padding: "0px",
                  };
                },
                multiValueLabel: (provided, state) => ({
                  ...provided,
                  color: "black",
                }),
                multiValueRemove: (styles, { data }) => ({
                  ...styles,
                  color: data.color,
                  ":hover": {
                    backgroundColor: data.color,
                    color: "white",
                  },
                }),
              }}
            />
          </div>

          <div className="flex-col justify-between gap-1 mb-2">
            <div>
              <div className="font-bold">Price Range:</div>
              <input
                type="range"
                min="0"
                max="400"
                value={priceRange[0]}
                onChange={(e) =>
                  handlePriceRangeChange([
                    parseInt(e.target.value),
                    priceRange[1],
                  ])
                }
                className="w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
              />
              <div className="flex justify-between">
                <span>Min: ${priceRange[0]}</span>
                <span>Max: ${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div className="font-bold">Order by:</div>
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="name"
                    checked={orderType === "name"}
                    onChange={(e) =>
                      setOrderType(e.target.checked ? "name" : "")
                    }
                    className="mr-2"
                  />
                  Name
                </label>
              </div>
              <div className="w-1/2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="price"
                    checked={orderType === "price"}
                    onChange={(e) =>
                      setOrderType(e.target.checked ? "price" : "")
                    }
                    className="mr-2"
                  />
                  Price
                </label>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div className="font-bold flex">Order:</div>
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="asc"
                    checked={order === "asc"}
                    onChange={(e) => setOrder(e.target.checked ? "asc" : "")}
                    className="mr-2"
                  />
                  Asc
                </label>
              </div>
              <div className="w-1/2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="desc"
                    checked={order === "desc"}
                    onChange={(e) => setOrder(e.target.checked ? "desc" : "")}
                    className="mr-2"
                  />
                  Desc
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-white/70 hover:bg-white text-slate-900 font-bold py-2 px-4 rounded-2xl block mx-auto"
          onClick={handleReset}
        >
          Clear Filters
        </button>
        <button
          type="button"
          className="bg-white/70 hover:bg-white text-slate-900 font-bold py-2 px-4 rounded-2xl block mx-auto"
          onClick={toggleFilters}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Filters;