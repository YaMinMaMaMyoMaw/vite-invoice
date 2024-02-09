import { recordTotal, rowTemplate } from "./selectors.js";

export const createRecord = ({ name, price }, quantity) => {
  const rowCost = price * quantity;
  const record = rowTemplate.content.cloneNode(true);
  console.log(record);

  //   record.querySelector(".row-no").innerText = recordIndex++;
  // record.querySelector(".row").innerText = rowCost;
  record.querySelector(".row-product-name").innerText = name;
  record.querySelector(".row-product-price").innerText = price;
  record.querySelector(".row-quantity").innerText = quantity;
  record.querySelector(".row-cost").innerText = rowCost;

  return record;
};

export const updateRecordTotal = () => {
  const allRowCost = document.querySelectorAll(".row-cost");
  // let total = 0;
  // allRowCost.forEach((el) => (total += parseFloat(el.innerText)));
  // recordTotal.innerText = total;

  recordTotal.innerText = [...allRowCost].reduce(
    (pv, { innerText }) => pv + parseFloat(innerText),
    0
  );
};

export const deleteRecord = (event) => {
  
  const row = event.target.closest(".row")
  if (confirm("Are you sure?")) {
    row.remove();
    updateRecordTotal();
  }
};

export const addRecordQuantity = (event) => { 
  const row= event.target.closest(".row")
  const currentQuantity = row.querySelector(".row-quantity")
  const currentPrice = row.querySelector(".row-product-price")
  const currentCost = row.querySelector(".row-cost")

  currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;

  currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;

  updateRecordTotal();
}

export const subRecordQuantity = (event) => { 
  const row= event.target.closest(".row")
  const currentQuantity = row.querySelector(".row-quantity")
  const currentPrice = row.querySelector(".row-product-price")
  const currentCost = row.querySelector(".row-cost")

  if (currentQuantity.innerText > 1){
  currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
  currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
  
  }else{
    deleteRecord(event);
  }


  updateRecordTotal();
}