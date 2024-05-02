import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import axios from '../../axios/axios';
import SearchbarProduct from './SearchbarProduct';
import Swal from 'sweetalert2';
import { getToken } from '../../utils/data';


export default function Products() {

  const navigate = useNavigate();

  const [ products, setProducts ] = useState([]);

  const handleUpdate = (id) => {

    navigate(`/update-product/${id}`);
   
  }

  const handleCreate = () => {

    navigate('/create');
   
  }

  const handleDelete = async (id) => {

    const confirmDelete = await Swal.fire({
      title: "Do you want to delete this product?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    });

    if(confirmDelete.isConfirmed){

      try {
        
        const token = getToken()
    
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const response = await axios.delete(`/product/${id}`, config)
        if(response){
          Swal.fire('Product deleted')
        }
        fetchProducts();
      } catch (error) {
        Swal.fire('Cannot delete product')
        console.error(error);
      }

    }

  }

  const handleStatusChange = async (product, option) => {

    let isActive;

    if(option){
      isActive = "true"
    } else {
      isActive = "false"
    }

    const token = getToken()

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    try {

      const newObject = {
        ...product,
        isActive: isActive
      }
      
      const response = await axios.put(`/product/${product.id}`, newObject, config)
      if(response){
        Swal.fire('Product update')
      }
    } catch (error) {
      Swal.fire('Error to update the product');
    }

  }

  const fetchProducts = async () => {

    const { data } = await axios.post('/product', {
      name: '',
      gender: undefined,
      minPrice: 0,
      maxPrice: 158,
      material: [],
      colour: [],
      orderType: '',
      order: '',
      category: undefined,
      pageNumber: 1,
      productLimit: 160
    })

    setProducts(data);

  }

  useEffect(() => {

    fetchProducts();

  }, [])

  useEffect(() => {

  }, [products])

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

  return (

    // Div principal
    <div className="w-full h-auto overflow-x-auto font-RedHat ">

      <h2 className="text-center text-xl pb-5 ">Products</h2>

      {/* div de searchbar y button new */}
      <div className='w-full flex justify-start gap-8'>
   
        <button className='shadow border border-slate-300 rounded-xl shadow-slate-300 mb-3 py-2 w-2/6 bg-primary/10 hover:bg-primary/40' onClick={handleCreate}>New</button>

        <SearchbarProduct setProducts={setProducts}/>

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

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>

                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                </th>

                <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                </th>

              </tr>

            </thead>

            <tbody className='bg-white divide-y divide-gray-200'>

              {
                products?.map( (product) => {

                  return (
                    
                    <tr className="bg-white shadow-md border-b border-slate-300" key={product.id}>

                      <td className="px-2 py-4 whitespace-nowrap border-b border-slate-300">
                        {product.id}
                      </td>

                      <td className="px-2 py-4 whitespace-nowrap border-b border-slate-300">
                        {product.name}
                      </td>

                      <td className="px-2 py-4 whitespace-nowrap border-b border-slate-300 ">
                          <Select
                            defaultValue={{
                              value: product.isActive,
                              label: product.isActive ? "Active" : "Inactive",
                            }}
                            options={[
                              { value: true, label: "Active" },
                              { value: false, label: "Inactive" },
                            ]}
                            onChange={(selectedOption) =>
                              handleStatusChange(product, selectedOption.value)
                            }
                            styles={customStyles}
                          />
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                        
                        <button className="bg-green-600 w-[90px] flex justify-center text-center gap-1 items-center text-white p-2 rounded-md" onClick={() => handleUpdate(product.id)}>Update</button>

                      </td>

                      <td className="px-6 py-4 whitespace-nowrap border-b border-slate-300">
                        
                        <button className="bg-red-600 w-[90px] flex justify-center text-center gap-1 items-center text-white p-2 rounded-md" onClick={() => handleDelete(product.id)}>

                          Delete
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>


                        </button>

                      </td>

                    </tr>

                  )
                })
              }


            </tbody>

          </table>

        </div>
      </div>

    </div>
  )

}
