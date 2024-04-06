import React from "react";
import { Link } from "react-router-dom";

const MenuStore = () => {

  return (
    <div>
      <Link
        to="/cards"
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        Store
      </Link>
    </div>
  );
};

export default MenuStore;


