const body = document.querySelector("body");
const navbarBtn = document.querySelector("#navbar");
const menuNavbar = document.querySelector("#menu_header");
const shoppingCartBtn = document.querySelector("#shopping-cart-icon");
const shoppingCart = document.querySelector("#shopping-cart");
const makeBtn = document.querySelectorAll(".make_btn");
const boxInfoMake = document.querySelectorAll(".box_info_make");

body.addEventListener("click", function () {
  menuNavbar.style.transition = "all 0.5s";
  menuNavbar.classList.add("close");
});
navbarBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  menuNavbar.classList.toggle("close");
});
shoppingCartBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  shoppingCart.style.transition = "all 0.5s";
  shoppingCart.classList.toggle("hide");
});
document.addEventListener("DOMContentLoaded", function () {
    shoppingCart.classList.toggle("hide");
    menuNavbar.classList.toggle("close");
    boxInfoMake.forEach(function(box){
        box.classList.add('hide_box_info');
    })

    
  });
makeBtn.forEach(function (btn) {
    btn.addEventListener("click",function(e) {
        
            e.stopPropagation();
            
                this.parentElement.nextSibling.nextSibling.style.transition="all 0.5s";
                this.parentElement.nextSibling.nextSibling.classList.toggle("hide_box_info");

    })
})


