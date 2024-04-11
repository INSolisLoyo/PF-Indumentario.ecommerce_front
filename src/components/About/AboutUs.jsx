import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { Popover } from '@headlessui/react'

const AboutUs = () => {

    const frontEndColaborators = [
        {
            name: 'Jerry Murillo',
            identity: 'https://media.licdn.com/dms/image/D5603AQH6N0ZMGuFN5w/profile-displayphoto-shrink_800_800/0/1701218691878?e=1718236800&v=beta&t=xeQQdn0FMulCgnJ3PNzAtTq9ciM8VnQZA0P0irtsjBA',
            linkedIn: 'https://www.linkedin.com/in/jerry-murillo/',
            gitHub: 'https://github.com/JMurilloCortes',
            gmail: 'jealmuco@gmail.com'
        },
        {
            name: 'Oswaldo Palacios',
            identity: 'https://media.licdn.com/dms/image/D5635AQHSJGcax0K-ZQ/profile-framedphoto-shrink_800_800/0/1709569270943?e=1713376800&v=beta&t=_YpDzOtbRjKfMz1T9kTcIRB-g9yAzdFByPb8xBp74jY',
            linkedIn: 'https://www.linkedin.com/in/oswaldo-palacios-perez-523887270/',
            gitHub: 'https://github.com/SROSWALDO',
            gmail: 'kirito135615@gmail.com'
        },
        {
            name: 'Brenda Baumann',
            identity: 'https://media.licdn.com/dms/image/D4E35AQEJL-zBvgEMlg/profile-framedphoto-shrink_800_800/0/1708893538741?e=1713376800&v=beta&t=AxwRcm_EAGIAzzeU8fdN2aMR0SGU4gLdf03RiOy83UE',
            linkedIn: 'https://www.linkedin.com/in/brenda-baumann-b74956195/',
            gitHub: 'https://github.com/BBrendaBaumann',
            gmail: 'brendabaumann40@gmail.com'
        },
        {
            name: 'Nohemí Solis',
            identity: 'https://media.licdn.com/dms/image/D4E03AQGFekBQJAJ9KA/profile-displayphoto-shrink_800_800/0/1684793287356?e=1718236800&v=beta&t=lrex7St7yuu_Shrz_hffdI4BvwP6yuY9xBIq9sLayyA',
            linkedIn: 'https://www.linkedin.com/in/irma-nohemi-solis-loyo/',
            gitHub: 'https://github.com/INSolisLoyo',
            gmail: 'mimisolisloyo@gmail.com'
        },

    ]

    const backEndColaborators = [
        {
            name: 'Alma Cane',
            identity: 'https://media.licdn.com/dms/image/D4E03AQF7MZIRY0FJog/profile-displayphoto-shrink_800_800/0/1709665737069?e=1718236800&v=beta&t=uQO3siD-bvd2BQtro6augG9MIZFUszHqF8e6n9wI4-A',
            linkedIn: 'https://www.linkedin.com/in/alma-cane-a678ab217/',
            gitHub: 'https://github.com/AlmaCane',
            gmail: 'almacane36@gmail.com'
        },
        {
            name: 'Ezequiel Sarrugeri',
            identity: 'https://media.licdn.com/dms/image/D4E03AQGHeLH2N8nbNQ/profile-displayphoto-shrink_800_800/0/1676917702911?e=1718236800&v=beta&t=WazXUOzJx914WCMz5QDkllE2UFhLh5oXns-tqG2tyho',
            linkedIn: 'https://www.linkedin.com/in/ezesarru/',
            gitHub: 'https://github.com/ezesarru',
            gmail: 'ezesarru@gmail.com'
        },
        {
            name: 'Franco Bottaro',
            identity: 'https://media.licdn.com/dms/image/D4D35AQHLhWsXYCWa5A/profile-framedphoto-shrink_800_800/0/1710874990871?e=1713376800&v=beta&t=A2r8lN_QvS9sIBb1Mv6xQZtbgE00BEYqMwUS3Nkivug',
            linkedIn: 'https://www.linkedin.com/in/franco-adolfo-bottaro/',
            gitHub: 'https://github.com/francoabottaro',
            gmail: 'francoabottaro@gmail.com'
        },
        {
            name: 'Yonathan Ponce',
            identity: 'https://avatars.githubusercontent.com/u/122419336?v=4',
            linkedIn: 'https://www.linkedin.com/in/yonathan-ponce-b055a9284/?trk=contact-info',
            gitHub: 'https://github.com/Ponce08',
            gmail: 'yonathanponce2019@gmail.com'
        },

    ]

    const handleClick = (link) => {

        window.location.href = link;

    }

    return (

        <section className="w-9/12 font-RedHat flex flex-col gap-4">

            <article>
                <h1 className="text-center text-2xl text-[#ae5e48]">About Us</h1>
                <p className="mt-4">This project was crafted with a lot of effort and dedication for the Final Project stay at Soy Henry. It's our first project together. For any contact, we leave our social media handles here. We appreciate any suggestions!</p>
            </article>

            {/* Cards */}
            <div className="flex flex-col gap-4">

                {/* FrontEnd💜 */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-center">Front End Colaborators</h2>
                    <div className="flex justify-center items-center gap-4">
                        {
                            frontEndColaborators.map( (frontColaborator) => {
                                return (

                                    <div className="bg-[#e7d0c1] flex-1 flex flex-col gap-4 items-center justify-center rounded-lg p-4">

                                        <img src={frontColaborator.identity} className="h-20 w-20 rounded-full object-cover"/>

                                        <div class="w-full flex flex-col gap-1 items-center justify-center">

                                            <h1 class="text-md font-medium text-[#331917] font-RedHat">{frontColaborator.name}</h1>
                                            <div class="w-full flex items-center justify-center gap-3">

                                                <button className="bg-[#ae5e48] py-1 rounded-lg w-full"
                                                    onclick={ () => handleClick(frontColaborator.linkedIn)}
                                                >

                                                    <FontAwesomeIcon icon={faLinkedinIn} 
                                                        size="xl" className="text-white cursor-pointer transform transition-transform duration-300 hover:scale-110"
                                                    />

                                                </button>

                                                <button className="bg-[#ae5e48] py-1 rounded-lg w-full"
                                                    onclick={ () => handleClick(frontColaborator.gitHub)}
                                                >

                                                    <FontAwesomeIcon icon={faGithub} 
                                                        size="xl" className="text-white cursor-pointer transform transition-transform duration-300 hover:scale-110"
                                                    />

                                                </button>

                                                <Popover>
                                                        
                                                    <CopyToClipboard text={frontColaborator.gmail}>

                                                      <Popover.Button
                                                        className="bg-[#ae5e48] py-1 px-4 rounded-lg w-full"
                                                        onClick={() => {}}
                                                      >
                                                        <FontAwesomeIcon
                                                          icon={faEnvelope}
                                                          size="xl"
                                                          className="text-white cursor-pointer transform transition-transform duration-300 hover:scale-110"
                                                        />
                                                      </Popover.Button>

                                                    </CopyToClipboard>

                                                      <Popover.Panel className="absolute z-10 m-4 bg-white w-20">
                                                        
                                                        <div className="flex gap-2 items-baseline">

                                                            <p className="text-[#ae5e48]">Copied</p>
                                                          <FontAwesomeIcon icon={faClipboardCheck}
                                                            size="2xl"
                                                            className="text-[#ae5e48]"
                                                          />

                                                        </div>
                                                       
                                                       </Popover.Panel>
                                                    
                                                </Popover>                                  
                                                                                                        
                                            </div>

                                         </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                 {/* Bakend💜 */}
                 <div className="flex flex-col gap-4">
                    <h2 className="text-center">Front End Colaborators</h2>
                    <div className="flex justify-center items-center gap-4">
                        {
                            backEndColaborators.map( (backColaborator) => {
                                return (

                                    <div className="bg-[#e7d0c1] flex-1 flex flex-col gap-4 items-center justify-center rounded-lg p-4">

                                        <img src={backColaborator.identity} className="h-20 w-20 rounded-full object-cover"/>

                                        <div class="w-full flex flex-col gap-1 items-center justify-center">

                                            <h1 class="text-md font-medium text-[#331917] font-RedHat">{backColaborator.name}</h1>
                                            <div class="w-full flex items-center justify-center gap-3">

                                                <button className="bg-[#ae5e48] py-1 rounded-lg w-full"
                                                    onclick={ () => handleClick(backColaborator.linkedIn)}
                                                >

                                                    <FontAwesomeIcon icon={faLinkedinIn} 
                                                        size="xl" className="text-white cursor-pointer transform transition-transform duration-300 hover:scale-110"
                                                    />

                                                </button>

                                                <button className="bg-[#ae5e48] py-1 rounded-lg w-full"
                                                    onclick={ () => handleClick(backColaborator.gitHub)}
                                                >

                                                    <FontAwesomeIcon icon={faGithub} 
                                                        size="xl" className="text-white cursor-pointer transform transition-transform duration-300 hover:scale-110"
                                                    />

                                                </button>

                                                <Popover>
                                                        
                                                    <CopyToClipboard text={backColaborator.gmail}>

                                                      <Popover.Button
                                                        className="bg-[#ae5e48] py-1 px-4 rounded-lg w-full"
                                                        onClick={() => {}}
                                                      >
                                                        <FontAwesomeIcon
                                                          icon={faEnvelope}
                                                          size="xl"
                                                          className="text-white cursor-pointer transform transition-transform duration-300 hover:scale-110"
                                                        />
                                                      </Popover.Button>

                                                    </CopyToClipboard>

                                                      <Popover.Panel className="absolute z-10 m-4 bg-white w-20">
                                                        
                                                        <div className="flex gap-2 items-baseline">

                                                            <p className="text-[#ae5e48]">Copied</p>
                                                          <FontAwesomeIcon icon={faClipboardCheck}
                                                            size="2xl"
                                                            className="text-[#ae5e48]"
                                                          />

                                                        </div>
                                                       
                                                       </Popover.Panel>
                                                    
                                                </Popover>                                  
                                                                                                        
                                            </div>

                                         </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </section>
    )
}

export default AboutUs;