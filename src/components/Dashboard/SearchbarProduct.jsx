import React, { useState } from "react";
import axios from "../../axios/axios";

const SearchbarProduct = ({ setProducts }) => {

    const [searchTerm, setSearchTerm] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);     
            fetchProducts();      
    }

    const fetchProducts = async () => {

        try {
            
            const { data } = await axios.post('/product', {
              name: searchTerm,
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

        } catch (error) {
            console.log('Error to get products');
        }

      }

    

    return (

        <div className="shadow border border-slate-300 shadow-slate-300 mb-3 py-2 w-4/6  ">
 
           <input
            className="m-auto text-center w-full outline-none "
            type="text"
            placeholder="Name product..."
            value={searchTerm}
            onChange={handleInputChange}
            /> 

        </div>

    )
}

export default SearchbarProduct;