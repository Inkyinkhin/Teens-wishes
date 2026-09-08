//category image slider (tops, buttoms, sets)

document.querySelectorAll(".category-slider").forEach(slider => {
    const images = slider.querySelectorAll("img");
    let index = 0 ;
    let interval;

    images[0].classList.add("active");

    function showImage(){
        images.forEach(img => img.classList.remove("active"));
        index = (index + 1) % images.length;
        images [index].classList.add("active");
    }

    slider.addEventListener("mouseenter", () =>{
        interval = setInterval (showImage, 1000);
    });

    slider.addEventListener("mouseleave", () => {
        clearInterval(interval);

       
        images.forEach(img => img.classList.remove("active"));
       images[0].classList.add("active");
        index = 0 ;
    } );
});
console.log("Js is connected")

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

// // new arrival section

let currentIndex = 0;

const newArrivalProducts = products.filter(product => product.status === "new-arrival");

const viewItemBtn = document.querySelector(".viewItem-btn");

console.log(newArrivalProducts.length);//check if it is work

const checkArrival = newArrivalProducts.length > 0 ;
if (checkArrival){
    renderNewArrival();
}else{
    console.log("Coming Soon");
}

function renderNewArrival(){

    const product = newArrivalProducts[currentIndex];
    document.querySelector("#productImg").src = product.mainImage;
    document.querySelector("#productImg").alt = product.name;
    document.querySelector("#productName").textContent = product.name;
    document.querySelector("#productDes").textContent = product.description;
    // document.querySelector("#productPrice").textContent = `Price : ${product.price} MMK`;
    document.querySelector("#productCounter").textContent = `${currentIndex+1}/${newArrivalProducts.length}`

    viewItemBtn.href = `product-detail.html?id=${product.id}`;

}

renderNewArrival();

const arrowNext = document.querySelector("#arrowNext");

arrowNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % newArrivalProducts.length;
    renderNewArrival();
 })

 const arrowBack = document.querySelector("#arrowBack");

arrowBack.addEventListener("click", () => {
    currentIndex = (currentIndex - 1) % newArrivalProducts.length;
    renderNewArrival();
 })

