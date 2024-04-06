import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from "../../axios/axios";

const LOGIN_URL = '/login';
const USER_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /.+/;

export default function Login({ onClose }) {

  const setCurrentUser = useStore((state) => state.setCurrentUser )
  const setRegisteredUser = useStore((state) => state.setRegisteredUser)
  
  const navigate = useNavigate();
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  
  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
    if(!validUser){
      setErrMsg('Enter a valid email')
    }
  }, [user])

  useEffect(() => {
      setValidPassword(PWD_REGEX.test(password));
      if(!validPassword){
        setErrMsg('Enter a valid password')
      }
  }, [password])

  useEffect(() => {
    setErrMsg('');
  }, [user, password])


  const handleSubmit = async (e) => {

    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }

    try {

      axios.post(LOGIN_URL, {
      email: user,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      const cred = res.data;
      document.cookie = `token=${cred.token}; max-age=${60 * 60}; path=/; samesite=strict`;
      const { userId, userName, userLastname, userBirthdate, userEmail, userPassword, isAdmin, isActive } = jwtDecode(cred.token);
      
      const newUser = {
        id: userId,
        name: userName,
        lastname: userLastname,
        dob: userBirthdate,
        email: userEmail,
        password: userPassword,
        isAdmin: isAdmin,
        isActive: isActive
      };
      setCurrentUser(newUser);
      setRegisteredUser(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
      
      onClose();
      navigate(origin, { replace: true });
     
    } catch (error) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  
  return (
    <div className="absolute right-0 top-0 border-none rounded-lg shadow shadow-slate-500 font-RedHat bg-white md:w-1/3 md:h-svh">

      <div className="lg:p-4 flex flex-col">

        <div className="text-black flex flex-col items-end text-2xl">
          <p onClick={ () => onClose()} className="cursor-pointer">X</p>
          <div className="w-full text-center">
            <h2 className="block text-center">Log In</h2>
          </div>
        </div>

        <div className="bg-black w-11/12 p-[0.4px] m-auto mt-2 mb-3"></div>

        <form className=" text-center flex flex-col items-center md:mt-6" onSubmit={handleSubmit}>

          <label className="text-xl" htmlFor="username">
            Email
          </label>
          <input
            className=" w-full p-2 md:mt-4 border-none rounded-lg bg-primary/20 mb-5 text-black outline-none  "
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            placeholder="user@account.com"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          {!validUser && <p ref={errRef} className="text-lg text-red-600 mt-4">{errMsg}</p>}

          <label className="text-xl md:mt-6" htmlFor="password">
            Password
          </label>
          <input
            className="w-full p-2 md:mt-4 border-none rounded-lg bg-primary/20 mb-5 text-black outline-none "
            type="password"
            id="password"
            onChange={ (e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {!validPassword && <p ref={errRef} className="text-lg text-red-600 mt-4">{errMsg}</p>}
          <button
            className="bg-primary/50 hover:bg-primary p-2 w-28 md:mt-6 rounded-xl mb-4"
          >
            Log In
          </button>
        </form>

        <div className="login-socials flex justify-center md:gap-4 items-center md:mt-6">
          <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/facebook`}>
            <button className="w-[60px] mr-[5px] shadow-lg shadow-gray-300 p-1 rounded-lg bg-blue-700  ">
              <img
                className=" w-[20px] m-auto "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                alt=""
              />
            </button>
          </a>

          <a href={`${import.meta.env.VITE_BACKEND_URL}/google/callback`}>
            <button className="w-[60px] ml-[5px] shadow-lg shadow-gray-300 rounded-lg  p-1 border border-slate-200  ">
              <img
                className="w-[20px] m-auto "
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google Icon"
              />
            </button>
          </a>
        </div>

        <div className="md:mt-6 text-center">
          <p className="uppercase text-[12px]">
            Do u need an acount?{" "}
            <a className=" text-blue-700 uppercase " href="/register">
              Click here
            </a>{" "}
          </p>
        </div>
      </div>

    </div>
  );
}