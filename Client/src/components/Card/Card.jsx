import React from "react";
import { Link } from "react-router-dom";

const Card = ({ res }) => {
  const handlerClick = () => {
    return alert("Hola");
  };

  return (
    <Link to={`/detail/${res.id}`} >
      <div className="font-RedHat">
        <img
          src={res.images[0]}
          alt=""
          className="h-[390px] w-[280px] rounded-[12px]"
        />
        <div className="md:cursor-pointer absolute top-1 right-1 p-1 bg-orange-100 my-2 mr-2 border-[1px] border-orange-950 rounded-full w-[40px] h-[40px]">
          <span
            role="img"
            aria-label="corazon"
            style={{
              fontSize: "23px",
              verticalAlign: "middle",
              display: "inline-block",
              lineHeight: "30px",
            }}
          >
            🤎
          </span>{" "}
        </div>
        <div className="flex justify-between">
          <div className="text-xl font-extrabold">{res.category}</div>
          <div className="text-xl font-extrabold">${res.price}</div>
        </div>
        <div>{res.category}</div>
      </div>
    </Link>
  );
};

export default Card;
