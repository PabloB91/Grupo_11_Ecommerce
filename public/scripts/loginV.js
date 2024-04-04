window.addEventListener("load", function(){
    const form = document.querySelector(".main-login_form")

    form.addEventListener("submit", function(e){
        /* Array que contendra errores */
        const errores = [];

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
            e.preventDefault();

            const ulErrores = document.querySelector("div.errores ul")

            ulErrores.innerHTML = "";

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li> " + errores[i] + "</li>"
            }
        };


    })
})


