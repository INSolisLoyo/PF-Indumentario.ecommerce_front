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
    const [ sectionPartsAbout, setSectionPartsAbout ] = useState([]);

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

        <div className="w-full h-auto pt-28 md:pt-40">

            <div className="w-11/12 mx-auto h-auto flex gap-8">

                {/* Menú */}
                

                    <div className="hidden font-RedHat md:w-3/12 md:pl-4 md:flex md:flex-col md:gap-4">

                        <button className={`w-full  py-4 ${ section === 'aboutUs' ? "bg-[#ae5e48] text-white" : "bg-[#f4e8e0] border-[#e7d0c1]"} rounded-xl text-center font-light cursor-pointer hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white`} ref={aboutRef} 
                        onClick={() => handleClick('aboutUs')}>
                            <p className="px-2 md:px-6 w-full flex justify-between">
                                <span>About us </span>
                                {
                                    section === 'aboutUs' ? displayContent === true ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronUp}/>
                                }                           
                            </p>                                 
                        </button>
                        <div className="flex flex-col gap-2 font-RedHat px-4">

                            {
                                (section === 'aboutUs' && displayContent === true) && sectionPartsAbout.map( (part, index) => {
                                    if(index === 0)
                                        return (<p className="text-lg text-[#5f352f] cursor-pointer" key={part}
                                        >{part}</p>)
                                    else 
                                        return (<p className="text-[#5f352f] cursor-pointer"
                                            key={part}
                                            >{part}</p>)
                                }) 
                            }

                        </div>

                        <button className={`w-full  py-4 ${ section === 'termsAndConditions' ? "bg-[#ae5e48] text-white" : "bg-[#f4e8e0] border-[#e7d0c1]"} rounded-xl text-center font-light cursor-pointer hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white`} ref={termsRef} 
                        onClick={() => handleClick('termsAndConditions')}>
                            <p className="px-2 md:px-6 w-full flex justify-between">
                                <span>Terms and conditions </span>
                                {
                                    section === 'termsAndConditions' ? displayContent === true ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronUp}/>
                                }    
                            </p>   
                        </button>
                        <div className="flex flex-col gap-2 font-RedHat px-4">

                            {
                                (section === 'termsAndConditions' && displayContent === true) && sectionPartsAbout.map( (part, index) => {
                                    if(index === 0)
                                        return (<p className="text-lg text-[#5f352f] cursor-pointer" key={part}
                                         >{part}</p>)
                                    else 
                                        return (<p className="text-[#5f352f] cursor-pointer"
                                            key={part}
                                            >{part}</p>)
                                }) 
                            }

                        </div>


                        <button className={`w-full  py-4 ${ section === 'privacy' ? "bg-[#ae5e48] text-white" : "bg-[#f4e8e0] border-[#e7d0c1]"} rounded-xl text-center font-light cursor-pointer hover:bg-[#ae5e48] hover:text-white focus:bg-[#ae5e48] focus:text-white active:bg-[#ae5e48] active:text-white`} ref={privacyRef} 
                        onClick={() => handleClick('privacy')}
                        >
                            <p className="px-2 md:px-6 w-full flex justify-between">
                                <span>Privacy and Policy</span>
                                {
                                    section === 'privacy' ? displayContent === true ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronUp}/>
                                }   
                            </p>  
                        </button>
                        <div className="flex flex-col gap-2 font-RedHat px-4">

                            {
                                (section === 'privacy' && displayContent === true) && sectionPartsAbout.map( (part, index) => {
                                    if(index === 0)
                                        return (<p className="text-lg text-[#5f352f] cursor-pointer" key={part}
                                        >{part}</p>)
                                    else 
                                        return (<p className="text-[#5f352f] cursor-pointer"
                                            key={part}
                                            >{part}</p>)
                                }) 
                            }

                        </div>

                    </div>
                    
               

                {
                    section === 'aboutUs' ? <AboutUs setSectionPartsAbout={setSectionPartsAbout}/> : section === 'termsAndConditions' ?  <TermsAndConditions setSectionPartsAbout={setSectionPartsAbout} /> : <Privacy setSectionPartsAbout={setSectionPartsAbout}/>
                }

            </div>


        </div>

    )
}

export default About;