import { useNavigate, useLocation } from 'react-router-dom';
import useStore from "../GlobalStoreZustand/GlobalStoreZustand";
import axios from "../../axios/axios";
import { auth } from './firebase';
import {
    // createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

  const AUTH = '/user/google';

const AuthTerceros = ({ onClose }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/";

  const setCurrentUser = useStore((state) => state.setCurrentUser )
  const setRegisteredUser = useStore((state) => state.setRegisteredUser)

    const onClickGoogle = async () => {

      const provider = new GoogleAuthProvider();

      try {

        const userData = await signInWithPopup(auth, provider);
        
        const dataDB = { name: userData.user.displayName, email: userData.user.email, profilePicture: userData.user.photoURL };

        await axios.post(AUTH, dataDB)
          .then( (response) => {
            const cred = userData.user.accessToken;
            document.cookie = `token=${cred}; max-age=${60 * 60}; path=/; samesite=strict`;
            const fullName = userData.user.displayName.split(' ');
            const firstName = fullName[0];
            
            const lastName = fullName[1] ? fullName[1] : '';
            setCurrentUser({
              id: '',
              name: firstName,
              lastname: lastName,
              dob: '',
              email: userData.user.email,
              password: '',
              isAdmin: '',
              isActive: ''
            })
            setRegisteredUser(true);
            navigate(origin, { replace: true });
            onClose();
          })
      } catch (error) {
        console.log(error);
      }
    };

    return (
        
        <button className="w-full py-2 border border-gray-300 rounded-xl flex gap-4 justify-center items-center hover:bg-[#fae8e6]" onClick={onClickGoogle}>
          <FontAwesomeIcon icon={faGoogle} size="xl" className=" text-slate-800"/> <span>Log in with Google</span>
        </button>
         
    )
}

export default AuthTerceros;