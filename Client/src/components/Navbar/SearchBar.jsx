import React from "react";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

const SearchBar = () => {
  const { name, setName } = useStore();

  const handleSearch = () => {
    setName(name);
  };

  return (
    <div className=" searchbar hidden lg:flex ">
      <form className="flex items-center gap-1">
        <div className="shrink-0"></div>

        <label className="block">
          <input
            type="text"
            className="block w-full text-sm bg-purple-200 rounded-xl p-1"
            placeholder="Search product..."
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
