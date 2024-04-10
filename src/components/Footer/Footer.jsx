import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faSquareFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import logo from '../../img/logo.png'
import NewsLetter from '../NewsLetter/NewsLetter';

const Footer = () => {

    return (

        <footer className="w-full mt-40 h-auto relative text-black bg-primary/10">

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

              {/* Links */}
              <div className='flex-1 flex flex-col gap-4 list-none font-RedHat'>

                {/* About us */}
                    <div className='flex flex-col gap-4'>
                            
                        <p className='text-xl text-center text-primary font-bold'>About us</p>
                        <p className='text-justify font-semibold'>Our team is a group of developers with pasion and dedication, this is our first project together. For know us better, please <span className='font-semibold text-primary cursor-pointer'>click here.</span></p>

                    </div>

                    <ul className='flex flex-col gap-2 items-center'>

                        <li><a href="#" className='text-primary font-semibold'>Terms and conditions</a></li>
                        <li><a href="#" className='text-primary font-semibold'>Privacy</a></li>

                    </ul>
            
              </div>

              {/* Follow */}
              <div className='flex-1'>
                    <NewsLetter/>
              </div>            
             
            </div>

              <div className="text-sm md:text-left text-center py-2 px-2 border w-full bg-primary/40">
                  <p className="mb-0">
                  &copy; {new Date().getFullYear()} BeComfree Team
                  </p>
              </div>

        </footer>

    )
}

export default Footer;