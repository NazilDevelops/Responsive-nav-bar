//Navigation
const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.list');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('open');
    list.classList.toggle('nav-active')
})