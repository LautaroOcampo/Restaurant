let header = document.getElementsByClassName("nav")

window.addEventListener("scroll",() => {
    header[0].classList.toggle("scroll-nav",window.scrollY>0);
})

let hamburguesa = document.getElementById("icon-hamburguesa")
let menuHamburguesa = document.getElementById("menu-hamburguesa")
let rotated

hamburguesa.addEventListener("click",() => {
    if(!rotated){
        rotated = true
        hamburguesa.style.transform = ("rotate(-90deg)")
        menuHamburguesa.style.transform = ("translate(600px)")
    }else{
        rotated = false
        hamburguesa.style.transform = ("rotate(0)")
        menuHamburguesa.style.transform = ("translate(0%)")
    }
})


