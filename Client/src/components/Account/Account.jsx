import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import { useEffect } from "react";

export default function Account({ onClose, setShowSidebar }) {
   
    const { name } = useStore((state) => state.user)
    const setCurrentUser = useStore((state) => state.setCurrentUser)
    const setRegisteredUser = useStore((state) => state.setRegisteredUser)

    const handleLogOut = () => {

      setCurrentUser({
        id: '',
        name: '',
        lastname: '',
        dob: '',
        email: '',
        password: '',
        isAdmin: '',
        isActive: ''
      })

      setRegisteredUser(false);

      document.cookie = 'token=; max-age=0; path=/';

      setShowSidebar(false);

    } 

    return (
      <div className="bg-gradient-to-t from-[#dfb69f] to-white absolute right-0 top-0 border-none rounded-lg shadow shadow-slate-500 font-RedHat md:w-1/3 md:h-svh">

        <div className="lg:p-4 flex flex-col">

          <div className="text-black flex flex-col items-end text-2xl">

            <p onClick={ () => onClose()} className="cursor-pointer">X</p>
            <div className="w-full text-center">
              <h2 className="block text-center">Your account</h2>
            </div>

            <div className="w-full text-left md:mt-12 md:px-4">
                <p>Hola, {name} 💜</p>
            </div>

            <ul className="w-full text-left md:mt-12 md:px-4 flex flex-col md:gap-4">
                <li><a href="#" className="hover:text-primary">Shopping History</a></li>
                <li><a href="#" className="hover:text-primary">Account settings</a></li>             
            </ul>

            <div className="w-full flex justify-center md:mt-32 md:px-4">
              <button className="md:w-3/6 bg-primary/40 hover:bg-primary md:rounded-lg md:p-2"
                onClick={() => handleLogOut()}
              >
                  Log Out
              </button>
            </div>
          </div>

        </div>

      </div>
    );
}
