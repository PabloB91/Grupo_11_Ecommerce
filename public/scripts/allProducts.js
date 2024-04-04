

const tituloContainer = document.querySelector('.barra-titulo');
let tituloOrdenador = document.getElementById("titulo-ordenador");
let ordenador = document.querySelector(".dropdown-ordenador");

tituloOrdenador.addEventListener("click", () => {
    tituloOrdenador.style.animation = " 1.2s titleAnimation ease"
    if (ordenador.style.display === "block") {
        ordenador.style.display = "none";
    } else {
        ordenador.style.display = "block";

    }
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

