import useStore from "../GlobalStoreZustand/GlobalStoreZustand";

export default function Account({ onClose }) {

    const user = useStore((state) => state.user)
  
    return (
      <div className="absolute right-0 top-0 border-none rounded-lg shadow shadow-slate-500 font-RedHat bg-white md:w-1/3 md:h-svh">

        <div className="lg:p-4 flex flex-col">

          <div className="text-black flex flex-col items-end text-2xl">

            <p onClick={ () => onClose()} className="cursor-pointer">X</p>
            <div className="w-full text-center">
              <h2 className="block text-center">Your account</h2>
            </div>

            <div>
                <p>Hola {user.name}</p>
            </div>

            <ul>
                <li>Shopping History</li>
                <li>Account settings</li>               
            </ul>

            <button>
                Log Out
            </button>
          </div>

        </div>

      </div>
    );
}
