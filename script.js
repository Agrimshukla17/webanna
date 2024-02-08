const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// let elem1=document.querySelector("#elem1")
// let getElem= elem1.getAttribute("class")
// console.log(getElem)
function page4Animation (){
    let elemContainer=document.querySelector("#elem-container")
let fixedImage=document.querySelector("#fixed-image")
elemContainer.addEventListener("mouseenter",()=>{
    fixedImage.style.display="block";

})
elemContainer.addEventListener("mouseleave",()=>{
    fixedImage.style.display="none";

})
let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",()=>{
        let image = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`;
    })
})
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation()
page4Animation()
var menu=document.querySelector("nav h3")
var full=document.querySelector("#full-scr")
var navlogo=document.querySelector("#logo")
let overlay=document.querySelector(".overlay")
console.log(overlay)
var flag = 0
menu.addEventListener("click" , function () {
 if(flag == 0){
      full.style.top = 0
      navlogo.style.opacity =0
      
      flag = 1
    }else{
      full.style.top = "-100%"
      navlogo.style.opacity =1
      
      flag = 0
    }

})
 let loader =document.querySelector("#loader")
setTimeout(function(){
    loader.style.top= "-100%"
},6000)

    
    
