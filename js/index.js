// Reveal Elements
const agave = document.querySelector(".agave");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const info = document.querySelector(".info");

window.addEventListener( "load", () => {
    agave.style.transform = "translateY(0)";
    logo.style.transform = "translateX(0)";
    nav.style.transform = "translateX(0)";

    setTimeout( () => {
        info.style.transform = "translateY(0)";
        info.style.opacity = "1";
    }, 500)
});

// Scrolling Elements
window.onscroll = function(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        info.style.opacity = "0";
        info.style.transition = "0.6s"
    }else{
        info.style.opacity = "1";
        info.style.transition = "0.6s"
    }
}