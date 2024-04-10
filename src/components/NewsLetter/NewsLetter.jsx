import React, { useState } from "react";
import Swal from "sweetalert2";

const NewsLetter = () => {

    const [ email, setEmail ] = useState('');
    const [borderStyle, setBorderStyle ] = useState('border-gray-500')
    const [ error, setError ] = useState('');


    const handleChange = (event) => {

        const currentEmail = event.target.value;
        setEmail(currentEmail);

    }

    const handleSubmit = () => {

        if(!email){
            setError('Enter an email address.')
            setBorderStyle('border-red-500');
            return
        } else {

            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setError('Enter a valid email address.')
                setBorderStyle('border-red-500');  
            }  else {

                setError('')
                setBorderStyle('border-gray-500');
                setEmail('');
                Swal.fire({
                    icon: "success",
                    title: "You are subscribe in our newsletter now!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                
            }
        }

    }

    return (

        <div className="flex flex-col gap-4 px-4 font-RedHat">

            <p className="text-md text-center text-primary font-bold">NewsLetters</p>
            <p className="text-sm text-center">Enter your email address to subscribe to our newsletter!</p>
            <div className="px-8 flex flex-col gap-2">
                <input type="email" placeholder="Email" value={email} className={`border ${borderStyle} px-4 py-2 rounded-lg`} onChange={handleChange}/>
                <span className="text-red-500 text-sm">{error}</span>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/70 focus:border-gray-500"
                    onClick={handleSubmit}
                >Subscribe</button>
            </div>

        </div>
    )

}

export default NewsLetter;