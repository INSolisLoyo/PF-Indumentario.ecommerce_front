import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import AboutUs from "./AboutUs";
import TermsAndConditions from "./TermsAndConditions";
import Privacy from "./Privacy";

const About = () => {

    const navigate = useNavigate();
    const { section } = useParams();
    const aboutRef = useRef(null);
    const termsRef = useRef(null);
    const privacyRef = useRef(null);
    const [ displayContent, setDisplayContent] = useState(true);

    const handleClick = (goToSection) => {
        
        if(goToSection === section){
            setDisplayContent(!displayContent);
        } else {
            navigate(`/about/${goToSection}`);
        }

    } 

    useEffect(() => {

         switch(section) {
            case 'aboutUs':
                aboutRef.current.focus();
                break;
            case 'termsAndConditions':
                termsRef.current.focus();
                break;
            case 'privacy':
                privacyRef.current.focus();
                break;
            default:
                aboutRef.current.focus();
         }
        
    }, [section])

    return (

        <div className="w-full h-auto pt-40">

            <div className="w-11/12 mx-auto h-auto flex gap-8">

                {/* Menú */}
                <div className="font-RedHat w-3/12 pl-4 flex flex-col gap-4">

                    <button className="w-full py-4 bg-[#f4e8e0] border-[#e7d0c1] rounded-xl text-center font-light cursor-pointer hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white" ref={aboutRef} 
                    onClick={() => handleClick('aboutUs')}>
                        <p className="px-6 w-full flex justify-between">
                            <span>About us </span>
                            {
                                 section === 'aboutUs' ? displayContent === true ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronUp}/>
                            }                           
                        </p>                                 
                    </button>
                    <button className="w-full py-4 bg-[#f4e8e0] rounded-xl text-center font-light cursor-pointer  hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white" ref={termsRef} 
                    onClick={() => handleClick('termsAndConditions')}>
                        <p className="px-6 w-full flex justify-between">
                            <span>Terms and conditions </span>
                            {
                                section === 'termsAndConditions' ? displayContent === true ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronUp}/>
                            }    
                        </p>   
                    </button>
                    <button className="w-full py-4 bg-[#f4e8e0] rounded-xl text-center font-light cursor-pointer  hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white" ref={privacyRef} 
                    onClick={() => handleClick('privacy')}
                    >
                        <p className="px-6 w-full flex justify-between">
                            <span>Privacy </span>
                            {
                                section === 'privacy' ? displayContent === true ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronUp}/>
                            }   
                        </p>  
                    </button>

                </div>

                {
                    section === 'aboutUs' ? <AboutUs/> : section === 'termsAndConditions' ?  <TermsAndConditions /> : <Privacy />
                }

            </div>


        </div>

    )
}

export default About;