import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        // Actualizar el estado con los datos de los usuarios recibidos
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleStatusChange = (userId, newStatus) => {
    // Actualizar el estado de activación del usuario en el estado local y en el servidor
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, isActive: newStatus };
      }
      return user;
    });

    // Actualizar el estado local con los usuarios actualizados
    setUsers(updatedUsers);

    // Aquí deberías enviar la solicitud al servidor para actualizar el estado en la base de datos
  };

  const handlePositionChange = (userId, newPosition) => {
    const updatedUsers = users.map(user => {
      if(user.id === userId) {
        return {...user, isAdmin: newPosition};
      }
      return user;
    })
    setUsers(updatedUsers);
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.menuIsOpen ? '#f3f4f6' : (state.selectProps.value && state.selectProps.value.value ? '#d1fae5' : '#fee2e2'),
      borderColor: state.selectProps.menuIsOpen ? '#7c3aed' : '#e5e7eb',
      "&:hover": { borderColor: state.selectProps.menuIsOpen ? '#7c3aed' : (state.selectProps.value && state.selectProps.value.value ? '#d1fae5' : '#fee2e2') }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.selectProps.value && state.selectProps.value.value ? '#059669' : '#9b2c2c'
    })
  };

  const customStyles2 = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.menuIsOpen ? '#f3f4f6' : (state.selectProps.value && state.selectProps.value.value ? '#F8F87F' : '#93D5F4'),
      borderColor: state.selectProps.menuIsOpen ? '#7c3aed' : '#e5e7eb',
      "&:hover": { borderColor: state.selectProps.menuIsOpen ? '#7c3aed' : (state.selectProps.value && state.selectProps.value.value ? '#d1fae5' : '#fee2e2') }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.selectProps.value && state.selectProps.value.value ? '#BAC302' : '#3542E3'
    })
  };

  return (
    <div className="overflow-x-auto font-RedHat ">
      <h2 className="text-center text-xl pb-5 ">Users</h2>
      <div className="navbar-users shadow border border-slate-300 shadow-slate-300 mb-3 py-2   ">
        <input className="m-auto text-center w-full outline-none " type="text" placeholder="Search users..." />
      </div>
      <div className="mx-auto">
        <div className="overflow-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="border-b border-slate-300  ">
                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="bg-white shadow-md border-b border-slate-300">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">{user.name} {user.lastname}</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <Select
                      defaultValue={{ value: user.isActive, label: user.isActive ? 'Active' : 'Inactive' }}
                      options={[
                        { value: true, label: 'Active' },
                        { value: false, label: 'Inactive' }
                      ]}
                      onChange={(selectedOption) => handleStatusChange(user.id, selectedOption.value)}
                      styles={customStyles}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <Select
                    defaultValue={{ value: user.isAdmin, label: user.isAdmin ? 'Admin' : 'User' }}
                    options={[
                      { value: true, label: 'Admin' },
                      { value: false, label: 'User'}
                    ]}
                    onChange={(selectedOption) => handlePositionChange(user.id, selectedOption.value) } 
                    styles={customStyles2}
                    />

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <button className="bg-red-600 text-white p-2  rounded-md ">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
