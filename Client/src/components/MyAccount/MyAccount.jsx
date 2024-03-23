import React from "react";

const MyAccount = () => {

    return (

        <section className="w-11/12 mt-20 mx-auto font-RedHat flex flex-col lg:w-4/6">
            
            <div>

                <h1 className="font-semibold text-2xl text-center tracking-widest">MY ACCOUNT</h1>
                <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center">

                    <div className="bg-primary/20  p-4 flex flex-col gap-4 rounded-2xl">
                        <p className="flex justify-around lg:justify-between">
                            <span className="bg-primary/50 font-semibold rounded-2xl py-0.5 px-4 lg:inline-block lg:mr-4">PASSWORD</span>
                            <span className="font-semibold hover:text-primary cursor-pointer">Change</span></p>
                        <p className="text-center">**********</p>
                    </div>
                    <div className="bg-primary/20 p-4 flex flex-col gap-4 rounded-2xl">
                        <p className="flex justify-around lg:justify-between">
                            <span className="bg-primary/50 font-semibold  rounded-2xl py-0.5 px-4 lg:inline-block lg:mr-4">EMAIL</span>
                            <span className="font-semibold hover:text-primary cursor-pointer">Change</span></p>
                        <p className="text-center">mimisolisloyo@gmail.com</p>
                    </div>

                </div>

            </div>

            <div className="mt-12 flex flex-col items-center">

                <p>
                    <span className="bg-primary/50 font-semibold inline-block mr-4  rounded-2xl py-0.5 px-4 ">PERSONAL INFORMATION</span>
                    <span className="font-semibold hover:text-primary cursor-pointer">Change</span></p>
                <div className="bg-primary/20 p-4 mt-4 grid grid-cols-2 gap-6  rounded-2xl">
                    <p
                        className="bg-primary/50 font-semibold text-center  rounded-2xl py-0.5 px-2"
                    >NAME</p>
                    <p>Nohemi Solis</p>
                    <p
                        className="bg-primary/50 font-semibold text-center  rounded-2xl py-0.5 px-2"
                    >PHONE NUMBER</p>
                    <p>0123456789</p>
                    <p
                        className="bg-primary/50 font-semibold text-center  rounded-2xl py-0.5 px-2"
                    >ADDRESS</p>
                    <p>Zahara #21</p>
                </div>

            </div>

        </section>
    )

}

export default MyAccount;