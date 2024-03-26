import React from "react";
import SaleOneSlider from "../Oneslider/SaleOneSlider";



const Sale = () => {

    return(
        <div className="mt-20 mx-44 ml-44 pl-44 font-RedHat flex flex-col align-center lg:flex-row space-x-5 border-l-500">

        <div className="text-center p-10 border-8 border-primary border-double rounded-lg flex flex-col justify-center  w-2/6 h-3/4">
            <p className="text-base text-black-600/50 font-bold italic ">SUMMER</p>
            <h2 className=" text-6xl tracking-[.25em] font-bold text-gray-800 my-40">SALE</h2>
            <p>ENDS 20.03.2024</p>
            
            

            


        </div>

        <div className="mt-50 flex justify-center">

            <SaleOneSlider/>
        
        </div>

        </div>


    )
}

export default Sale;