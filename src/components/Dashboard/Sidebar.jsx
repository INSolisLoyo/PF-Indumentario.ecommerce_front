// En Sidebar.js
import React from 'react';

function Sidebar({ handleUsuariosClick, handleProductsClick, handleEstadisticsClick }) {
  return (
    <div className="h-full w-64 bg-white text-black  shadow shadow-slate-500 ">
      <ul className="space-y-2">
        {/* Llama a handleUsuariosClick cuando hagas clic en el enlace de Usuarios */}
        <li className='border-b-slate-900 shadow-sm shadow-slate-500 border-t-[.5px] border-t-slate-400'><button onClick={handleUsuariosClick} className="block p-4">Users</button></li>
        <li className='border-b shadow-sm shadow-slate-500'><button onClick={handleProductsClick } className="block p-4">Products</button></li>
        <li className='border-b shadow-sm shadow-slate-500'><button onClick={handleEstadisticsClick } className="block p-4">Stadistics</button></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </div>
  );
}

export default Sidebar;
