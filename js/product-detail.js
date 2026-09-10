//For nav to be seen or not and its style

const header = document.querySelector("header");
let lastScroll = 0;

// get the current scroll
window.addEventListener ("scroll", () => {

   const currentScroll = window.scrollY;
  
   
//when you scroll the nav remove only if you get the top of the page reappear
   if (currentScroll > lastScroll){
         header.style.transform = "translateY(-100%)";
    }
    else{
         header.style.transform = "translateY(0)";
    }
   
   
    lastScroll = currentScroll;

})

//find the product with query string

const params = new URLSearchParams(window.location.search);
const productID = params.get("id");
const product = products.find(product => {
    return product.id === productID
});

console.log(productID);
console.log(product);

const breadcrumbProduct = document.querySelector("#breadcrumbProduct");
const productImg = document.querySelector("#productImg");
const productName = document.querySelector("#productName");
const productDes = document.querySelector("#productDes");
const productPrice = document.querySelector("#productPrice");

breadcrumbProduct.textContent = product.name;
productImg.src = product.mainImage;
productImg.alt = product.name;
productName.textContent = product.name;
productDes.textContent = product.description;
productPrice.textContent = product.price + ` MMK`;


let selectedVariant = null;
let selectedSize = null;

const colorOptions = document.querySelector("#colorOptions");

const colorButtons = product.variants.map(variant => {
    return `<button class="color-btn" data-color="${variant.color}" style="background-color: ${variant.colorValue};">
            </button>`
}).join(" ");

colorOptions.innerHTML = colorButtons;

const colorBtns = document.querySelectorAll(".color-btn"); //color notelists

console.log(colorBtns);

colorBtns.forEach(colorBtn => { 
    colorBtn.addEventListener("click", () => {
        const selectedColor = colorBtn.dataset.color;
        console.log(selectedColor);
    
        selectedVariant = product.variants.find( variant => {
        return variant.color === selectedColor;
        });
    
        selectedSize = null;
        stockMessage.textContent = "";
      
        productImg.src = selectedVariant.image;

        sizeRender();
    });
    
});

const sizeOptions = document.querySelector("#sizeOptions");
const stockMessage = document.querySelector("#stockMessage");

function sizeRender(){

    if(!selectedVariant) {
        sizeOptions.innerHTML = `<p class="size-message">Choose a color to see available sizes</p>`;
    }else{
        const sizeButtons = selectedVariant.sizes.map(size => {
            if(size.stock === 0){
                return `<button class = "size-btn" data-size="${size.size}" disabled>${size.size}</button>`
            }else
                return `<button class = "size-btn" data-size="${size.size}">${size.size}</button>`
        }).join(" ");
        
        sizeOptions.innerHTML = sizeButtons;

        const sizeBtns = sizeOptions.querySelectorAll(".size-btn");

        console.log(sizeBtns);

        sizeBtns.forEach(sizeBtn => { 
            sizeBtn.addEventListener("click", ()=> { 
                const clickedSize = sizeBtn.dataset.size;  //this is the size when the customer click the size btn and change from DOM to js
                console.log(clickedSize);

            selectedSize = selectedVariant.sizes.find(size => {
                return size.size === clickedSize;
            })
        
             console.log(selectedSize);
        
            stockMessage.textContent = `Available Stock: ${selectedSize.stock}`;
            console.log(stockMessage);
        })
})


    }
}

    sizeRender();



productFabric.textContent = product.fabric;
productCare.textContent = product.care;
productCategory.textContent =`Category:` + product.category;

    
