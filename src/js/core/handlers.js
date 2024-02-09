import { addRecordQuantity, createRecord, deleteRecord, subRecordQuantity, updateRecordTotal } from "./record.js";
import { createForm, inventorySheet, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
  e.preventDefault();

  // data
  const formData = new FormData(createForm);
  const currentProductId = parseInt(formData.get("productSelect"));
  const currentProduct = products.find((el) => el.id === currentProductId);
  const currentQuantity = parseInt(formData.get("inputQuantity"));

  // append row to table
  rowGroup.append(createRecord(currentProduct, currentQuantity));
  createForm.reset();

  // calculate total
  updateRecordTotal();
};

export const rowGroupHandler = (event) => {

  if(event.target.classList.contains("row-del-btn")){
    deleteRecord(event);
  }else if(event.target.classList.contains("row-q-add")){
    addRecordQuantity(event);
  }else if(event.target.classList.contains("row-q-sub")){
    subRecordQuantity(event);
  }
}

export const manageInventoryHandler = () => {
  inventorySheet.classList.toggle("-translate-x-full");
}

// export const addNewHandler = (event) => {

//   event.preventDefault();
//   const formData = document.querySelector(".")
// }

export const newProductCreateFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(newProductCreateForm);
  const newProduct = {
    id: Date.now(),
    name: formData.get("new_product_name"),
    price: formData.get("new_product_price"),
  };

  // productGroup.append(createProduct(newProduct));
  // productSelect.append(new Option(newProduct.name,newProduct.id));
  products.push(newProduct);
  productRender(products);

  console.log("U submit");
};