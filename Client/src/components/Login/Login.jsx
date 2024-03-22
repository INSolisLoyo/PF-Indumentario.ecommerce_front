import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onClose }) {


  const navigate = useNavigate();

  return (
    <div className="absolute top-16 right-2 p-4 border-none rounded-lg shadow w-[350px] h-[350px] text-center shadow-slate-500 font-RedHat bg-white max-lg:right-2 max-lg:w-[320px] ">
      <h2 className="text-black text-xl font-bold ">Login</h2>
      <div className="bg-black w-[250px] p-[0.8px] m-auto mt-2 mb-3 "></div>
      <form className=" pb-4 " action="">
        <label
          className="block  text-left ml-12 uppercase text-[13px] tracking-[1px]  "
          htmlFor=""
        >
          Username
        </label>
        <input
          className="border-none rounded-lg bg-primary mb-5 text-white outline-none p-1 w-[220px] "
          type="text"
        />

        <label
          className="block text-[13px] text-left ml-12 uppercase tracking-[1px]  "
          htmlFor=""
        >
          Password
        </label>
        <input
          className="border-none rounded-lg bg-primary mb-2 text-white outline-none p-1 w-[220px] "
          type="password"
        />
      </form>
      <button
        className="bg-primary p-2 w-[80px] rounded-xl mb-4 uppercase "
        onClick={onClose}
      >
        GO
      </button>
      <div className="need-acount">
        <p className="uppercase text-[12px]">
          Do u need an acount?{" "}
          <a className=" text-blue-700 uppercase " href="/register">
            Click here
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
