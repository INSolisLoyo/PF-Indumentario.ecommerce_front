import { useState } from "react";
import axios from "../../axios/axios";
import { auth } from './firebase';
import {
    // createUserWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
  } from 'firebase/auth';

const AuthTerceros = () => {

    const onClickGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const userData = await signInWithPopup(auth, provider);
        console.log(userData);
        const dataDB = { name: userData.user.displayName, email: userData.user.email };
        await axios.post('http://localhost:3002/users_auth', dataDB);
      } catch (error) {
        console.log(error);
      }
    };

    const onClickFacebook = async () => {
      const provider = new FacebookAuthProvider();
      try {
        const userData = await signInWithPopup(auth, provider);
        const dataDB = { name: userData.user.displayName, email: userData.user.email };
        await axios.post('http://localhost:3002/users_auth', dataDB);
      } catch (error) {
        alert(`Este correo ya existe, intenta con otro metodo: ${error}`);
      }
    };

    return (
        <div className="login-socials flex justify-center md:gap-4 items-center md:mt-6">

          <div>
            <button className="w-15 mr-1 shadow-lg shadow-gray-300 p-1 rounded-lg bg-blue-700"
                onClick={onClickFacebook}>
              <img
                className=" w-5 m-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                alt=""
              />
            </button>
          </div>

          <div>
            <button className="w-15 mr-1 shadow-lg shadow-gray-300 rounded-lg  p-1 border border-slate-200" onClick={onClickGoogle}>
              <img
                className="w-5 m-auto "
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google Icon"
              />
            </button>
          </div>
        </div>
    )
}

export default AuthTerceros;