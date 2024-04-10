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

        <div className="flex flex-col gap-4 px-12">

            <p className="text-xl text-center text-primary font-bold">NewsLetters</p>
            <p className="text-justify">Hello, please enter your email address to subscribe to our newsletter.</p>
            <input type="email" placeholder="Email" value={email} className={`border ${borderStyle} px-4 py-2 rounded-lg`} onChange={handleChange}/>
            <span className="text-red-500">{error}</span>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/70"
                onClick={handleSubmit}
            >Subscribe</button>

        </div>
    )

}

export default NewsLetter;