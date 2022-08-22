
const elModalOpenButton = document.querySelector(".btn-menu");
const elModalOpenlink = document.querySelector(".mabile-header");

elModalOpenButton.addEventListener("click", function(){
    elModalOpenlink.classList.toggle("nav--active")
})