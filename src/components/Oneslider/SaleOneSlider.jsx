import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../../axios/axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SaleOneSlider = () => {
  const [data, setData] = useState([]);
  const URL = "/product";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const generateDiscount = () => {
    const discounts = [10, 15, 20, 30, 35, 40, 50];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  const applyDiscount = (price, discount) => {
    return price * (1 - discount / 100);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
    },
    {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
};

  

  return (
    <Slider
      {...settings}
      className=" pt-[20px] w-[280px] sm:w-[560px] md:w-[560px] lg:w-[840px] xl:w-[840px] 2xl:w-[1120px]"
    >
      {data.map((card) => (
        <div key={card.id} className="p-4">
          <div className="relative top-0 right-0 bg-[#c17b60] text-white text-right font-RedHat font-bold rounded-full px-2 py-1">
            {generateDiscount()}% OFF
          </div>
          <img
            src={card.images}
            alt={card.name}
            className="w-[100%] h-auto rounded-md sm:h-[380px] md:h-[380px]"
            />

          <div className="mt-2 font-semibold italic">{card.name.split(" ").slice(-3).join(" ")}</div>
          <div className="flex mt-2">
            <span className="line-through mr-2">${card.price}</span>
            <span>
              ${applyDiscount(card.price, generateDiscount()).toFixed(2)}
            </span>
          </div>

        </div>
      ))}
    </Slider>
  );
};

export default SaleOneSlider;