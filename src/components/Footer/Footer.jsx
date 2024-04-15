import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../img/logo.png';

// Resto del código del componente Footer

import NewsLetter from '../NewsLetter/NewsLetter';


const Footer = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showTopBtn, setShowTopBtn] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Ajusta '200' al umbral deseado de px scroll down
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
  
    // Agrega el event listener cuando el componente se monta
    window.addEventListener("scroll", handleScroll);
  
    // Limpia el event listener cuando el componente se desmonte
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
        <footer id="footer" className="w-full mt-40 h-auto relative text-black bg-primary/10">

            <div className="flex flex-col gap-8 px-8 md:px-0 md:flex-row py-6">

              {/* Social */}
              <div className='flex-1 flex flex-col gap-6 items-center justify-center'>

                <picture>
                    <img src={logo} alt="BeComfree logo" className='max-w-52'/>
                </picture>

                <div className='flex justify-center gap-4'>
                        <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" className="text-primary/80 hover:text-primary cursor-pointer transform transition-transform duration-300 hover:scale-110" />
                        <FontAwesomeIcon icon={faSquareFacebook} size="2xl" className="text-primary/80  hover:text-primary cursor-pointer transform transition-transform duration-300 hover:scale-110"/>
                        <FontAwesomeIcon icon={faSquareInstagram} size="2xl" className="text-primary/80  hover:text-primary cursor-pointer transform transition-transform duration-300 hover:scale-110"/>
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-primary/80 hover:text-primary cursor-pointer transform transition-transform duration-300 hover:scale-110"/>
                </div>       

              </div>

               {/* Newsletter */}
               <div className='flex-1'>
                    <NewsLetter/>
               </div>   

              {/* Links */}
              <div className='h-full flex-1 flex flex-col items-center gap-4 list-none font-RedHat'>

                    <p className="text-md text-center text-primary font-bold">Links</p>
                    <ul className='flex flex-col gap-.5 items-center justify-center'>

                        <li><a href="/about/aboutUs" className='text-sm  text-primary font-semibold hover:text-primary/70'>About us</a></li>
                        <li><a href="/about/termsAndConditions" className='text-sm  text-primary font-semibold hover:text-primary/70'>Terms and conditions</a></li>
                        <li><a href="/about/privacy" className='text-sm text-primary font-semibold hover:text-primary/70'>Privacy and Policy</a></li>

                    </ul>
            
              </div>     
             
            </div>

              <div className="text-sm md:text-left text-center py-2 px-2 border w-full bg-primary/40">
                  <p className="mb-0">
                  &copy; {new Date().getFullYear()} BeComfree Team
                  </p>
              </div>

    <button
        onClick={top}
        style={{ display: showTopBtn ? 'block' : 'none' }}
        className=" fixed right-2 top-[540px] mb-[200px] mt-[.5rem] p-[1rem] border-none rounded-full bg-primary shadow-md shadow-slate-600 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
          />
        </svg>
      </button>

        </footer>

    )
}

export default Footer;
