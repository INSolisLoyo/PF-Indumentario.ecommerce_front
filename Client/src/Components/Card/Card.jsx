import React from "react";

const Card = ({ res }) => {
  return (
    <div>
      <img
        src={res.image}
        alt=""
        className="max-h-[390px] max-w-[280px] rounded-[12px]"
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
        <div className="text-xl font-extrabold">{res.name}</div>
        <div className="text-xl font-extrabold">{res.price}</div>
      </div>
      <div>{res.brand}</div>
    </div>
  );
}

export default Card;
