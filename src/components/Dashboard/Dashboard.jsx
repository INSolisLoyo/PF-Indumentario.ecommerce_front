// En Dashboard.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Usuarios from "./Usuarios";
import Products from "./Products";
import Estadisticas from "./Estadisticas";
// Importa otros componentes según sea necesario

function Dashboard() {
  // Estado para controlar qué componente se muestra en el área de contenido
  const [currentComponent, setCurrentComponent] = useState(null);

  // Función para manejar el clic en el enlace de Usuarios
  const handleUsuariosClick = () => {
    setCurrentComponent(<Usuarios />);
  };

  const handleProductsClick = () => {
    setCurrentComponent(<Products />);
  };

  const handleEstadisticsClick = () => {
    setCurrentComponent(<Estadisticas />);
  };

  return (
    <div className="flex pt-16 min-h-screen ">
      <Sidebar
        handleUsuariosClick={handleUsuariosClick}
        handleProductsClick={handleProductsClick}
        handleEstadisticsClick={handleEstadisticsClick}
      />
      <div className="flex-1 p-10">

        {/* Renderiza el componente actual en el área de contenido */}
        {currentComponent}
      </div>
    </div>
  );

  <div
                      className={`inline-block rounded-md p-2 ${
                        user.isActive
                          ? "bg-green-400 w-[80px] text-center "
                          : "bg-red-400 w-[80px] text-center "
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </div>
}

export default Dashboard;
