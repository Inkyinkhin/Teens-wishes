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

const productImg = document.querySelector("#productImg");
const productName = document.querySelector("#productName");
const productDes = document.querySelector("#productDes");
const productPrice = document.querySelector("#productPrice");


productImg.src = product.mainImage;
productImg.alt = product.name;
productName.textContent = product.name;
productDes.textContent = product.description;
productPrice.textContent = product.price + ` MMK`;



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
        

        const selectedVariant = product.variants.find( variant => {
        return variant.color === selectedColor;
        });

        productImg.src = selectedVariant.image;
    });
    
});



const sizeOptions = document.querySelector("#sizeOptions");


    
