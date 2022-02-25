const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//display menu
const mobileMenu = () => {
          menu.classList.toggle('is-active');
          menuLinks.classList.toggle('active');
};
menu.addEventListener('click',mobileMenu);
//home page
let home = document.getElementById("home");
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let building_behind = document.getElementById("building_behind");
let building = document.getElementById("building");
let text = document.getElementById("text");
window.addEventListener('scroll',function(){
          var value = window.scrollY;
          // stars.style.left = value * 0.5 + 'px';
          moon.style.left = value * 0.25 + 'px';
          // building_behind.style.top = -value * 0.30 + 'px';
          // building.style.top = value * 0.30 + 'px';
          text.style.left = value * 2 + 'px';
})
