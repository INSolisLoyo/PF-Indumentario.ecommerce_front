import React, { useState, useRef, useEffect } from "react";
import google from "../../assets/google.png";

export default function Login({ onClose }) {

  const userRef = useRef();
  const errRef = useRef();

  const [auth, setAuth] = useState({})

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, password])

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user,
          password: password
        })
      }).then( res => res.json()).then( (cred) => 
        console.log(cred)
      )
      setUser('');
      setPassword('');
      setSuccess(true);
      
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
    <div className="absolute top-16 right-2 p-4 border-none rounded-lg shadow w-[350px] h-[350px] text-center shadow-slate-500 font-RedHat bg-white max-lg:right-2 max-lg:w-[320px] ">
      <p ref={errRef} aria-live="assertive">{errMsg}</p>
      <h2 className="text-black text-xl font-bold ">Login</h2>
      <div className="bg-black w-[250px] p-[0.8px] m-auto mt-2 mb-3 "></div>
      <form className=" pb-4 " onSubmit={handleSubmit}>
        <label
          className="block  text-left ml-12 uppercase text-[13px] tracking-[1px]  "
          htmlFor=""
        >
          Username
        </label>
        <input
          className="border-none rounded-lg bg-primary/20 mb-5 text-black outline-none p-1 w-[220px] "
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label
          className="block text-[13px] text-left ml-12 uppercase tracking-[1px]  "
          htmlFor=""
        >
          Password
        </label>
        <input
          className="border-none rounded-lg bg-primary/20 mb-2 text-black outline-none p-1 w-[220px] "
          type="password"
          id="password"
          onChange={ (e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button
          className="bg-primary/50 p-2 w-[80px] rounded-xl mb-4 uppercase "
        >
          GO
        </button>
      </form>

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
