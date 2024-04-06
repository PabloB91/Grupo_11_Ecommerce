window.addEventListener("load", function(){

    let form = document.querySelector(".main-login_form");
    let errores = [];
    let ulErrores = document.querySelector("div.errores ul"); // Movemos la definición fuera del event listener

    form.addEventListener("submit", function(e){
        e.preventDefault(); // Prevenimos el envío del formulario por defecto

        /* Array que contendra errores */
        errores = [];

        /* Validacion de Email */
        const email = document.getElementById("email");

        if(email.value === ""){
            errores.push("El email no puede estar vacío.");
        }

        /* Validacion de contraseña */
        const password = document.getElementById("password");

        if(password.value === ""){
            errores.push("La contraseña no puede estar vacía.");
        }else if(password.value.length < 8){
            errores.push("La contraseña debe tener al menos 8 caracteres");
        };

        /* Condicional errores */
        if(errores.length > 0){
            ulErrores.innerHTML = ""; // Limpiamos los errores anteriores

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"; // Agregamos los nuevos errores
            }
        }else{
            form.submit();
        }


    })
})

