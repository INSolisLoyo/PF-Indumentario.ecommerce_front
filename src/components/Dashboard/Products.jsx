import React, { useState } from 'react'

export default function Products() {

  const [ products, setProducts ] = useState([])

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

    </div>
  )

}
