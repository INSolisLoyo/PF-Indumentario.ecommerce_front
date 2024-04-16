import React, { useState, useEffect} from "react";
import userStore from "../GlobalStoreZustand/UserStore";
userStore;

const Settings = () => {

    const [form, setForm] = useState({
        name: '',
        lastname: '',
        birthdate: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        birthdate: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
    });

    const handleChange = () => {

    }

    return (
        <div className="p-4 rounded-xl flex flex-col gap-4 items-center justify-center bg-white">


            <h1 className="text-2xl text-center font-RedHat font-semibold text-gray-500">My Account</h1>

            <div className="w-full h-[2px] bg-gray-300"></div>

            <div className="flex flex-col gap-8 w-full">

                {/* Nombre y fecha de cumpleaños */}
                <div className="w-full flex justify-around">

                    {/* Nombre */}
                    <form className="flex flex-col gap-2">

                      <label htmlFor="name">Name</label>
                      <input
                          className={`w-full py-2 px-4 border ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          } rounded-xl flex gap-4 justify-center items-center`}
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="text-red-500">{errors.name}</span>
                      )}

                      <label htmlFor="name">Lastname</label>
                      <input
                          className={`w-full py-2 px-4 border ${
                            errors.lastname ? "border-red-500" : "border-gray-300"
                          } rounded-xl flex gap-4 justify-center items-center`}
                          type="text"
                          id="name"
                          name="name"
                          value={form.lastname}
                          onChange={handleChange}
                      />
                          {errors.lastname && (
                            <span className="text-red-500">{errors.lastname}</span>
                          )}

                    </form>

                    {/* Birthdate */}
                    <form className="flex flex-col gap-2 justify-center items-center w-1/4 h-1/4 ">
                        
                        <label htmlFor="">Date of birthdate</label>
                        <input name="birthdate" id="birthdate" type="date" value={form.birthdate}
                          className="cursor-pointer p-2 rounded-lg border-gray-300"/>

                    </form>



                </div>

                <div className="w-full h-[2px] bg-gray-300"></div>

                {/* Datos de contacto */}
                <div className="w-full flex justify-around">
                    
                    {/* Email y contraseña */}
                    <form className="flex flex-col gap-2">

                        <label htmlFor="email">Email</label>
                        <input
                            className={`w-full py-2 px-4 border ${
                              errors.email ? "border-red-500" : "border-gray-300"
                            } rounded-xl flex gap-4 justify-center items-center`}
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="text-red-500">{errors.email}</span>
                        )}

                        <label htmlFor="password">Password</label>
                        <input
                            className={`w-full py-2 px-4 border ${
                              errors.password ? "border-red-500" : "border-gray-300"
                            } rounded-xl flex gap-4 justify-center items-center`}
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                            {errors.password && (
                              <span className="text-red-500">{errors.password}</span>
                            )}
                    </form>

                    {/* Teléfono */}
                    <form className="flex flex-col gap-2 justify-center items-center w-1/4 h-1/4 r">

                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" value={form.phone} className={`w-full py-2 px-4 border ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          } rounded-xl flex gap-4 justify-center items-center`}/>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Settings;