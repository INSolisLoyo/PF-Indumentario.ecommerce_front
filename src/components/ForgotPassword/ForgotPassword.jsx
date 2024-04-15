import React, { useState } from "react";
import axios from "../../axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const URL = '/forgotPassword'

const ForgotPassword = ({handleClickPassword}) => {

    const [email, setEmail ] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {

        const newEmail = event.target.value;
        setEmail(newEmail)

    }

    const handleSubmit = async () => {

        try {
            
            if(!email){
               setError('Enter an email')
            } else {
               if(!EMAIL_REGEX.test(email)){
                   setError('Enter a valid email')
               } else {
                    console.log(email);
                    const newEmail = {
                        email: email
                    };

                   const response = await axios.post(URL, newEmail)                  
                    Swal.fire(response);
                      
               }
            } 

        } catch (error) {
            Swal.fire('Error with send de email')
        }
    }

    return (

        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 w-screen h-screen z-10">

            <div className="bg-white w-1/3 h-auto p-8 rounded-xl flex flex-col gap-4 items-center">

                <div className="w-full flex justify-end">
                    <FontAwesomeIcon icon={faXmark} size="xl" className='cursor-pointer hover:text-primary/80' onClick={handleClickPassword}/>
                </div>

                <p className="text-center font-RedHat">Enter your email: </p>
                <input className={`w-full py-2 px-4 border ${ error ? "border-red-500" : "border-gray-300"} rounded-xl flex gap-4 justify-center items-center`}
                placeholder="Enter your email" type="email" id="email" name="email" value={email} onChange={handleChange}/>
                { 
                    error && <span className="text-red-500">{error}</span>
                }
                <button onClick={handleSubmit} className="w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex gap-4 justify-center items-center">Submit</button>

            </div>

        </div>

    )


}

export default ForgotPassword;