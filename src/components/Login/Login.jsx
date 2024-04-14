import userStore from "../GlobalStoreZustand/UserStore";
import useCartStore from "../GlobalStoreZustand/useCartStore";
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../../axios/axios";
import AuthTerceros from "../AuthTerceros/AuthTerceros";
import SesionSwitch from "./Switch";
import PopoverInfo from "./PopoverInfo";
import validationData from "./validationData";

const LOGIN_URL = "/login";

export default function Login({ onClose }) {
  const setCurrentUser = userStore((state) => state.setCurrentUser);
  const setRegisteredUser = userStore((state) => state.setRegisteredUser);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

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
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await validationData(form, setErrors, setValidation);

    if (validation.email && validation.password) {
      try {
        const { data } = await axios.post(
          LOGIN_URL,
          {
            email: form.email,
            password: form.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        document.cookie = `token=${data.token}; max-age=${
          60 * 60
        }; path=/; samesite=strict`;
        const {
          userId,
          userName,
          userLastname,
          userBirthdate,
          userEmail,
          userPassword,
          isAdmin,
          isActive,
          userMobile,
        } = jwtDecode(data.token);

        const newUser = {
          id: userId,
          name: userName,
          lastname: userLastname,
          dob: userBirthdate,
          email: userEmail,
          password: userPassword,
          isAdmin: isAdmin,
          isActive: isActive,
        };

        setCurrentUser(newUser);
        setRegisteredUser(true);

        // Obtener el carrito del usuario al iniciar sesión
        const response = await axios.get(`/cart/${userId}`);

        // Iterar sobre cada elemento del carrito y agregarlo al estado global del carrito
        response.data.forEach(async (cartItem) => {
          const productRescue = await axios.get(
            `/product/${cartItem.productId}`
          );
          const productLimpio = productRescue.data;

          const selectedProduct = {
            id: cartItem.id,
            images: productLimpio.images[0],
            name: productLimpio.name,
            price: productLimpio.price,
            quantity: cartItem.amount,
            color: cartItem.colour,
            size: cartItem.size,
          };

          // Actualizar el estado global del carrito con los datos recibidos
          useCartStore.getState().addToCart(selectedProduct);
        });

        onClose();
      } catch (error) {
        console.error("There is a problem");
      }
    }
  };

  const handleRegister = () => {
    navigate("/register");
    onClose();
  };

  useEffect(() => {
    setValidation({
      email: false,
      password: false,
    });
  }, [form]);

  return (
    <div className="absolute right-0 top-0 w-11/12 h-screen border-none rounded-lg shadow shadow-slate-500 font-RedHat bg-white md:w-1/3 ">
      <div className="w-full p-2 md:p-4 flex flex-col gap-2 md:gap-4">
        {/* Ícono de x */}
        <div className="w-10/12 mx-auto flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            className="text-[#3c1613] cursor-pointer hover:text-primary/80"
            onClick={onClose}
          />
        </div>

        {/* Contenedor General  */}
        <div className="w-9/12 mx-auto flex flex-col justify-center gap-6">
          {/* Título */}
          <p className="text-4xl text-center text-slate-800 font-bold">
            Log in
          </p>

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
            <input
              className={`w-full py-2 px-4 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-xl flex gap-4 justify-center items-center`}
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}

            <div className="relative">
              <input
                className={`w-full py-2 px-4 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-xl flex gap-4 justify-center items-center`}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />

              <div className="absolute inset-y-0 right-2 flex items-center pr-4">
                {showPassword ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={togglePasswordVisibility}
                    className="text-gray-300"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={togglePasswordVisibility}
                    className="text-gray-300"
                  />
                )}
              </div>
            </div>

            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}

            {/* Keep sesion open? */}
            <div className="flex gap-2 items-center">
              <SesionSwitch />
              <p>Keep the session open</p>
              <PopoverInfo />
            </div>

            <button
              className="w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex gap-4 justify-center items-center"
              onClick={submitHandler}
            >
              Log in
            </button>
          </div>

          {/* Forget password */}
          <p className="text-center">
            <a href="#" className="underline">
              Forgot your password?
            </a>
          </p>

          {/* Create an account*/}
          <button
            className="w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center"
            onClick={handleRegister}
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
