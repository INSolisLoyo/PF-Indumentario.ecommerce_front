import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "/src/api/db.json";

const OneSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  const descuentoAleatorio = Math.floor(Math.random() * 41) + 10;

  return (
    <Slider {...settings} className="w-[750px] c flex justify-center">
      {data.items.map((card) => (
        <div key={card.id} className="p-14 drop-shadow-md rounded-md relative">
          <img
            src={card.image}
            alt={card.name}
            className="w-[370px] h-[450px] rounded-md"
          />
          <p className=" text-xl tracking-wide italic flex justify-center items-center">
            <strong className="text-center ">Name:</strong> {card.name}
          </p>

          <div className="absolute top-0 left-0 bg-[#c17b60] text-white font-bold text-sm px-4 py-3 rounded-bl-md">
          -{descuentoAleatorio}% OFF
        </div>

        </div>
      ))}
    </Slider>
  );
};

export default OneSlider;






// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import data from "/src/api/db.json";

// const OneSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   return (
//     <Slider {...settings} className="w-[600px]">
//       {data.items.map((card) => (
//         <div key={card.id} className="p-2 shadow">
//           <img
//             src={card.image}
//             alt={card.name}
//             className="w-[300px] h-[450px]"
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default OneSlider;
