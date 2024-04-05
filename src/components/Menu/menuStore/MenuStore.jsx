import React from "react";
import { Link } from "react-router-dom";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";

const MenuStore = () => {
  const { storeMenuOpen, toggleStoreMenu, closeAllMenus } = useMenuStore();

  const handleStoreClick = () => {
    toggleStoreMenu();
    closeAllMenus();
  };

  return (
    <div>
      <Link
        to="/cards"
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
        onClick={handleStoreClick}
      >
        Store
      </Link>
    </div>
  );
};

export default MenuStore;


