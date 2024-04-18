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
    description: '',
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

  const widgetCloudinary = cloudinary.createUploadWidget(
    {
      cloudName: "dm7llqul3",
      uploadPreset: "yw28ignp",
      folder: "uploads",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log(result.info);
        setForm({
          ...form,
          images: [...form.images, result.info.secure_url]
        });
      }
    }
  );

  const uploadPicture = async () => {
    await widgetCloudinary.open();
  };

  const handleMaterialChange = (material) => {
   
    setForm({
        ...form,
        material: material
    })

    validateProductData('material', material, errors, setErrors);
   
  }

  const handleColorChange = (color) => {
 
    setForm({
        ...form,
        colour: color
    }) 

    validateProductData('colour', color, errors, setErrors);  
    
  }

  const setSelectValues = (items) => {

    return items.map(item => ({ label: item, value: item}))
      
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    const materialData = form.material.map( material => material.value);
    const colorData = form.colour.map( color => color.value);

    try {

      const response = await axios.put(`/product/${id}`, {
        id: form.id,
        name: form.name,
        price: form.price,
        gender: form.gender,
        images: form.images,
        colour: colorData,
        material: materialData,
        category: form.category,
        description: form.description,
        isActive: form.isActive,
      })
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
            <div className="w-full flex flex-col justify-center">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="productImages"
              >
                Images
              </label>
              <picture className="w-full flex justify-center items-center">
                
                <img className="mt-2 w-56 h-56 border-solid border-black" src={form?.images[0]} id="pictureClou" />

              </picture>
              
              <div className="w-full flex justify-around gap-4">
                
                <button className="w-1/2 px-6 py-2 mt-2 leading-5 text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-primary hover:text-white focus:outline-none focus:bg-gray-600" onClick={uploadPicture}>Upload Image</button>

              </div>
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
