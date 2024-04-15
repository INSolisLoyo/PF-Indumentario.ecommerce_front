import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import validate from "../Register/validation";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const VALIDATEPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!?#$]).{10,30}$/;

const ResetPassword = () => {

    const [form, setForm] = useState({
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        password: false,
        confirmPassword: false
    })

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const handleSubmit = (event) => {

        event.preventDefault();

        if(!errors.password && !errors.confirmPassword ){
            Swal.fire('Password reset!');
        }

    }

    const validate = (value) => {
 
        if(!VALIDATEPASSWORD.test(value)){
            setErrors({
                ...errors,
                password: true
            })
        } else {
            setErrors({
                ...errors,
                password: false
            })
        }  
        
    }

    const handleChange = (event) => {

        const value = event.target.value;
        const property = event.target.name

        setForm({
            ...form,
            [property]: value
        })

        if(property === 'password'){

            validate(value)

        }

    }

    useEffect(() => {

        if(form.confirmPassword !== form.password){
            setErrors({
                ...errors,
                confirmPassword: true
            })
        } else {
            setErrors({
                ...errors,
                confirmPassword: false
            })
        }

    }, [form.confirmPassword])

    return (

        <div className="w-full h-full pt-40 flex justify-center items-center">

            <div className="w-1/2 h-auto p-4 flex flex-col gap-8 items-center justify-center">

                <h1 className="text-center text-2xl font-semibold text-primary">Password reset</h1>

                <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4 font-RedHat text-center">

                    <label htmlFor="password">Enter your new password</label>

                    <div className="relative">

                        <input type={showPassword ? 'text' : 'password'}  id="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className={`w-full py-2 px-4 border ${ errors.password ? "border-red-500" : "border-gray-300"} rounded-xl flex gap-4 justify-center items-center`}/>

                        <div className="absolute inset-y-0 right-2 flex items-center pr-4 cursor-pointer">
                            {showPassword ? <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisibility} className="text-gray-300"/> : <FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisibility} className="text-gray-300"/>}
                        </div>


                    </div>
                    {
                        errors.password && <div className="w-full h-auto border-2  p-2 rounded-xl border-primary bg-primary/50">
                            <ul>
                                <li>It must contain at least one lowercase letter.</li>
                                <li>It must contain at least one uppercase letter.</li>
                                <li>It must include at least one of the following special characters: !, ?, #, or $.</li>
                                <li>It should have a total length between 10 and 30 characters.</li>
                            </ul>
                        </div>
                    }

                    <label htmlFor="confirmPassword">Confirm your new password</label>
                    <input type="password"  id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm the password" className={`w-full py-2 px-4 border ${ errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-xl flex gap-4 justify-center items-center`}/>
                    {
                        errors.confirmPassword && <p className="text-red-500">Both fields must match</p> 
                    }

                    <button type="submit" className="w-full py-2 border border-gray-300 bg-[#fae8e6] hover:bg-primary rounded-xl flex justify-center items-center">Submit</button>

                </form>

            </div>

        </div>
    )
}

export default ResetPassword;