// Usuarios.js
import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="overflow-x-auto font-RedHat ">
      <h2 className="text-center text-xl  pb-5 ">
        Users
      </h2>
      <div className="navbar-users shadow border border-slate-300 shadow-slate-300 mb-3 py-2   ">
        <input className="m-auto text-center w-full outline-none " type="text" placeholder="Search users..." />
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white shadow-md border-b border-slate-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                    {user.name} {user.lastname}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <div
                      className={`inline-block rounded-md p-2 ${
                        user.isActive
                          ? "bg-green-400 w-[80px] text-center "
                          : "bg-red-400 w-[80px] text-center "
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <div
                      className={`inline-block rounded-md p-2 ${
                        user.isAdmin
                          ? "bg-yellow-300 w-[80px] text-center "
                          : "bg-blue-200 w-[80px] text-center "
                      }`}
                    >
                      {user.isAdmin ? "Admin" : "User"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300 ">
                    <button className="bg-primary/55 p-2  rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
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
