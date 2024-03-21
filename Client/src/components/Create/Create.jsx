import React from "react";

export default function Create() {
  return (

    <div className="contenedor h-screen w-full m-auto text-center pt-[60px]  ">
      <div className="title">
        <h1 className="text-black text-xl ">Create a product</h1>
      </div>
      <div className="container-form mt-[25px] ">
        <form action="">
          <div className="product pt-[10px] ">
            <label className="mr-[10px] " htmlFor="">Product</label>
            <input type="text" className=" bg-primary rounded-lg p-1 " />
          </div>
        </form>
      </div>
    </div>

  );
}
