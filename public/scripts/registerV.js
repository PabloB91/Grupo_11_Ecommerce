window.addEventListener("load", function(){

    let form = document.querySelector(".main-login_form")

    form.addEventListener("submit", function(e){
        /* Array que contendra errores */
        const errores = [];

        /* Validacion de Nombre */
        const name = document.getElementById("user-name");
        if(name.value === ""){
            errores.push("El nombre no puede estar vacío.")
        };

        /* Validacion de Apellido */
        const last_name = document.getElementById("last-name");
        if(last_name.value === ""){
            errores.push("El apellido no puede estar vacío.")
        };

        /* Validacion de Email */
        const email = document.getElementById("e-mail");
        if(email.value === ""){
            errores.push("El email no puede estar vacío.");
        }

        /* Validacion de contraseña */
        const password = document.getElementById("password");

            const hasUppercase = /[A-Z]/;
            const hasSpecialCharacter = /[!@#$%^&/_*]/;
            const hasLowercase = /[a-z]/;

        if(password.value === ""){
            errores.push("La contraseña no puede estar vacía.");
        }else if(password.length < 8){
            errores.push("La contraseña debe tener al menos 8 caracteres");
        }else if(!password.value.includes(hasUppercase)){
            errores.push("La contraseña debe tener un al menos una mayuscula.")
        }else if(!password.value.includes(hasLowercase)){
            errores.push("La contraseña debe tener un al menos una minuscula.")
        }else if(!password.value.includes(hasSpecialCharacter)){
            errores.push("La contraseña debe tener un al menos un caracter especial.")
        };

        /* Validacion Confirmacion de Contraseña */
        const confirmPassword = document.getElementById("confirm-password");
        if(confirmPassword.value !== password){
            errores.push("La contraseña debe ser la misma")
        }

        /* Condicional errores */
        if(errores.length > 0){
            e.preventDefault();

            const ulErrores = document.querySelector("div.errores ul")

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li> " + errores[i] + "</li>"
            }
        }
    })
})


