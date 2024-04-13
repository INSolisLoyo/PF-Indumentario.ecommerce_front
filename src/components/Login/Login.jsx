import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../../axios/axios";
import AuthTerceros from "../AuthTerceros/AuthTerceros";
import SesionSwitch from "./Switch";
import PopoverInfo from "./PopoverInfo";


const LOGIN_URL = '/login';
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /.+/;

export default function Login({ onClose }) {

  const [ form, setForm] = useState({
    email: '',
    password: ''
  })
  const [ errors, setErrors ] = useState({
    email: '',
    password: ''
  })
  const [ validation, setValidation ] = useState({
    email: false,
    password: false
  })

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {

    const value = event.target.value;
    const property = event.target.name;

    setForm({
      ...form,
      [property]: value
    })

  }

  const validationData = () => {

    let emailError = '';
    let passwordError = '';

    let validationEmail = false;
    let validationPassword = false;

    if(form.email.length === 0){

      emailError = 'Enter your email account';

    } else {

      if(EMAIL_REGEX.test(form.email)){
        
        validationEmail = true;

      } else {
        emailError = 'Enter a valid email';
      }

    }
 
    if(form.password.length === 0){
          
      passwordError = 'Enter your password';
      
    } else {

      validationPassword = true;

    }

    setErrors({
      email: emailError,
      password: passwordError
    })

    setValidation({
      email: validationEmail,
      password: validationPassword
    })

  }

  const submitHandler = async () => {

    await validationData();

    if(validation.email && validation.password){
      

    }

  }

  useEffect( () => {

    setValidation({
      email: false,
      password: false
    })

    setErrors({
      email: '',
      password: ''
    })

  }, [form])
  
  return (

    <div className="absolute right-0 top-0 w-11/12 h-screen border-none rounded-lg shadow shadow-slate-500 font-RedHat bg-white md:w-1/3 ">

      <div className="w-full p-2 md:p-4 flex flex-col gap-2 md:gap-4">

        {/* Ícono de x */}
        <div className="w-10/12 mx-auto flex justify-end">

          <FontAwesomeIcon icon={faXmark} size="xl" className="text-[#3c1613] cursor-pointer hover:text-primary/80" onClick={onClose}/>

        </div>

        {/* Contenedor General  */}
        <div className="w-9/12 mx-auto flex flex-col justify-center gap-6">

          {/* Título */}
          <p className="text-4xl text-center text-slate-800 font-bold">Log in</p>

          {/* Autenticación de terceros */}
          
          <AuthTerceros onClose={onClose} />

          {/* OR */}
          <div className="relative">
            <div className="h-[2px] bg-gray-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 flex items-center justify-center">
             <p>OR</p>
            </div>
          </div>
          
          {/* Inputs */}
          <div className="flex flex-col gap-4">

              <input className="w-full py-2 px-4 border border-gray-300 rounded-xl flex gap-4 justify-center items-center focus:border-[#f6d5d2]" 
                placeholder="Enter your email" type="email" id="email" name="email" value={form.email} onChange={handleChange}
              />
              
              <div className="relative">
              
                <input className="w-full py-2 px-4 border border-gray-300 rounded-xl flex gap-4 justify-center items-center" 
                  placeholder="Enter your password" type={showPassword ? 'text' : 'password'} id="password" name="password" value={form.password} onChange={handleChange}          
                />
                
                <div className="absolute inset-y-0 right-2 flex items-center pr-4">
                  {showPassword ? <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisibility} className="text-gray-300"/> : <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisibility} className="text-gray-300"/>}
                </div>

              </div>

    

              {/* Keep sesion open? */}
              <div className="flex gap-2 items-center">
                <SesionSwitch/>
                <p>Keep the session open</p>
                <PopoverInfo/>
              </div>

              <button className="w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex gap-4 justify-center items-center" onClick={submitHandler}>
                Log in
              </button>

          </div>

          { /* Forget password */}
          <p className="text-center">
            <a href="#" className="underline">Forgot your password?</a>
          </p>

          {/* Create an account*/}
          <button className="w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex     justify-center items-center">
                Create an account
          </button>

        </div>


      </div>

    </div>
  );
}