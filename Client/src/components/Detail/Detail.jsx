import React from "react";
import heart from '../../img/heart.png'

const Detail = () => {

    return (


        <div className=" w-11/12 h-auto mt-5 mx-auto lg:w-3/5  lg:mt-10 font-RedHat">

            <div className="bg-primary/10 rounded-2xl flex flex-col items-center md:gap-4 md:px-4 lg:flex-row lg:justify-around  lg:items-center">

                <picture className="">
                    <img src="https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="item"
                        className="max-w-64 mt-4 lg:mt-0 rounded-2xl"
                    />
                </picture>

                <div className="lg:max-w-96 bg-primary/20 my-10 rounded-2xl flex flex-col p-8">

                    <picture className="flex justify-end">
                        <img src={heart} alt="heart" 
                            className="max-w-16 max-h-16"
                        />
                    </picture>
                    
                    <h1 className="font-semibold text-2xl text-center tracking-widest">BODY</h1>
                    
                    <div className="mt-5 flex justify-between">
                        <p className="font-semibold text-2xl tracking-widest">$900.00</p>
                        <div className="flex gap-4 text-lg">
                            <span className="bg-primary/50 hover:bg-primary rounded-2xl py-0.5 px-4">-</span>
                            <span>1</span>
                            <span className="bg-primary/50 hover:bg-primary rounded-2xl py-0.5 px-4">+</span>
                        </div>
                    </div>
                    <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia similique atque quibusdam?.</p>
                    <div className="mt-5">
                        <p className="text-center font-semibold text-xl">Color</p>
                        <div className="flex gap-4 mt-4 mx-auto justify-center">
                            <span className="bg-slate-950 w-8 h-8 rounded-full"></span>
                            <span className="bg-orange-900 w-8 h-8 rounded-full"></span>
                            <span className="bg-red-900 w-8 h-8 rounded-full"></span>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:justify-around pr-8">

                <div className="mt-5 flex justify-center gap-4">
                            <img src="https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="item" 
                                className="max-w-20 rounded-2xl"    
                            />
                            <img src="https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="item" 
                                className="max-w-20 rounded-2xl"
                            />
                            <img src="https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="item" 
                                className="max-w-20 rounded-2xl"
                            />
                </div>

                <div className="w-2/5 flex">
                    <button 
                    className="mt-10 w-full h-8 bg-primary/70 hover:bg-primary rounded-2xl py-2 text-white">Go</button>
                </div>

             </div>

        </div>

    )

}

export default Detail;