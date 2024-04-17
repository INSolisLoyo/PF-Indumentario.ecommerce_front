import React, { useState } from 'react'

export default function Products() {

  const [ products, setProducts ] = useState([]);
  const [ rederProducts, setRenderProducst ] = useState([]);

  const handleUpdate = () => {

  }

  const handleDelete = () => {

  }

  return (

    // Div principal
    <div className="overflow-x-auto font-RedHat ">

      <h2 className="text-center text-xl pb-5 ">Products</h2>

      {/* div de searchbar y button new */}
      <div className='w-full flex justify-start gap-8'>
   
        <button className='shadow border border-slate-300 rounded-xl shadow-slate-300 mb-3 py-2 w-2/6 bg-primary/10 hover:bg-primary/40'>New</button>

        <div className="shadow border border-slate-300 shadow-slate-300 mb-3 py-2 w-4/6  ">
          <input
            className="m-auto text-center w-full outline-none "
            type="text"
            placeholder="Search one product by ID..."
          />
        </div>

      </div>

      {/* Contenedor principal de la tabla */}
      <div className="mx-auto">
  
        {/* Contenedor de la tabla */}
        <div className="overflow-auto">

          <table className="w-full divide-y divide-gray-200">

            <thead className="bg-gray-50">

              <tr className="border-b border-slate-300">

                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>

                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>

                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                </th>

                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                </th>

              </tr>

            </thead>

            <tbody className='bg-white divide-y divide-gray-200'>

              <tr className="bg-white shadow-md border-b border-slate-300">

                <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                  Patito
                </td>

                <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                  123-456-789-ABC
                </td>

                <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                  
                  <button className="bg-green-600 w-[90px] flex justify-center text-center gap-1 items-center text-white p-2 rounded-md ">Update</button>

                </td>

                <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                  
                  <button className="bg-red-600 w-[90px] flex justify-center text-center gap-1 items-center text-white p-2 rounded-md ">

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

            </tbody>

          </table>

        </div>
      </div>

    </div>
  )

}
