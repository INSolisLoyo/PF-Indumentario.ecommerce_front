import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { name, setName } = useStore();

  // Cargar el término de búsqueda desde el store cuando el componente se monta
  useEffect(() => {
    setSearchTerm(name);
  }, []);

  const handleIconClick = () => {
    setIsActive(true);
  };

  const handleClearClick = () => {
    setSearchTerm("");
    setName("");
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setName(event.target.value);
  };

  return (
    <div className="flex searchbar w-5/6">
      {!isActive && (
        <IconButton onClick={handleIconClick}>
          <Search />
        </IconButton>
      )}
      {isActive && (
        <TextField
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search product..."
          className="inline-block w-full text-sm bg-primary/10 rounded-xl"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {searchTerm && (
                  <IconButton onClick={handleClearClick}>
                    <Clear />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;









// import React from "react";
// import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

// const SearchBar = () => {
//   const { name, setName } = useStore();

//   const handleSearch = () => {
//     setName(name);
//   };

//   return (
//     <div className=" flex searchbar w-5/6">
//       <form className="w-full flex justify-center items-center gap-1">
//         <div className="shrink-0"></div>

//         <label className="w-full inline-block">
//           <input
//             type="text"
//             className="inline-block w-full text-sm bg-primary/10 rounded-xl p-2"
//             placeholder="Search product..."
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>

//         <div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
