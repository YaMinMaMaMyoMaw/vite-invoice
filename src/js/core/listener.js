import { createFormHandler, manageInventoryHandler, newProductCreateFormHandler, rowGroupHandler } from "./handlers.js"
import { createForm, manageInventoryBtn, rowGroup } from "./selectors.js"

const listener = () => {
    createForm.addEventListener("submit", createFormHandler);
    rowGroup.addEventListener("click", rowGroupHandler);
    manageInventoryBtn.addEventListener("click", manageInventoryHandler);
    inventorySheetCloseBtn.addEventListener("click", manageInventoryHandler)
    newProductCreateForm.addEventListener("submit",newProductCreateFormHandler)
};

export default listener;