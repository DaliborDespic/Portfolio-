/*===== MENU SHOW =====*/ 
const hamburgerIcon = document.querySelector('.hamburger__icon');
const navMenu = document.querySelector('.nav__menu');
const iconX = document.querySelector('.nav__icon-x');

hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

iconX.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link')


navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show')
}))