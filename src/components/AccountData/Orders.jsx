import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(-1); // retroceder a la página anterior
    window.scrollTo(0, 0); // Mover la ventana al principio de la página
  };
  return (
    <div className="pt-40">
      <div className="absolute inset-x-[370px] top-[98px]">
        <button
          className=" px-6 py-0 leading-5 text-black transition-colors duration-200 transform bg-secondary/35 rounded-md hover:bg-primary hover:text-white italic font-bold focus:outline-none focus:bg-gray-600 "
          onClick={handleGoBackClick}
        >
          ← Go Back
        </button>
      </div>
      <h1>Orders</h1>
    </div>
  );
};

export default Orders;
