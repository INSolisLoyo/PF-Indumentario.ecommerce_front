import React, { useState, useEffect } from "react";
import { useMenuStore } from "../../UseMenuStore/UseMenuStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesomeIcon desde la biblioteca FontAwesome
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importa los íconos de GitHub y LinkedIn desde FontAwesome

// Array con la información de los integrantes del grupo de desarrollo
const teamMembers = [
  {
    name: "Nohemi Solis",
    role: "Frontend",
    image: "https://avatars.githubusercontent.com/u/119553805?v=4",
    github: "https://github.com/INSolisLoyo",
    linkedin: "https://www.linkedin.com/in/irma-nohemi-solis-loyo/",
  },
  {
    name: "Brenda Baumann",
    role: "Frontend",
    image: "https://avatars.githubusercontent.com/u/137459806?v=4",
    github: "https://github.com/BBrendaBaumann",
    linkedin: "https://www.linkedin.com/in/brenda-baumann-b74956195/",
  },
  {
    name: "Oswaldo palacios",
    role: "Frontend",
    image: "https://avatars.githubusercontent.com/u/123770518?v=4",
    github: "https://github.com/SROSWALDO",
    linkedin: "https://www.linkedin.com/in/oswaldo-palacios-perez-523887270/",
  },
  {
    name: "Jerry Murillo",
    role: "Frontend",
    image: "https://avatars.githubusercontent.com/u/106932819?v=4",
    github: "https://github.com/JMurilloCortes",
    linkedin: "https://www.linkedin.com/in/jerry-murillo/",
  },
  {
    name: "Alma Cane",
    role: "Backend",
    image: "https://avatars.githubusercontent.com/u/145514315?v=4",
    github: "https://github.com/AlmaCane",
    linkedin: "https://www.linkedin.com/in/alma-cane-a678ab217/",
  },
  {
    name: "Jhonatan Ponce",
    role: "Backend",
    image: "https://avatars.githubusercontent.com/u/122419336?v=4",
    github: "https://github.com/Ponce08",
    linkedin: "url_linkedin_6",
  },
  {
    name: "Franco Bottaro",
    role: "Backend",
    image: "https://avatars.githubusercontent.com/u/60520589?v=4",
    github: "https://github.com/francobottaro",
    linkedin: "https://www.linkedin.com/in/franco-adolfo-bottaro/",
  },
  {
    name: "Ezequiel Sarrugeri",
    role: "Backend",
    image: "https://avatars.githubusercontent.com/u/85004180?v=4",
    github: "https://github.com/ezesarru",
    linkedin: "https://www.linkedin.com/in/ezesarru/",
  },
];

const MenuAbout = () => {
  const { aboutMenuOpen, toggleAboutMenu } = useMenuStore();

  const handleClick = () => {
    toggleAboutMenu();
  };

  useEffect(() => {
    // Función para cerrar el menú si se hace clic fuera de él
    const handleCloseMenu = (event) => {
      if (aboutMenuOpen && !event.target.closest(".about-menu")) {
        toggleAboutMenu();
      }
    };

    // Agregar el manejador de eventos al cuerpo del documento
    document.body.addEventListener("click", handleCloseMenu);

    // Limpiar el manejador de eventos al desmontar el componente
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
        // Menú desplegable
        <div
          className={`absolute top-full left-0 w-full shadow-lg transform transition-transform duration-500 ${
            aboutMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-center gap-[50px] p-11 z-10 h-[350px] bg-white/80">
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
                    {/* Utiliza el componente FontAwesomeIcon para mostrar el ícono de GitHub */}
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {/* Utiliza el componente FontAwesomeIcon para mostrar el ícono de LinkedIn */}
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
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