import React from "react";
import { useMenuWomenStore } from "../../UseMenuStore/UseMenuStore";

const MenuWomen = () => {
  const { isOpen, toggleMenuWomen } = useMenuWomenStore();

  const backgroundStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.85)", // bg-slate-400 con opacidad 50%
  };

  return (
    <div>
      <div
        onClick={toggleMenuWomen}
        className="block font-RedHat cursor-pointer focus:outline-none "
      >
        Women
      </div>

      {isOpen && (
        <div
          style={backgroundStyle}
          className="absolute flex gap-[50px] p-11 z-10 top-[52px] h-[350px] left-0 mt-1 w-full bg-white shadow-lg "
        >
          <ul>
            <li className="mb-3">
              <a className="uppercase font-bold" href="#">
                Top
              </a>
            </li>
            <li>
              <a href="#">Apple Orange</a>
            </li>
            <li>
              <a href="#">Pineapple Carrot</a>
            </li>
            <li>
              <a href="#">Fresh OJ</a>
            </li>
            <li>
              <a href="#">Orange Carrot</a>
            </li>
            <li>
              <a href="#">Apple Carrot Madness</a>
            </li>
            <li>
              <a href="#">Pear Kiwi Cooler</a>
            </li>
            <li>
              <a href="#">Apple Orange</a>
            </li>
            <li>
              <a href="#">Pineapple Carrot</a>
            </li>
          </ul>
          <ul>
            <li className="mb-3">
              <a className="uppercase font-bold" href="#">
                Bottom
              </a>
            </li>
            <li>
              <a href="#">Apple Orange</a>
            </li>
            <li>
              <a href="#">Pineapple Carrot</a>
            </li>
            <li>
              <a href="#">Fresh OJ</a>
            </li>
            <li>
              <a href="#">Orange Carrot</a>
            </li>
            <li>
              <a href="#">Apple Carrot Madness</a>
            </li>
            <li>
              <a href="#">Pear Kiwi Cooler</a>
            </li>
          </ul>
          <ul>
          <li className="mb-3">
              <a className="uppercase font-bold" href="#">
                Left
              </a>
            </li>
            <li>
              <a href="#">Apple Orange</a>
            </li>
            <li>
              <a href="#">Pineapple Carrot</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuWomen;
