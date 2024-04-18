import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios";
import Swal from "sweetalert2";
import { validateProductData } from "./validateProductData";

const UpdateProduct = () => {

  const animatedComponents = makeAnimated();

  const { id } = useParams();
  
  const [ form, setForm ] = useState({
    id: '',
    name: '',
    price: '',
    gender: '',
    images: [],
    colour: [],
    material: [],
    category: '',
    description: [],
    isActive: true,
    
  })

  const [ errors, setErrors ] = useState({
    name: '',
    price: '',
    images: '',
    colour: '',
    material: '',
    description: '',
  })

  const [ materials, setMaterials] = useState([]);
  const [ colors, setColors ] = useState([]);
  const [ categories, setCategories ] = useState([]);

  const [imageUrls, setImageUrls] = useState([""]);

  const succesAlert = () => {
    return Swal.fire({
      title: "The Product Create Sucessfull!",
      icon: "success",
    });
  };

  const errorAlert = () => {
    return Swal.fire({
      title: "Error to create product!",
      icon: "error",
    });

  };

  const handleImageChange = (index, e) => {
    const urls = [...imageUrls];
    urls[index] = e.target.value;
    setImageUrls(urls);
  };

  const handleAddImageField = () => {
    setImageUrls([...imageUrls, ""]);
  };

  
  const handleMaterialChange = (material) => {

    
    setForm({
        ...form,
        material: material
    })
    setErrors({
      ...errors,
      material: ''
    })   
    
  }

  const handleColorChange = (color) => {

  
    setForm({
        ...form,
        colour: color
    })    
    setErrors({
      ...errors,
      colour: ''
    })      
    
  }

  const setSelectValues = (items) => {

    return items.map(item => ({ label: item, value: item}))
      
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.put(`/product/${id}`, form)
      if(response){
        Swal.fire('Product Update')
      }
     
    } catch (error) {
      console.error("Error creating product:", error);
      
    }
  };

  const handleChange = (event) => {

    const property = event.target.name;
    const value = event.target.value;

    setForm({
        ...form,
        [property]: value
    })   

    validateProductData(property, value, errors, setErrors)

  }

  const fetchData = async () => {

    try {

      const { data } = await axios.get(`product/${id}`);

      console.log(data);

      const productMaterials = setSelectValues(data.material);
      const productColors = setSelectValues(data.colour);

      setForm({
        id: data.id,
        name: data.name,
        price: data.price,
        gender: data.gender,
        images: data.images,
        colour: productColors,
        material: productMaterials,
        category: data.category,
        description: data.description,
        isActive: data.isActive,
      })

    
      const materialData = (await axios.get('/materials')).data;
      setMaterials(materialData);
      const colorData = (await axios.get('/colours')).data;
      setColors(colorData);
      const categoriesData = (await axios.get('/categories')).data;
      setCategories(categoriesData);
      
      
    } catch (error) {
      console.log('Error to get the data product.');
    }
  }

  const optionsColour = colors
    ? colors.map((color) => ({
        value: color,
        label: color,
      }))
    : [];

  const optionsMaterial = materials
    ? materials.map((material) => ({
        value: material,
        label: material,
      }))
    : [];

  useEffect(() => {

    fetchData();

  }, [])

  return (
    <div className="pt-20">
      <section className="max-w-4xl p-6 mx-auto bg-primary/10 rounded-md shadow-md mt-20 font-RedHat">
        <h1 className="text-xl font-bold text-black capitalize dark:text-white">
          Update Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

            {/* Nombre del producto */}
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="name"
              >
                Name of Product
              </label>
              <input
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.name && (
                        <span className="text-red-500">{errors.name}</span>
              )}
            </div>

            {/* Precio del producto */}
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="price"
              >
                Price
              </label>
              <input
                name="price"
                id="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.price && (
                        <span className="text-red-500">{errors.price}</span>
              )}
            </div>

            {/* Género */}
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="productGender"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                defaultValue={form.gender}
                value={form.gender}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="" disabled>
                  Choose gender
                </option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>

            {/* Material */}
            <div>
              <label className="text-black dark:text-gray-200" htmlFor="productMaterial">Material</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              components={animatedComponents}
              options={optionsMaterial}
              value={form.material} // Asignar el valor seleccionado al componente Select de material
              onChange={handleMaterialChange}
              />
              {errors.material && (
                        <span className="text-red-500">{errors.material}</span>
              )}
             
            </div>

            {/* Color */}
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="productMaterial">Colors</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              components={animatedComponents}
              options={optionsColour}
              value={form.colour} // Asignar el valor seleccionado al componente Select de color
              onChange={handleColorChange}
            />
            {errors.colour && (
                      <span className="text-red-500">{errors.colour}</span>
            )}
              
            </div>

            {/* Imágenes */}
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="productImages"
              >
                Images
              </label>
              {imageUrls.map((url, index) => (
                <input
                  key={index}
                  name={`image-${index}`}
                  type="text"
                  value={url}
                  onChange={(e) => handleImageChange(index, e)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              ))}
              <button
                type="button"
                onClick={handleAddImageField}
                className="mt-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
              >
                Add Image
              </button>
            </div>

            {/* Categoría */}
            <div className="flex flex-col gap-4">
              <label className="text-dark dark:text-gray-200" htmlFor="productMaterial">Categories</label>          
              <select name="category" id="category"  className="py-2 bg-white rounded-xl" defaultValue={form.category} onChange={handleChange}>
                {
                  categories?.map((category) => {
                    return <option key={category} value={category}>{category}</option>
                })
                }
              </select>
              
              
            </div>

            {/* Descripción */}
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="productDescription"
              >
                Description
              </label>
              <input
                name="description"
                id="productDescription"
                type="text"
                onChange={handleChange}
                value={form.description}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.description && (
                        <span className="text-red-500">{errors.description}</span>
              )}
            </div>

          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-primary hover:text-white focus:outline-none focus:bg-gray-600"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateProduct;
