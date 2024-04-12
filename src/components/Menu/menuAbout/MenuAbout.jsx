import React, { useState, useEffect } from "react";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importa los íconos de GitHub y LinkedIn desde FontAwesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de correo electrónico desde FontAwesome


const teamMembers = [
  {
    name: "Nohemi Solis",
    role: "Frontend",
    image: "https://avatars.githubusercontent.com/u/119553805?v=4",
    github: "https://github.com/INSolisLoyo",
    linkedin: "https://www.linkedin.com/in/irma-nohemi-solis-loyo/",
    mail: "mimisolisloyo@gmail.com",
  },
  {
    name: "Brenda Baumann",
    role: "Frontend",
    image: "https://avatars.githubusercontent.com/u/137459806?v=4",
    github: "https://github.com/BBrendaBaumann",
    linkedin: "https://www.linkedin.com/in/brenda-baumann-b74956195/",
    mail: "brenbaumann40@gmail.com",
  },
  {
    name: "Oswaldo palacios",
    role: "Frontend",
    image: "https://avatars.githubusercontent.com/u/123770518?v=4",
    github: "https://github.com/SROSWALDO",
    linkedin: "https://www.linkedin.com/in/oswaldo-palacios-perez-523887270/",
    mail: "kirito135615@gmail.com",
  },
  {
    name: "Jerry Murillo",
    role: "Frontend",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocKqOiXUDRBsHmrKcf0C0R4Ssg13FidJp8SP1h2IGdk6AOi69756=s288-c-no",
    github: "https://github.com/JMurilloCortes",
    linkedin: "https://www.linkedin.com/in/jerry-murillo/",
    mail: "jealmuco@gmail.com",
  },
  {
    name: "Alma Cane",
    role: "Backend",
    image: "https://media.licdn.com/dms/image/D4E03AQF7MZIRY0FJog/profile-displayphoto-shrink_800_800/0/1709665737069?e=1718236800&v=beta&t=uQO3siD-bvd2BQtro6augG9MIZFUszHqF8e6n9wI4-A",
    github: "https://github.com/AlmaCane",
    linkedin: "https://www.linkedin.com/in/alma-cane-a678ab217/",
    mail: "jealmuco@gmail.com",
  },
  {
    name: "Jhonatan Ponce",
    role: "Backend",
    image: "https://avatars.githubusercontent.com/u/122419336?v=4",
    github: "https://github.com/Ponce08",
    linkedin: "url_linkedin_6",
    mail: "jealmuco@gmail.com",
  },
  {
    name: "Franco Bottaro",
    role: "Backend",
    image: "https://media.licdn.com/dms/image/D4D35AQHLhWsXYCWa5A/profile-framedphoto-shrink_800_800/0/1710874990871?e=1712811600&v=beta&t=G2KJvme8hzrWm3zz-JIML5KPGo86xtXoR7SXsc2Mm0o",
    github: "https://github.com/francobottaro",
    linkedin: "https://www.linkedin.com/in/franco-adolfo-bottaro/",
    mail: "jealmuco@gmail.com",
  },
  {
    name: "Ezequiel Sarrugeri",
    role: "Backend",
    image: "https://avatars.githubusercontent.com/u/85004180?v=4",
    github: "https://github.com/ezesarru",
    linkedin: "https://www.linkedin.com/in/ezesarru/",
    mail: "jealmuco@gmail.com",
  },
];

