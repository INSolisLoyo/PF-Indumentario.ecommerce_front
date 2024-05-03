import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../GlobalStoreZustand/UserStore";
import axios from "../../axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validateData from "./validateData";
import Swal from "sweetalert2";

const Settings = () => {

  const navigate = useNavigate();

  const user = userStore((state) => state.user);

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: false,
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    createdAt: "",
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
    state: "",
    country: "",
    zipcode: "",
  });

  const [enabledUserData, setEnabledUserData] = useState(true);
  const [enabledDataContact, setEnabledDataContact] = useState(true);
  const [enabledPaymentInfo, setEnabledPaymentInfo] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    setForm({
      ...form,
      [property]: value,
    });

    validateData(property, value, errors, setErrors);
  };

  const handleGoBackClick = () => {
    navigate(-1); // retroceder a la página anterior
    window.scrollTo(0, 0); // Mover la ventana al principio de la página
  };

  const editUserData = async () => {

    if(!user.id){
      Swal.fire('Cannot update your data')
    } else {

      if (enabledUserData) {
        setEnabledUserData(false);
      } else {
        const errorExists = anErrorExist();
  
        if (!errorExists) {
          setEnabledUserData(true);
  
          sendUser();
        }
      }

    }
  };

  const editDataContact = () => {

    if(!user.id){
      Swal.fire('Cannot update your data')
    } else {

      if (enabledDataContact) {
        setEnabledDataContact(false);
      } else {
        const errorExists = anErrorExist();
  
        if (!errorExists) {
          setEnabledDataContact(true);
  
          sendUser();
        }
      }

    }
  };

  const editPayment = () => {

    if(!user.id){
      Swal.fire('Cannot update your data')
    } else {

      if (enabledPaymentInfo) {
        setEnabledPaymentInfo(false);
      } else {
        const errorExists = anErrorExist();
  
        if (!errorExists) {
          setEnabledPaymentInfo(true);
          sendUser();
        }
      }
      
    }
  };

  const fetchUser = async () => {

    if(user.id){

      try {
        const { data } = await axios.get(`/user/${user.id}`);
  
        setForm({
          name: data.name,
          lastname: data.lastname,
          birthdate: data.birthdate,
          email: data.email,
          password: data.password,
          isAdmin: data.isAdmin,
          isActive: data.isActive,
          phone: data.phone,
          address: data.address,
          city: data.city,
          state: data.state,
          country: data.country,
          zipcode: data.zipcode,
          provider: data.provider,
          newsLetter: data.newsLetter,
          profilePicture: data.profilePicture,
        });
      } catch (error) {
        console.log("Error to get user data");
      }

    } else {
      setForm({
        name: user.name,
        lastname: user.lastname ? user.lastname : '' ,
        birthdate: 'data.birthdate',
        email: user.email,
        password: '' ,
        isAdmin: false,
        isActive: true,
        phone: null,
        address: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        provider: '',
        newsLetter: '',
        profilePicture: '',
      });
    }
  };

  const sendUser = async () => {

    if(!user.id){

      Swal.fire('Cannot update your data')
    } else {

      try {
        const response = await axios.put(`/user/${user.id}`, form);
  
        if (response) Swal.fire("Data saved");
      } catch (error) {
        console.log("Error to update data");
        Swal.fire("Cannot update data");
      }

    }
  };

  const anErrorExist = () => {
    let errorsExist = false;

    for (let prop in errors) {
      if (errors[prop] !== "") errorsExist = true;
    }

    return errorsExist;
  };

  useEffect(() => {
    if (user.name) {
      fetchUser();
    }
  }, []);

  useEffect(() => {
    if (!user.name) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="p-4 w-full md:p-16 rounded-xl flex flex-col gap-4 items-center justify-center ">  

     <div className="absolute inset-x-[370px] top-[98px]">
        <button
          className=" px-6 py-0 leading-5 text-black transition-colors duration-200 transform bg-secondary/35 rounded-md hover:bg-primary hover:text-white italic font-bold focus:outline-none focus:bg-gray-600 "
          onClick={handleGoBackClick}
        >
         ← Go Back
        </button>
      </div> 
        
      

      {/* Información de contacto */}
      <div className="w-full bg-white p-4 rounded-lg flex flex-col gap-4 font-RedHat">
        <h1 className="text-xl font-semibold text-black/70">
          Personal Information
        </h1>
        <div className="w-full h-[2px] bg-gray-300"></div>

        <div className="flex flex-col gap-8 w-full">
          {/* Nombre y fecha de cumpleaños */}
          {/* User Data */}
          <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-around">
            {/* Nombre */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className={`w-full py-2 px-4 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-xl flex gap-4 justify-center items-center ${
                  enabledUserData
                    ? "cursor-not-allowed text-gray-500 bg-gray-100"
                    : "cursor-pointer"
                }`}
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                disabled={enabledUserData}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}

              <label htmlFor="name">Lastname</label>
              <input
                className={`w-full py-2 px-4 border ${
                  errors.lastname ? "border-red-500" : "border-gray-300"
                } rounded-xl flex gap-4 justify-center items-center ${
                  enabledUserData
                    ? "cursor-not-allowed text-gray-500 bg-gray-100"
                    : "cursor-pointer"
                }`}
                type="text"
                id="lastname"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                disabled={enabledUserData}
              />
              {errors.lastname && (
                <span className="text-red-500">{errors.lastname}</span>
              )}
            </div>

            {/* Birthdate */}
            <div className="flex flex-col gap-2 justify-center items-center w-full md:w-1/4 md:h-1/4 ">
              <label htmlFor="">Date of birthdate</label>
              <input
                name="birthdate"
                id="birthdate"
                type="date"
                value={form.birthdate}
                onChange={handleChange}
                disabled={enabledUserData}
                className={`cursor-pointer p-2 rounded-lg border-gray-300" ${
                  enabledUserData
                    ? "cursor-not-allowed text-gray-500 bg-gray-100"
                    : "cursor-pointer"
                }`}
              />

              <button
                onClick={editUserData}
                className="w-full mt-8 py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center"
              >
                {enabledUserData ? "Edit" : "Save"}
              </button>
            </div>
          </div>

          <div className="w-full h-[2px] bg-gray-300"></div>

          {/* Data Contact */}
          <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-around">
            {/* Email y contraseña */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className={`w-full py-2 px-4 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-xl flex gap-4 justify-center items-center ${
                  enabledDataContact
                    ? "cursor-not-allowed text-gray-500 bg-gray-100"
                    : "cursor-pointer"
                }`}
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                disabled={enabledDataContact}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}

              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  className={`w-4/6 md:w-full py-2 px-4 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-xl flex gap-4 justify-center items-center ${
                    enabledDataContact
                      ? "cursor-not-allowed text-gray-500 bg-gray-100"
                      : "cursor-pointer"
                  }`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={enabledDataContact}
                  placeholder="Click to change"
                />

                <div className="absolute inset-y-0 right-4 md:-right-12 flex items-center pr-4 cursor-pointer">
                  {showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={togglePasswordVisibility}
                      className="text-gray-300 z-10"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={togglePasswordVisibility}
                      className="text-gray-300 z-10"
                    />
                  )}
                </div>
              </div>

              {errors.password.length > 1 && (
                <div className="w-full h-auto border-2  p-2 rounded-xl border-primary bg-primary/50">
                  <ul>
                    <li>It must contain at least one lowercase letter.</li>
                    <li>It must contain at least one uppercase letter.</li>
                    <li>
                      It must include at least one of the following special
                      characters: !, ?, #, or $.
                    </li>
                    <li>
                      It should have a total length between 10 and 30
                      characters.
                    </li>
                    <li className="font-semibold">
                      Your password will be encrypted for security reasons.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-2 justify-center items-center w-full md:w-1/4 md:h-1/4">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                className={`w-full py-2 px-4 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-xl flex gap-4 justify-center items-center ${
                  enabledDataContact
                    ? "cursor-not-allowed text-gray-500 bg-gray-100"
                    : "cursor-pointer"
                }`}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone}</span>
              )}
              <button
                onClick={editDataContact}
                className="mt-8 w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center"
              >
                {enabledDataContact ? "Edit" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Información de compra */}
      <div className="w-full bg-white p-4 rounded-lg flex flex-col gap-4 font-RedHat">
        <h1 className="text-xl font-semibold text-black/70">
          Payment Information
        </h1>
        <div className="w-full h-[2px] bg-gray-300"></div>

        {/*formulario*/}
        <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-around">
          {/* Dirección de envío */}
          <div className="flex flex-col gap-2">
            {/* Address */}
            <label htmlFor="password">Address</label>
            <input
              className={`w-full py-2 px-4 border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } rounded-xl flex gap-4 justify-center items-center ${
                enabledPaymentInfo
                  ? "cursor-not-allowed text-gray-500 bg-gray-100"
                  : "cursor-pointer"
              }`}
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              disabled={enabledPaymentInfo}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )}

            <label htmlFor="state">City</label>
            <input
              className={`w-full py-2 px-4 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded-xl flex gap-4 justify-center items-center ${
                enabledPaymentInfo
                  ? "cursor-not-allowed text-gray-500 bg-gray-100"
                  : "cursor-pointer"
              }`}
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              disabled={enabledPaymentInfo}
            />
            {errors.city && <span className="text-red-500">{errors.city}</span>}

            <label htmlFor="state">State</label>
            <input
              className={`w-full py-2 px-4 border ${
                errors.state ? "border-red-500" : "border-gray-300"
              } rounded-xl flex gap-4 justify-center items-center ${
                enabledPaymentInfo
                  ? "cursor-not-allowed text-gray-500 bg-gray-100"
                  : "cursor-pointer"
              }`}
              type="text"
              id="state"
              name="state"
              value={form.state}
              onChange={handleChange}
              disabled={enabledPaymentInfo}
            />
            {errors.state && (
              <span className="text-red-500">{errors.state}</span>
            )}

            <label htmlFor="street">Country</label>
            <input
              className={`w-full py-2 px-4 border ${
                errors.country ? "border-red-500" : "border-gray-300"
              } rounded-xl flex gap-4 justify-center items-center ${
                enabledPaymentInfo
                  ? "cursor-not-allowed text-gray-500 bg-gray-100"
                  : "cursor-pointer"
              }`}
              type="text"
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              disabled={enabledPaymentInfo}
            />
            {errors.country && (
              <span className="text-red-500">{errors.country}</span>
            )}

            <label htmlFor="state">Zip Code</label>
            <input
              className={`w-full py-2 px-4 border ${
                errors.zipcode ? "border-red-500" : "border-gray-300"
              } rounded-xl flex gap-4 justify-center items-center ${
                enabledPaymentInfo
                  ? "cursor-not-allowed text-gray-500 bg-gray-100"
                  : "cursor-pointer"
              }`}
              type="text"
              id="zipcode"
              name="zipcode"
              value={form.zipcode}
              onChange={handleChange}
              disabled={enabledPaymentInfo}
            />
            {errors.zipcode && (
              <span className="text-red-500">{errors.zipcode}</span>
            )}
          </div>

          {/* Información de pago */}
          <div className="flex flex-col gap-2 justify-center items-center w-full md:w-1/4 md:h-1/4 ">
            <label>Payment options</label>
            <button
              className=" w-full py-2 border border-gray-300 bg-[#fae8e6] rounded-xl flex justify-center items-center cursor-not-allowed"
              disabled= {true}
            >
              <FontAwesomeIcon icon={faCcPaypal} size="2xl" />
            </button>

            <button
              onClick={editPayment}
              className="mt-8 w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center"
            >
              {enabledPaymentInfo ? "Edit" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
