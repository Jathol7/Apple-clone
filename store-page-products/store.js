import { productStoreItems } from "./store-products.js";
import { latestProducts } from "./store-products.js";
import { helpCards } from "./store-products.js";
import { appleCards } from "./store-products.js";
//import products slider hero from products store js
let storeProductsHero=document.querySelector(".slider-container")
productStoreItems.forEach(storeProduct =>{
 storeProductsHero.innerHTML+=
  `<div class="product-item">
      <img src="${storeProduct.image}" alt="${storeProduct.name}">
      <p>${storeProduct.name}</p>
    </div>`; 
});

//latest product loop for each products in store page

const LatestProductsStore=document.querySelector(".latest-slider");
latestProducts.forEach(product =>{
LatestProductsStore.innerHTML+=
  `<div class="latest-card ${product.color}">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <span>${product.price}</span>
        <img src="${product.image}" alt="${product.name}">
      </div>`;
});

//help container products in store page javascript to fetch  
let HelpProducts=document.querySelector(".help-slider");
helpCards.forEach(productHelpCard =>{
     HelpProducts.innerHTML+=` <div class="help-card" style="background-image: url('${productHelpCard.image}');">
        ${productHelpCard.tag ?`<p class="card-tag">${productHelpCard.tag}</p>`:""}
        <h3>${productHelpCard.title}</h3>
        <p>${productHelpCard.desc}</p>
      </div>`;
});

//store page card container apple card fetch using dom on the page.

let cardConatinerProducts =document.querySelector(".card-container");
appleCards.forEach(card=>{
cardConatinerProducts.innerHTML+=
         `
          <div class="apple-card">
      ${card.icon ?`<i class="${card.icon}"></i>`:
        `<img src="${card.image}">`}
      <p>${card.text}</p>
    </div>
         `;
});

//latest card eventlistener
const productitems=document.querySelectorAll(".latest-card");
productitems.forEach(items=>{
items.addEventListener('click', ()=>{
window.location.href="product.html";
});
});
