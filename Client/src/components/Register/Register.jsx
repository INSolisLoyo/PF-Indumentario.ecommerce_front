import React from "react";
import NavBar from "../Navbar/Navbar";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Register() {
  return (
    <div className="flex justify-center items-center h-full pt-[60px] lg:pt-[100px] overflow-hidden ">
      <div className="text-center">
        <h1 className="text-[25px] ">Register</h1>
        <div className="form w-[800px] h-[500px] mt-[30px] lg:mt-[30px] ">
          <form action="">
            <div className="name-lastname flex  lg:flex-row justify-center ">
              <div className="name mb-[20px] lg:mr-[50px] mr-[15px]  ">
                <label className="block mb-[5px] " htmlFor="">
                  NAME
                </label>
                <input
                  type="text"
                  className=" bg-primary rounded-lg p-2 outline-none  w-[150px] lg:w-[190px] text-center "
                />
              </div>
              <div className="lastname mb-[20px] lg:ml-[50px] ">
                <label className="block mb-[5px] " htmlFor="">
                  LASTNAME
                </label>
                <input
                  type="text"
                  className=" bg-primary rounded-lg p-2 outline-none  w-[150px] lg:w-[190px] text-center "
                />
              </div>
            </div>

            <div className="password block mb-[20px] lg:mt-[20px] ">
              <label className="block mb-[5px] " htmlFor="">
                PASSWORD
              </label>
              <input
                type="password"
                className=" bg-primary rounded-lg p-2 outline-none w-[200px] lg:w-[250px] text-center "
              />
            </div>

            <div className="email block m-1 ">
              <label className="block mb-[5px] " htmlFor="">
                EMAIL
              </label>
              <input
                type="email"
                className=" bg-primary rounded-lg p-2 outline-none w-[200px] lg:w-[250px] text-center "
              />
            </div>

            <div className="checkboxs text-[10px] mt-[30px] text-left ml-[270px] tracking-[1px]">
              <label className=" mr-[5px] " htmlFor="">
                I WANT TO RECEIVE INFORMATION IN MY EMAIL
              </label>
              <input className="align-middle outline-none " type="checkbox" />
            </div>

            <div className="checkboxs text-[10px] mt-[10px] text-left ml-[270px] tracking-[1px] ">
              <label className=" mr-[97px] " htmlFor="">
                I ACCEPT THE PRIVACY POLICY
              </label>
              <input className="align-middle outline-none " type="checkbox" />
            </div>

            <div className="button mt-[20px] bg-primary w-[90px] p-2 rounded-lg m-auto ">
              <input type="submit" value="Sign up" />
            </div>

            <div className=" flex justify-center mt-[10px] ">
              <div className="bar-1 w-[100px] h-[1px] bg-black  "></div>
              <p className="align-middle">or sign up with</p>
              <div className="bar-2 w-[100px] h-[1px] bg-black "></div>
            </div>

            <div className="socials">
              <div className="fb">
                <button >
                <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#0c5be4",}} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
