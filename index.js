const header=document.querySelector("header");

window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY>0);
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick =()=>{
    // menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
Window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr=ScrollReveal({
    distance:'25px',
    duration:2500,
    reset:true
})
sr.reveal('.home-text',{delay:190,origin:'botom'})

sr.reveal('.about,.services,.portfolio,.contect',{delay:200,origin:'botom'})