const MenuAbout = () => {
  const { aboutMenuOpen, toggleAboutMenu } = useMenuStore();

  const handleClick = () => {
    toggleAboutMenu();
  };

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (aboutMenuOpen && !event.target.closest(".about-menu")) {
        toggleAboutMenu();
      }
    };

    document.body.addEventListener("click", handleCloseMenu);

    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
    };
  }, [aboutMenuOpen, toggleAboutMenu]);

  return (
    <div className="about-menu">
      <div
        onClick={handleClick}
        className="block uppercase font-extrabold cursor-pointer focus:outline-none"
      >
        About
      </div>

      {aboutMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full shadow-lg transform transition-transform duration-500 ${
            aboutMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-center items-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-2"
                />
                <p className="text-center font-semibold">{member.name}</p>
                <p className="text-center text-sm text-gray-500 mb-2">
                  {member.role}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a
                    href={`mailto:${member.mail}`}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuAbout;








// import React, { useState, useEffect } from "react";
// import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesomeIcon desde la biblioteca FontAwesome
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importa los íconos de GitHub y LinkedIn desde FontAwesome

// // Array con la información de los integrantes del grupo de desarrollo
// const teamMembers = [
//   {
//     name: "Nohemi Solis",
//     role: "Frontend",
//     image: "https://avatars.githubusercontent.com/u/119553805?v=4",
//     github: "https://github.com/INSolisLoyo",
//     linkedin: "https://www.linkedin.com/in/irma-nohemi-solis-loyo/",
//     mail: "mimisolisloyo@gmail.com",
//   },
//   {
//     name: "Brenda Baumann",
//     role: "Frontend",
//     image: "https://avatars.githubusercontent.com/u/137459806?v=4",
//     github: "https://github.com/BBrendaBaumann",
//     linkedin: "https://www.linkedin.com/in/brenda-baumann-b74956195/",
//     mail: "brenbaumann40@gmail.com",
//   },
//   {
//     name: "Oswaldo palacios",
//     role: "Frontend",
//     image: "https://avatars.githubusercontent.com/u/123770518?v=4",
//     github: "https://github.com/SROSWALDO",
//     linkedin: "https://www.linkedin.com/in/oswaldo-palacios-perez-523887270/",
//     mail: "jealmuco@gmail.com",
//   },
//   {
//     name: "Jerry Murillo",
//     role: "Frontend",
//     image:
//       "https://lh3.googleusercontent.com/a/ACg8ocKqOiXUDRBsHmrKcf0C0R4Ssg13FidJp8SP1h2IGdk6AOi69756=s288-c-no",
//     github: "https://github.com/JMurilloCortes",
//     linkedin: "https://www.linkedin.com/in/jerry-murillo/",
//     mail: "jealmuco@gmail.com",
//   },
//   {
//     name: "Alma Cane",
//     role: "Backend",
//     image: "https://media.licdn.com/dms/image/D4E03AQF7MZIRY0FJog/profile-displayphoto-shrink_800_800/0/1709665737069?e=1718236800&v=beta&t=uQO3siD-bvd2BQtro6augG9MIZFUszHqF8e6n9wI4-A",
//     github: "https://github.com/AlmaCane",
//     linkedin: "https://www.linkedin.com/in/alma-cane-a678ab217/",
//     mail: "jealmuco@gmail.com",
//   },
//   {
//     name: "Jhonatan Ponce",
//     role: "Backend",
//     image: "https://avatars.githubusercontent.com/u/122419336?v=4",
//     github: "https://github.com/Ponce08",
//     linkedin: "url_linkedin_6",
//     mail: "jealmuco@gmail.com",
//   },
//   {
//     name: "Franco Bottaro",
//     role: "Backend",
//     image: "https://media.licdn.com/dms/image/D4D35AQHLhWsXYCWa5A/profile-framedphoto-shrink_800_800/0/1710874990871?e=1712811600&v=beta&t=G2KJvme8hzrWm3zz-JIML5KPGo86xtXoR7SXsc2Mm0o",
//     github: "https://github.com/francobottaro",
//     linkedin: "https://www.linkedin.com/in/franco-adolfo-bottaro/",
//     mail: "jealmuco@gmail.com",
//   },
//   {
//     name: "Ezequiel Sarrugeri",
//     role: "Backend",
//     image: "https://avatars.githubusercontent.com/u/85004180?v=4",
//     github: "https://github.com/ezesarru",
//     linkedin: "https://www.linkedin.com/in/ezesarru/",
//     mail: "jealmuco@gmail.com",
//   },
// ];

// const MenuAbout = () => {
//   const { aboutMenuOpen, toggleAboutMenu } = useMenuStore();

//   const handleClick = () => {
//     toggleAboutMenu();
//   };

//   useEffect(() => {
//     // Función para cerrar el menú si se hace clic fuera de él
//     const handleCloseMenu = (event) => {
//       if (aboutMenuOpen && !event.target.closest(".about-menu")) {
//         toggleAboutMenu();
//       }
//     };

//     // Agregar el manejador de eventos al cuerpo del documento
//     document.body.addEventListener("click", handleCloseMenu);

//     // Limpiar el manejador de eventos al desmontar el componente
//     return () => {
//       document.body.removeEventListener("click", handleCloseMenu);
//     };
//   }, [aboutMenuOpen, toggleAboutMenu]);

//   return (
//     <div className="about-menu">
//       <div
//         onClick={handleClick}
//         className="block uppercase font-extrabold cursor-pointer focus:outline-none"
//       >
//         About
//       </div>

//       {aboutMenuOpen && (
//         // Menú desplegable
//         <div
//           className={`absolute top-full left-0 w-full shadow-lg transform transition-transform duration-500 ${
//             aboutMenuOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex justify-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
//             {teamMembers.map((member, index) => (
//               <div key={index}>
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mb-2"
//                 />
//                 <p className="text-center font-semibold">{member.name}</p>
//                 <p className="text-center text-sm text-gray-500 mb-2">
//                   {member.role}
//                 </p>
//                 <div className="flex justify-center gap-4">
//                   <a
//                     href={member.github}
//                     target="_blank"
//                     className="text-gray-600 hover:text-gray-900"
//                   >
//                     {/* Utiliza el componente FontAwesomeIcon para mostrar el ícono de GitHub */}
//                     <FontAwesomeIcon icon={faGithub} size="lg" />
//                   </a>
//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     className="text-gray-600 hover:text-gray-900"
//                   >
//                     {/* Utiliza el componente FontAwesomeIcon para mostrar el ícono de LinkedIn */}
//                     <FontAwesomeIcon icon={faLinkedin} size="lg" />
//                   </a>
                  
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuAbout;