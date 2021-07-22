import React from "react";

const ProductForm = ({ handleChange, productDetails }) => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            Product Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="grid-name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={productDetails.name}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-Price"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="grid-Price"
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={productDetails.price}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-category"
          >
            category
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="grid-category"
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleChange}
            value={productDetails.category}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6 ">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-Description"
          >
            Discription
          </label>

          <textarea
            className="resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-20 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Description"
            id="grid-Description"
            name="description"
            onChange={handleChange}
            value={productDetails.description}
          ></textarea>
        </div>
      </div>

      <label className="w-60 flex flex-col items-center  bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer  hover:bg-gray-200 ">
        <svg
          className="w-5 h-5 m-1"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className=" text-xs leading-normal">Choose image</span>
        <input
          type="file"
          className="hidden"
          name="image"
          onChange={handleChange}
          //   value={productDetails.image}
        />
      </label>
    </form>
  );
};

export default ProductForm;
