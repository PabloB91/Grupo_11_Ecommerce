
let closeDropdown = document.getElementById('closeDropdown');

const tituloContainer = document.querySelector('.barra-titulo');
let tituloOrdenador = document.getElementById("titulo-ordenador");
let ordenador = document.querySelector(".dropdown-ordenador");
let tituloFiltrar = document.querySelector(".titulo-filtrar");


tituloOrdenador.addEventListener("click", () => {
    tituloOrdenador.style.animation = " 1.3s titleAnimation ease-in";
    ordenador.style.display = "flex";
    closeDropdown.style.display = "flex";
    tituloFiltrar.style.display = "none"
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        tituloContainer.style.top = "0";
        ordenador.style.height = "90vh";


    } else {
        tituloContainer.style.top = "30vh";
        ordenador.style.height = "60vh";

    }
});

closeDropdown.addEventListener("click", () => {

    closeDropdown.style.display = "none";
    ordenador.style.display = "none";


});
