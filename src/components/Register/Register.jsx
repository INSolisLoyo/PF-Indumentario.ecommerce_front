import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "../../axios/axios"
import Swal from "sweetalert2";
import validate from "../Register/validation";

const URL = "/user";

//! biennnnnnnnnnnnnnnnnnn
export default function Register() {

  const [ desabledButton, setDesabledButton ] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zipcode: "",
    /* picture: null */
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zipcode: "",
  });

  


  useEffect( () =>{

    let errorsExist = false
    let formCompleted = true;
    
    for (let prop in errors){
        if ( errors[prop] !== '') errorsExist = true;
    }

    for (let prop in formData){
        if( formData[prop] === '') formCompleted = false;
    }

    if(!errorsExist && formCompleted){
        setDesabledButton(false)
    }

}, [formData])


  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });

    validate(name, value, errors, setErrors)


    /* setErrors(validationSignUp({ ...formData, [name]: value })); */
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

  

      try {

        console.log("Datos del formulario a enviar:", formData);

        const response = await axios.post(
          URL,
          formData,
          
        );        

        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "The user successfully registered",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error submitting form: " + response.statusText,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error submitting form: " + error.message,
        });
      }

      
    } 



  return (
    <div className="min-h-screen p-6 pt-[80px] flex items-center justify-center font-RedHat">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          

          <div className="bg-primary/30 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="font-medium text-black ">
                <p className="text-3xl">Sign In</p>
                <p className="text-xl">Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2 text-2xl">
              <form  onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 h-full">
                  <div className="names flex md:flex-row flex-col md:flex-grow ">
                    <div className="md:flex-grow flex flex-col md:flex-row items-start ">


                      <div className="md:mr-4 lg:mr-[30px] ">
                        <label className="text-xl" htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full md:w-full bg-gray-50 lg:w-[300px] "
                        value={formData.name}
                        onChange={handleChange}
                         />
                         {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                      )}
                      </div>


                      <div>
                        <label className="text-xl" htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" id="lastname" className="h-10 border mt-1 rounded px-4 w-full md:w-full bg-gray-50 lg:w-[300px]"
                        value={formData.lastname}
                        onChange={handleChange}
                         />
                        {errors.lastname && (
                        <p className="text-red-500">{errors.lastname}</p>
                      )}
                      </div>
                    </div>
                  </div>


                  <div className="md:col-span-5">
                    <label className="text-xl" htmlFor="birthdate">Date of Birth</label>
                    <input type="date"  name="birthdate" id="birthdate" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    value={formData.birthdate}
                    onChange={handleChange}

                    />
                    {errors.birthdate && (
                        <p className="text-red-500">{errors.birthdate}</p>
                      )}

                  </div>



                  <div className="md:col-span-5">
                    <label className="text-xl" htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" 
                    value={formData.email}
                    onChange={handleChange}

                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}


                  </div>



                  <div className="md:col-span-5 lg:flex ">
                   <div className="password lg:mr-[30px] ">
                   <label className="text-xl" htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 lg:w-[300px] w-full block bg-gray-50"
                    value={formData.password}
                    onChange={handleChange}  
                    />
                    {errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                      )}
                   </div>



                    <div className="phone">
                    <label className="text-xl" htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" className="h-10 border mt-1 rounded px-4 lg:w-[300px] w-full block bg-gray-50" 
                    value={formData.phone}
                    onChange={handleChange}
                     />
                    {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>


                  <div className="md:col-span-3">
                    <label className="text-xl" htmlFor="address">Address / Street</label>
                    <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""
                    value={formData.address}
                    onChange={handleChange} />
                    {errors.address && (
                        <p className="text-red-500">{errors.address}</p>
                      )}
                  </div>



                  <div className="md:col-span-2">
                    <label className="text-xl" htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" 
                    value={formData.city}
                    onChange={handleChange}
                    />
                    {errors.city && (
                        <p className="text-red-500">{errors.city}</p>
                      )}
                  </div>



                  <div className="md:col-span-2">
                    <label className="text-xl" htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={formData.country}
                      onChange={handleChange} />
                      {errors.country && (
                        <p className="text-red-500">{errors.country}</p>
                      )}
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"></button>
                      <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"></button>
                    </div>

                  </div>



                  <div className="md:col-span-2">
                    <label className="text-xl" htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={formData.state}
                      onChange={handleChange} 
                      />
                      {errors.state && (
                        <p className="text-red-500">{errors.state}</p>
                      )}
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"></button>
                      <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"></button>
                    </div>
                  </div>



                  <div className="md:col-span-1">
                    <label className="text-xl" htmlFor="zipcode">Zipcode</label>
                    <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""
                    value={formData.zipcode}
                    onChange={handleChange} />
                    {errors.zipcode && (
                        <p className="text-red-500">{errors.zipcode}</p>
                      )}
                  </div>



                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button type="submit" className="bg-primary hover:bg-white border-2 hover:text-primary hover:border-primary hover:border-2 text-white font-bold py-2 px-4 rounded" disabled={desabledButton}>Submit
                      </button>
                    </div>
                  </div>
                </div>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}