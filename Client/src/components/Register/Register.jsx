import React from "react";
import NavBar from "../Navbar/Navbar"

export default function Register() {
  return (
    <>
      {/* <NavBar /> */}
      <div
        className="container w-screen h-[90vh] font-RedHat "
        style={{
          backgroundImage: "linear-gradient(to top, #feada6 0%, #f5efef 30%)",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-[25px] " >Register</h1>
            <div className="form w-[800px] h-[500px] mt-[30px] ">
              <form action="">
                <div className="name-lastname flex justify-center">
                  <div className="name mb-[20px] mr-[50px] ">
                    <label className="block mb-[5px] " htmlFor="">
                      NAME
                    </label>
                    <input type="text" className=" bg-primary rounded-lg p-2 outline-none " />
                  </div>
                  <div className="lastname mb-[20px] ml-[50px] ">
                    <label className="block mb-[5px] " htmlFor="">
                      LASTNAME
                    </label>
                    <input type="text" className=" bg-primary rounded-lg p-2 outline-none " />
                  </div>
                </div>
                <div className="password block mb-[20px] mt-[20px] ">
                  <label className="block mb-[5px] " htmlFor="">
                    PASSWORD
                  </label>
                  <input type="password" className=" bg-primary rounded-lg p-2 outline-none w-[250px] " />
                </div>

                <div className="email block m-1 ">
                  <label className="block mb-[5px] " htmlFor="">
                    EMAIL
                  </label>
                  <input type="email" className=" bg-primary rounded-lg p-2 outline-none w-[250px] " />
                </div>

                <div className="checkboxs text-[10px] mt-[30px] text-left ml-[270px] tracking-[1px]">
                  <label className=" mr-[5px] " htmlFor="">I WANT TO RECEIVE INFORMATION IN MY EMAIL</label>
                  <input className="align-middle outline-none " type="checkbox" />
                </div>

                <div className="checkboxs text-[10px] mt-[10px] text-left ml-[270px] tracking-[1px] ">
                  <label className=" mr-[97px] " htmlFor="">I ACCEPT THE PRIVACY POLICY</label>
                  <input className="align-middle outline-none " type="checkbox" />
                </div>

              <div className="button mt-[20px] bg-primary w-[90px] p-2 rounded-lg m-auto ">
                <input  type="submit"  />

              </div>  

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
