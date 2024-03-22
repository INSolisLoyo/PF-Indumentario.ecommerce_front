import React, { useState } from "react";

const Create = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <div className="pt-[5px]">
      <section className="max-w-4xl p-6 mx-auto bg-primary/85 rounded-md shadow-md mt-20 font-RedHat">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Submit Product</h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="productName">Name of Product</label>
              <input id="productName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="productPrice">Price</label>
              <input id="productPrice" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="productCategory">Category</label>
              <input id="productCategory" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="productMaterial">Material</label>
              <input id="productMaterial" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="productColor">Color</label>
              <input id="productColor" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                {image ? (
                  <img src={image} alt="Product" className="h-32 w-auto" />
                ) : (
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span className="">Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} />
                      </label>
                      <p className="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p className="text-xs text-white">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-primary hover:text-white focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
