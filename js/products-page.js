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



//  renderProducts array according to category default all products

function renderProducts(category){
    let filterProducts = category === "all" ? products: products.filter(product => product.category === category);
   
    if(!productCount){
        console.log("product count element cannot found")
    }
    console.log(filterProducts.length);
    
    productCount.textContent = filterProducts.length;
    
    productsGrid.innerHTML = filterProducts.map(product => {
        return `
        <a href="product-detail.html?id=${product.id}" class="product-card">
        <div class="product-card-image">
            <img src="${product.mainImage}" alt="${product.name}">
          </div>

          <div class="product-card-info">
            <h2>${product.name}</h2>
            <strong>${product.price} MMK</strong>
          </div>
        </a>
      `;
    })
    .join("");

};

const productsGrid = document.querySelector("#productsGrid");
const productCount = document.querySelector("#productCount");
const categoryTabs = document.querySelectorAll(".category-btn");

// check and add the css style property to know with category tab is clicked

categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    categoryTabs.forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");

    renderProducts(category);
  });

});

renderProducts("all");

