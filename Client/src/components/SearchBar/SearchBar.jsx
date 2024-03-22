import React, { useState } from "react";
import useSearchStore from "../../Zustand/store";
import axios from "axios";

const SearchBar =() => {

    const SearchBar = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const setSearchTermStore = useSearchStore(state => state.setSearchTerm);
        const setSearchResultsStore = useSearchStore(state => state.setSearchResults);
    

    const handleSearch = async (event) => {
        const term = event.target.value
        setSearchTerm(term);

        if (term) {
            try {
              const response = await fetch(`http://localhost:3001/products?search=${searchTerm}`);
              const data = await response.json();
              setSearchResultsStore(data);
            } catch (error) {
              console.error('Error when searching for products:', error);
            }
         }    
}




    return(
        <div className="searchbar hidden lg:flex ">
        <form className="flex items-center space-x-6">
          <div className="shrink-0"></div>
          <label className="block">
            <input
              type="text"
              className="block w-full text-sm bg-purple-200 rounded-xl p-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product..."
            />
          </label>
          <button>
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
          </button>

        </form>
       
      </div>
    )
}}

export default SearchBar; 
