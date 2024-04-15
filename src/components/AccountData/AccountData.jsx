import React, { useState, useRef, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Settings from "./Settings";
import Orders from "./Orders";

const AccountData = () => {

    const { section } = useParams();

    const settingsRef = useRef(null);
    const ordersRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (goToSection) => {
        
        navigate(`/account/${goToSection}`);
        
    } 

    useEffect(() => {

        switch(section) {
           case 'settings':
               settingsRef.current.focus();
               break;
           case 'orders':
               ordersRef.current.focus();
               break;
           default:
               settingsRef.current.focus();
        }

       
   }, [section])

    return (

        <div className="w-full h-auto pt-40 flex justify-center items-center">

            <div className="w-5/6 flex gap-8 ">

                {/* Div Menú */}
                <div className="w-3/12 flex flex-col gap-8">

                    <button className={`w-full  py-4 ${ section === 'settings' ? "bg-[#ae5e48] text-white" : "bg-[#f4e8e0] border-[#e7d0c1]"} rounded-xl text-center font-light cursor-pointer hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white`} ref={settingsRef} 
                        onClick={() => handleClick('settings')}>
                        Account settings
                    </button>

                    <button className={`w-full  py-4 ${ section === 'orders' ? "bg-[#ae5e48] text-white" : "bg-[#f4e8e0] border-[#e7d0c1]"} rounded-xl text-center font-light cursor-pointer hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white`} ref={ordersRef} 
                        onClick={() => handleClick('orders')}>
                        Orders
                    </button>
                    
                </div>

                {/* Div componentes */}
                <div className="w-9/12">
                    {
                        section == 'settings' ? <Settings /> : <Orders/> 
                    }
                </div>

            </div>

        </div>
    )

}

export default AccountData;