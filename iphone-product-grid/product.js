import { products } from "./iphone-product.js";
import { sliderProducts } from "./iphone-product.js";

//load product grid for iphone page hero products
let productContainer=document.querySelector(".js-iphone-grid-container");
products.forEach(productGrid => {
  productContainer.innerHTML+=
   `<div class="iphone-item">
        <img src="${productGrid.image}" alt="${productGrid.name}">
        <h3>${productGrid.name}</h3>
       ${productGrid.tag ? `<span>${productGrid.tag}</span>`:""}
      </div>`
}); 
   
//load slider grid products for iphone page document
let SliderProducts=document.querySelector(".js-slider-products");
sliderProducts.forEach(sliderProduct =>{
 SliderProducts.innerHTML+=
  `  <div class="product-card">
      <img src="${sliderProduct.image}" alt="${sliderProduct.name}">
     
      <p class="new">${sliderProduct.tag}</p>
      <h2>${sliderProduct.name}</h2>
      <p class="desc">${sliderProduct.desc}</p>
      <p class="price">${sliderProduct.price}</p>
      <div class="btn-group">
        <button class="learn-btn">Learn more</button>
        <a href="#" class="buy-btn">Buy &gt;</a>
      </div>
    </div>`;
}); 
 


//button learn more and buy now actions
const btnLearnMore=document.querySelectorAll(".learn-more");
btnLearnMore.forEach(btnLearn => {
  btnLearn.addEventListener('click', ()=>{
window.location.href="store.html";
});
});

const btnBuyMore=document.querySelectorAll(".buy-mobile");
btnBuyMore.forEach(btnBuy =>{
btnBuy.addEventListener('click', ()=>{
window.location.href="store.html";
});
});
