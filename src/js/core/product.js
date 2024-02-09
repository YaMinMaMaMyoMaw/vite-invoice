import { productGroup, productTemplate } from "./selectors.js";

export const createProduct =({name,price}) => {
    const card = productTemplate.content.cloneNode(true)
    card.querySelector(".product-name").innerText = name;
    card.querySelector(".product-price").innerText = price;
    return card;
}

export const productRender = (products) => {
    products.forEach(({name, id, price}) => {
        productSelect.append(new Option(name,id));
        productGroup.append(createProduct({name,price}))
    }); 
}

