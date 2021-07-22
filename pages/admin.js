import { useState } from "react";
import DialogBox from "../components/Admin/DialogBox";
import ProductListTable from "../components/Admin/ProductListTable";

export default function AdminTable() {
  const [editProductDialog, setEditProductDialog] = useState(false);
  const [addProductDialog, setaddProductDialog] = useState(false);
  const EditDialogBox = (event) => {
    event.preventDefault();
    setEditProductDialog(true);
  };
  const openAddDialogBox = (event) => {
    event.preventDefault();
    setaddProductDialog(true);
  };
  const closeAddDialogBox = () => {
    setaddProductDialog(false);
  };
  const closeEditDialogBox = () => {
    setEditProductDialog(false);
  };
  return (
    <>
      <div className="flex flex-col mx-20">
        {editProductDialog && (
          <DialogBox
            editProductDialog={editProductDialog}
            closeEditDialogBox={closeEditDialogBox}
            title={"Edit Product Details"}
          />
        )}
        {addProductDialog && (
          <DialogBox
            addProductDialog={addProductDialog}
            closeAddDialogBox={closeAddDialogBox}
            title={"Add Product Details"}
          />
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-auto"
          onClick={openAddDialogBox}
        >
          Add Product
        </button>
        <br />
        <ProductListTable EditDialogBox={EditDialogBox} />
      </div>
    </>
  );
}
