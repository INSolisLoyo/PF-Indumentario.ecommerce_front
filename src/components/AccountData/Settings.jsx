import React, { useState, useEffect} from "react";
import userStore from "../GlobalStoreZustand/UserStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";

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

    const editDataContact = () => {

    }

    const editUserData = () => {

    }

    const editPayment = () => {

    }

    return (
        <div className="w-full p-16 rounded-xl flex flex-col gap-4 items-center justify-center">

          {/* Información de contacto */}
          <div className="w-full bg-white p-4 rounded-lg flex flex-col gap-4 font-RedHat">

            <h1 className="text-xl font-semibold text-black/70">Personal Information</h1>
            <div className="w-full h-[2px] bg-gray-300"></div>

            <div className="flex flex-col gap-8 w-full">

                {/* Nombre y fecha de cumpleaños */}
                {/* User Data */}
                <div className="w-full flex justify-around">

                    {/* Nombre */}
                    <div className="flex flex-col gap-2">

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

                    </div>

                    {/* Birthdate */}
                    <div className="flex flex-col gap-2 justify-center items-center w-1/4 h-1/4 ">
                        
                        <label htmlFor="">Date of birthdate</label>
                        <input name="birthdate" id="birthdate" type="date" value={form.birthdate}
                          className="cursor-pointer p-2 rounded-lg border-gray-300"/>
                        
                        <button onClick={editUserData} className="w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center">Edit</button>

                    </div>

                </div>

                <div className="w-full h-[2px] bg-gray-300"></div>

                {/* Data Contact */}
                <div className="w-full flex justify-around">
                    
                    {/* Email y contraseña */}
                    <div className="flex flex-col gap-2">

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
                    </div>

                    {/* Teléfono */}
                    <div className="flex flex-col gap-2 justify-center items-center w-1/4 h-1/4">

                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" value={form.phone} className={`w-full py-2 px-4 border ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          } rounded-xl flex gap-4 justify-center items-center`}/>
                        <button onClick={editDataContact} className="mt-8 w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center">Edit</button>
                        {errors.phone && (
                          <span className="text-red-500">{errors.phone}</span>
                        )}

                    </div>

                </div>

            </div>

          </div>
          
          {/* Información de compra */}
          <div className="w-full bg-white p-4 rounded-lg flex flex-col gap-4 font-RedHat">
            
            <h1 className="text-xl font-semibold text-black/70">Payment Information</h1>
            <div className="w-full h-[2px] bg-gray-300"></div>

            {/*formulario*/}
            <div className="w-full flex justify-around">
              
              {/* Dirección de envío */}
              <div className="flex flex-col gap-2">

                {/* Address */}
                <label htmlFor="password">Address</label>
                <input
                    className={`w-full py-2 px-4 border ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    } rounded-xl flex gap-4 justify-center items-center`}
                    type="text"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                />
                {errors.address && (
                  <span className="text-red-500">{errors.address}</span>
                )}

                <label htmlFor="state">City</label>
                <input
                    className={`w-full py-2 px-4 border ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    } rounded-xl flex gap-4 justify-center items-center`}
                    type="text"
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                />
                    {errors.city && (
                      <span className="text-red-500">{errors.city}</span>
                )}

                <label htmlFor="state">State</label>
                <input
                    className={`w-full py-2 px-4 border ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    } rounded-xl flex gap-4 justify-center items-center`}
                    type="text"
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                />
                    {errors.state && (
                      <span className="text-red-500">{errors.state}</span>
                )}

                <label htmlFor="street">Country</label>
                <input
                    className={`w-full py-2 px-4 border ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    } rounded-xl flex gap-4 justify-center items-center`}
                    type="text"
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                />
                    {errors.country && (
                      <span className="text-red-500">{errors.country}</span>
                )}

                <label htmlFor="state">Zip Code</label>
                <input
                    className={`w-full py-2 px-4 border ${
                      errors.zipcode ? "border-red-500" : "border-gray-300"
                    } rounded-xl flex gap-4 justify-center items-center`}
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={form.zipcode}
                    onChange={handleChange}
                />
                    {errors.zipcode && (
                      <span className="text-red-500">{errors.zipcode}</span>
                )}    
                

              </div>
              
              {/* Información de pago */}
              <div className="flex flex-col gap-2 justify-center items-center w-1/4 h-1/4 ">

                <label>Payment options</label>
                <button className=" w-full py-2 border border-gray-300 bg-[#fae8e6] rounded-xl flex justify-center items-center cursor-not-allowed" disabled="true"><FontAwesomeIcon icon={faCcPaypal} size="2xl"/></button>

                <button onClick={editPayment} className="mt-8 w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center">Edit</button>
                    
              </div>

            </div>
          </div>

        </div>
    )
}

export default Settings;