import React from "react";
import { useNavigate } from "react-router-dom";
import google from "../../assets/google.png";

export default function Login({ onClose }) {
  // Estilo en línea para el color de fondo con opacidad
  const backgroundStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // bg-slate-400 con opacidad 50%
  };

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
          className="border-none rounded-lg bg-primary/50 mb-5 text-white outline-none p-1 w-[220px] "
          type="text"
        />

        <label
          className="block text-[13px] text-left ml-12 uppercase tracking-[1px]  "
          htmlFor=""
        >
          Password
        </label>
        <input
          className="border-none rounded-lg bg-primary/50 mb-2 text-white outline-none p-1 w-[220px] "
          type="password"
        />
      </form>
      <button
        className="bg-primary/50 p-2 w-[80px] rounded-xl mb-4 uppercase "
        onClick={onClose}
      >
        GO
      </button>

      <div className="login-socials items-center mb-[8px]  ">
        <a href="http://localhost:3001/auth/facebook">
          <button className="w-[60px] mr-[5px] shadow-lg shadow-gray-300 p-1 rounded-lg bg-blue-700  ">
            <img
              className=" w-[20px] m-auto "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
              alt=""
            />
          </button>
        </a>

        <a href="http://localhost:3001/google/callback">
          <button className="w-[60px] ml-[5px] shadow-lg shadow-gray-300 rounded-lg  p-1 border border-slate-200  ">
            <img
              className="w-[20px] m-auto "
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google Icon"
            />
          </button>
        </a>
      </div>

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
