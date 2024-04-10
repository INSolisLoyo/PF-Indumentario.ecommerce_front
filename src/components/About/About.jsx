import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

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

            <div className="w-11/12 mx-auto h-20">

                {/* Menú */}
                <div className="font-RedHat w-1/3 pl-4 flex flex-col gap-4">

                    <button className="w-full py-4 bg-gray-100 rounded-xl text-center font-light cursor-pointer hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/20" ref={aboutRef} 
                    onClick={() => handleClick('aboutUs')}>
                        <p className="px-6 w-full flex justify-between">
                            <span>About us </span>
                            {
                                 displayContent === true && (section === 'aboutUs' ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>)
                            }                           
                        </p>                                 
                    </button>
                    <button className="w-full py-4 bg-gray-100 rounded-xl text-center font-light cursor-pointer hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/20" ref={termsRef} 
                    onClick={() => handleClick('termsAndConditions')}>
                        <p className="px-6 w-full flex justify-between">
                            <span>Terms and conditions </span>
                            {
                                displayContent === true && (section === 'termsAndConditions' ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>)
                            }    
                        </p>   
                    </button>
                    <button className="w-full py-4 bg-gray-100 rounded-xl text-center font-light cursor-pointer hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/20" ref={privacyRef} 
                    onClick={() => handleClick('privacy')}
                    >
                        <p className="px-6 w-full flex justify-between">
                            <span>Privacy </span>
                            {
                                displayContent === true && (section === 'privacy' ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>)
                            }   
                        </p>  
                    </button>

                </div>

            </div>

        </div>

    )
}

export default About;