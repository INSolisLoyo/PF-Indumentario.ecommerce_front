import React from "react";
import SaleOneSlider from "../Oneslider/SaleOneSlider";

//pl-44

const Sale = () => {
  return (
    <div className="lg:w-5/6 lg:mt-20 mx-auto font-RedHat flex flex-col align-center md:flex-row space-x-5 border-l-500 p-4 justify-center">
      <div className="text-center p-10 border-8 border-primary border-double rounded-lg flex flex-col justify-center  w-full h-auto md:w-2/6">
        <p className="text-base text-black-600/50 font-bold italic ">CLOTHES</p>
        <h2 className=" text-6xl tracking-[.25em] font-bold text-gray-800 my-40">
          SALE
        </h2>
        <p>ENDS 15.05.2024</p>
      </div>

      <div className="mt-50 flex justify-center">
        <SaleOneSlider />
      </div>
    </div>
  );
};

export default Sale;
