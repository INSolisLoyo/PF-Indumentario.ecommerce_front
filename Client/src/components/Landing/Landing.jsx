import React from "react";
import Title from "./title";
import Women from "./Women";
import Men from "./Men";

export default function Landing() {
  return (
    
   <div>
      <Title />
      <div className="flex-col justify-center content-center">
        <Women />
        <Men />
      </div>
   </div>
   
  );
}
