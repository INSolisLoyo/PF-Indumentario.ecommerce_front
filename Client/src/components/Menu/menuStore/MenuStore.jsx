import React from "react";
import { useMenuStoreStore } from "../../UseMenuStore/UseMenuStore";

const MenuStore = () => {
  const { isOpen, toggleMenuStore } = useMenuStoreStore();

  const backgroundStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  };

  return (
    <div>
      <div
        onClick={toggleMenuStore}
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        <a className="" href="/cards">
          STORE
        </a>{" "}
      </div>
    </div>
  );
};

export default MenuStore;
