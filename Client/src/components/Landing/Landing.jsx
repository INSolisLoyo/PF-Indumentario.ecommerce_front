import React from "react";
import Title from "./title";
import Women from "./Women";
import Men from "./Men";
import Sale from "../sale/Sale"

export default function Landing() {
  return (
    <div className="pt-28 w-full flex flex-col gap-8">
      <Title />
      <Women />
      <Men />
      <Sale/>
    </div>
  );
}
