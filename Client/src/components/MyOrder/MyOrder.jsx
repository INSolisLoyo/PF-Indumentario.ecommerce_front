import React from "react";
/* import heart from "../../assets/Corazon-sinfondo.png" */

const MyOrder = () => {

    return (

        <div className="font-RedHat w-full h-auto bg-primary/50 relative py-8 px-4 flex flex-col items-center md:max-w-96 justify-center">

            <span className="absolute right-2 top-2 size-4xl font-semibold">x</span>

            <div className="w-full flex justify-between">

                <h1 className="start-2/4 font-semibold text-2xl tracking-widest">ORDER</h1>
                {/* <img src={heart} alt="heart" className="start-full max-w-10 max-h-10"/> */}

            </div>

            <div className="bg-black w-full p-[0.8px] m-auto mt-2 mb-3 "></div>

            <div className="mt-2 w-full justify-between flex gap-2 ">
                
                <div className="flex flex-col">
                    <span>x</span>
                    <span>x</span>
                </div>
                <div className="flex flex-col">
                    <span>Apple Orange x 1</span>
                    <span>Pineapple Carrot x 2</span>
                </div>
                <div className="flex flex-col">
                    <span className=" bg-primary/50 hover:bg-primary rounded-2xl py-0.1 px-2">- +</span>
                    <span className="bg-primary/50 hover:bg-primary rounded-2xl py-0.1 px-2">- +</span>
                </div>
                <div className="flex flex-col">
                    <span>$3.90</span>
                    <span>$4.90</span>
                </div>

            </div>

            <button className="mt-20 w-16 h-auto bg-primary/30 hover:bg-primary rounded-2xl }text-black">Go</button>


        </div>
    )

}

export default MyOrder;