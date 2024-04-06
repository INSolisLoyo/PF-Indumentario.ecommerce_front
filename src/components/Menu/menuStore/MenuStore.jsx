import React from "react";
import { Link } from "react-router-dom";

const MenuStore = () => {

  return (
    <Link
      to="/cards"
      className="block uppercase font-extrabold cursor-pointer focus:outline-none"
    >
      Store
    </Link>
  );
};

export default MenuStore;



