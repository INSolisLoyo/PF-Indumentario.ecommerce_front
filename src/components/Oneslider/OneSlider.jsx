import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OneSlider = ({ category }) => {
  const [data, setData] = useState([]);
  const URL = "http://localhost:3001/products"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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

  const filteredItems = data.filter((item) => item.category === category);

  return (
    <Slider
      {...settings}
      className=" w-[280px] sm:w-[560px] md:w-[560px] lg:w-[840px] xl:w-[840px] 2xl:w-[1120px]"
    >
      {filteredItems.map((card) => (
        <div key={card.id} className="p-4">
          <img
            src={card.images}
            alt={card.name}
            className="w-[100%] h-auto rounded-md sm:h-[380px] md:h-[380px]"
          />
        </div>
      ))}
    </Slider>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        left: "-20px",
        zIndex: "10",
        top: "50%",
        transform: "translateY(-50%)",
        position: "absolute",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="text-primary text-3xl font-extrabold">{"<"}</div>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        right: "-20px",
        zIndex: "10",
        top: "50%",
        transform: "translateY(-50%)",
        position: "absolute",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="text-primary text-3xl font-extrabold">{">"}</div>
    </div>
  );
};

export default OneSlider;

