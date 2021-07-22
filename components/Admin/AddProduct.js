import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductServices from "../../Services/ProductServices";
const AddProduct = ({ setOpen, cancelButtonRef, closeAddDialogBox }) => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (event) => {
    setProductDetails({
      ...productDetails,
      [event.target.name]: event.target.value,
    });
  };
  console.log(productDetails);
  return (
    <>
      <ProductForm
        handleChange={handleChange}
        productDetails={productDetails}
      />
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mt-5">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2  text-base font-medium  bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {
            ProductServices.addProduct(productDetails);
            setOpen(false);
            closeAddDialogBox && closeAddDialogBox();
          }}
        >
          Add Product
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {
            setOpen(false);
            closeAddDialogBox && closeAddDialogBox();
            // props.closeEditDialogBox && props.closeEditDialogBox();
          }}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddProduct;
