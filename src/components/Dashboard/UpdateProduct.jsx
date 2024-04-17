import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios";
import Swal from "sweetalert2";

const UpdateProduct = () => {

  const { id } = useParams();
  
  const [ form, setForm ] = useState({
    id: '',
    name: '',
    price: '',
    gender: '',
    images: [],
    colour: [],
    material: [],
    category: [],
    description: [],
    isActive: true,
    
  })

  const [ materials, setMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [ colors, setColors ] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

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


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      price: parseFloat(e.target.price.value),
      gender: e.target.gender.value,
      images: imageUrls.filter((url) => url.trim() !== ""),
      colour: e.target.colour.value.split(",").map((item) => item.trim()),
      material: e.target.material.value.split(",").map((item) => item.trim()),
      category: e.target.category.value,
      description: e.target.description.value
    };

    try {
      await submitForm(formData);
      succesAlert();
      resetForm();
      e.target.name.value = "";
      e.target.price.value = "";
      e.target.gender.value = "";
      e.target.material.value = "";
      e.target.colour.value = "";
      e.target.category.value = "";
      e.target.description.value = "";
      setImageUrls([""]);
    } catch (error) {
      console.error("Error creating product:", error);
      errorAlert();
    }
  };

  const handleChange = () => {

  }

  const fetchData = async () => {

    try {

      const { data } = await axios.get(`product/${id}`);

      setForm({
        id: data.id,
        name: data.name,
        price: data.price,
        gender: data.gender,
        images: data.images,
        colour: data.colour,
        material: data.material,
        category: data.category,
        description: data.description,
        isActive: data.isActive,
      })

      setSelectedMaterials(data.material);
      setSelectedColors(data.colour);

      const materialData = (await axios.get('/materials')).data;
      setMaterials(materialData);
      const colorData = (await axios.get('/colours')).data;
      setColors(colorData);
      
      
    } catch (error) {
      console.log('Error to get the data product.');
    }
  }

  useEffect(() => {

    fetchData();

  }, [])



  return (
    <div className="pt-20">
      <section className="max-w-4xl p-6 mx-auto bg-primary/40 rounded-md shadow-md mt-20 font-RedHat">
        <h1 className="text-xl font-bold text-black capitalize dark:text-white">
          Update Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

            {/* Nombre del producto */}
            <div>
              <label
                className="text-white dark:text-gray-200"
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
            </div>

            {/* Precio del producto */}
            <div>
              <label
                className="text-white dark:text-gray-200"
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
            </div>

            {/* Género */}
            <div>
              <label
                className="text-white dark:text-gray-200"
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
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productMaterial"
              >
                Material
              </label>
              <input
                name="material"
                id="material"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Color */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="color"
              >
                Color
              </label>
              <input
                name="color"
                id="color"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Imágenes */}
            <div>
              <label
                className="text-white dark:text-gray-200"
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
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productCategory"
              >
                Category
              </label>
              <input
                name="category"
                id="productCategory"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Descripción */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productDescription"
              >
                Description
              </label>
              <input
                name="description"
                id="productDescription"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
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
