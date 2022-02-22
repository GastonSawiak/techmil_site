const menuBtn = document.querySelector('.menu-btn i');
const navbar  = document.querySelector('.navbar');

const handleClick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

menuBtn.addEventListener('click', handleClick);

//boton reactive, solo hace que se corra con translate, luego modificar//