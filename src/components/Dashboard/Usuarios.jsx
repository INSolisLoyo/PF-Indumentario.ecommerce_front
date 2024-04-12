import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import Select from "react-select";

export default function Usuarios() {
  const [users, setUsers] = useState([]);

  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const deleteUser = async (userId) => {
      try {
        const response = await axios.delete(`/user/${userId}`);
        if (response.data.success) {
          console.log("User deleted:", response.data.user);
        } else {
          console.error("Error al eliminar el usuario:", response.data.message);
        }
      } catch (error) {
        console.error("Error al intentar eliminar el usuario", error);
      }
    };

    // Aquí recorres todos los usuarios y eliminas los que tengan un flag "toDelete"
    users.forEach(async (user) => {
      if (user.toDelete) {
        await deleteUser(user.id);
        setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id));
      }
    });
  }, [users]);

  const deleteUserChange = (userId) => {
    // Marca el usuario para eliminar
    setUsers(prevUsers =>
      prevUsers.map(user => (user.id === userId ? { ...user, toDelete: true } : user))
    );
  };

  const handleStatusChange = async (userId, newStatus) => {
    try {
      // Enviar la solicitud al servidor para actualizar el estado en la base de datos
      const response = await axios.put(`/user/${userId}`, {
        isActive: newStatus,
      });

      if (response.data.success) {
        // Si la solicitud es exitosa, actualizar el estado local
        const updatedUsers = users.map((user) => {
          if (user.id === userId) {
            return { ...user, isActive: newStatus };
          }
          return user;
        });
        setUsers(updatedUsers);
        
      } else {
        // Si hay un error en la solicitud, mostrar un mensaje de error
        console.error(
          "Error al actualizar el estado del usuario:",
          response.data.message
        );
      }
    } catch (error) {
      console.error("Error al actualizar el estado del usuario:", error);
    }
  };

  const handleAdminChange = async (userId, isAdmin) => {
    try {
      const response = await axios.put(`/user/${userId}`, {
        isAdmin,
      });

      if (response.data.success) {
        const updatedUsers = users.map((user) =>
          user.id === userId ? { ...user, isAdmin: isAdmin } : user
        );
        setUsers(updatedUsers);
        console.log("Usuario actualizado:", response.data.user);
      } else {
        console.error("Error al actualizar el usuario:", response.data.message);
      }
    } catch (error) {
      console.error("Error al intentar actualizar el usuario:", error);
    }
  };


  

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.menuIsOpen
        ? "#f3f4f6"
        : state.selectProps.value && state.selectProps.value.value
        ? "#d1fae5"
        : "#fee2e2",
      borderColor: state.selectProps.menuIsOpen ? "#7c3aed" : "#e5e7eb",
      "&:hover": {
        borderColor: state.selectProps.menuIsOpen
          ? "#7c3aed"
          : state.selectProps.value && state.selectProps.value.value
          ? "#d1fae5"
          : "#fee2e2",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color:
        state.selectProps.value && state.selectProps.value.value
          ? "#059669"
          : "#9b2c2c",
    }),
  };

  const customStyles2 = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.menuIsOpen
        ? "#f3f4f6"
        : state.selectProps.value && state.selectProps.value.value
        ? "#F8F87F"
        : "#93D5F4",
      borderColor: state.selectProps.menuIsOpen ? "#7c3aed" : "#e5e7eb",
      "&:hover": {
        borderColor: state.selectProps.menuIsOpen
          ? "#7c3aed"
          : state.selectProps.value && state.selectProps.value.value
          ? "#d1fae5"
          : "#fee2e2",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color:
        state.selectProps.value && state.selectProps.value.value
          ? "#BAC302"
          : "#3542E3",
    }),
  };

  return (
    <div className="overflow-x-auto font-RedHat ">
      <h2 className="text-center text-xl pb-5 ">Users</h2>
      <div className="navbar-users shadow border border-slate-300 shadow-slate-300 mb-3 py-2   ">
        <input
          className="m-auto text-center w-full outline-none "
          type="text"
          placeholder="Search users..."
        />
      </div>
      <div className="mx-auto">
        <div className="overflow-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="border-b border-slate-300  ">
                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white shadow-md border-b border-slate-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                    {" "}
                    {user.name} {user.lastname}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <Select
                      defaultValue={{
                        value: user.isActive,
                        label: user.isActive ? "Active" : "Inactive",
                      }}
                      options={[
                        { value: true, label: "Active" },
                        { value: false, label: "Inactive" },
                      ]}
                      onChange={(selectedOption) =>
                        handleStatusChange(user.id, selectedOption.value)
                      }
                      styles={customStyles}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <Select
                      defaultValue={{
                        value: user.isAdmin,
                        label: user.isAdmin ? "Admin" : "User",
                      }}
                      options={[
                        { value: true, label: "Admin" },
                        { value: false, label: "User" },
                      ]}
                      onChange={(selectedOption) =>
                        handleAdminChange(user.id, selectedOption.value)
                      }
                      styles={customStyles2}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <button
                      onClick={() => deleteUserChange(user.id)}
                      className="bg-red-600 w-[90px] flex justify-center text-center gap-1 items-center text-white p-2 rounded-md "
                    >
                      Delete
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
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
