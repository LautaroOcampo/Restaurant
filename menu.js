let header = document.getElementsByClassName("nav")

window.addEventListener("scroll",() => {
    header[0].classList.toggle("scroll-nav",window.scrollY>0);

})

let arrowLeft = document.getElementsByClassName("arrow-left")
let arrowRight = document.getElementsByClassName("arrow-right")
let position = 0
let img = document.getElementsByClassName("img")
let comida = document.getElementById("comida")
let circle = document.getElementsByClassName("circle")


arrowRight[0].addEventListener("click", () => {
    if(position >= -100){
        position-=100
        img[0].style.transform = `translateX(${position}%)`
        img[1].style.transform = `translateX(${position}%)`
        img[2].style.transform = `translateX(${position}%)`
        if(position === 0){
            comida.innerHTML = "STRAWBERRIES PANCAKES"
            for(ele of circle){
                ele.style.backgroundColor = "rgb(0,0,0,.6)"
            }
            circle[0].style.backgroundColor = "black"
        }
        else if(position === -100){
            comida.innerHTML = "MARGHERITA PIZZA"
            for(ele of circle){
                ele.style.backgroundColor = "rgb(0,0,0,.6)"
            }
            circle[1].style.backgroundColor = "black"
            img[1].classList.toggle("fixed")
        }
        else if(position === -200){
            comida.innerHTML = "PASTA"
            for(ele of circle){
                ele.style.backgroundColor = "rgb(0,0,0,.6)"
            }
            circle[2].style.backgroundColor = "black"
        }
    }
})

arrowLeft[0].addEventListener("click", () => {
    if(position < 0){
        position+=100
        img[0].style.transform = `translateX(${position}%)`
        img[1].style.transform = `translateX(${position}%)`
        img[2].style.transform = `translateX(${position}%)`
        if(position === 0){
            comida.innerHTML = "STRAWBERRIES PANCAKES"
            for(ele of circle){
                ele.style.backgroundColor = "rgb(0,0,0,.6)"
            }
            circle[0].style.backgroundColor = "black"
        }
        else if(position === -100){
            comida.innerHTML = "MARGHERITA PIZZA"
            for(ele of circle){
                ele.style.backgroundColor = "rgb(0,0,0,.6)"
            }
            circle[1].style.backgroundColor = "black"
        }
        else if(position === -200){
            comida.innerHTML = "PASTA"
            for(ele of circle){
                ele.style.backgroundColor = "rgb(0,0,0,.6)"
            }
            circle[2].style.backgroundColor = "black"
        }
    }
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