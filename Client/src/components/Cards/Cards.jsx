import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const URL = "http://localhost:5173/src/api/db.json";

const Cards = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <div className="pt-[120px] flex justify-center w-full">
      <div className="flex flex-wrap gap-10 justify-center" style={{ maxWidth: "90vw" }}>
        {items.map((res) => (
          <div key={res.id} className="relative">
            <Card res={res} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
