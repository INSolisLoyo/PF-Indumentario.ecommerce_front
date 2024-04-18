import React from "react";
import missingImage from "../../img/logo.png";

const Missing = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-primary/40 p-20 m-5 gap-4 rounded-lg text-center space-y-3">
        <img src={missingImage} alt="Missing" className="mx-auto" />
        <h1 className="text-primary text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">
          404 - Not Found
        </h1>
        <p className="text-center text-3xl font-semibold">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default Missing;
