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
    <div className="flex gap-10 flex-wrap justify-center w-[90%]">
      {items.map((res) => (
        <div key={res.id} className="relative">
          <Card res={res} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
