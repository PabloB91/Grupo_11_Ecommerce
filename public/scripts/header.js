/* const logoSBX = document.querySelector('#img-logoSBX');
function fixed () {
let headerBottomAnimation  = document.querySelector('.headerBottom');
headerBottomAnimation.classList.toggle('fixed', window.scrollY), 500;
};
window.addEventListener('scroll', fixed); */
/*  for(let i = 0; i < animationShowBoxSb.length; i++ ){

 }*/

//  _________________________________________________________________________________________________________

                                                // menu hamburguesa
//  _________________________________________________________________________________________________________

const menuContainer = document.querySelector('#menu-burguer');
const menuBurguerDesplegable = document.querySelector('#menuBurguerDesplegable');

menuContainer.addEventListener('click', (e) => {
    e.preventDefault();
    /* console.log("hola") */
    // alternamos estilos para el menu 
    menuBurguerDesplegable.style.display= "flex";
    
})

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    // alternamos estilos para el menu 
    menuBurguerDesplegable.style.display= "none";
    
})





