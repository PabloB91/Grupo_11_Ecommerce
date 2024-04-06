window.addEventListener("load", function(){

    let form = document.querySelector(".main-login_form");
    let errores = [];
    let ulErrores = document.querySelector("div.errores ul"); // Movemos la definición fuera del event listener

    form.addEventListener("submit", function(e){
        e.preventDefault(); // Prevenimos el envío del formulario por defecto
        
        /* Array que contendra errores */
        errores = [];

        
        /* Validaciones */
        const name = document.getElementById("user-name");
        if(name.value === ""){
            errores.push("El nombre no puede estar vacío.");
        }
        
        const last_name = document.getElementById("last-name");
        if(last_name.value === ""){
            errores.push("El apellido no puede estar vacío.");
        }
        
        
        const email = document.getElementById("e-mail");
        const validEmails = /@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com|email\.com)$/;
        
        if(email.value === ""){
            errores.push("El email no puede estar vacío.");
        } else if (!validEmails.test(email.value)){
            errores.push("El email debe pertenecer a @gmail, @hotmail, @outlook, @icloud o @yahoo");
        }

        const password = document.getElementById("password");
        const hasUppercase = /[A-Z]/;
        const hasSpecialCharacter = /[!@#$%^&/_]/;
        const hasLowercase = /[a-z]/;

        if(password.value === ""){
            errores.push("La contraseña no puede estar vacía.");
        }else if(password.value.length < 8){
            errores.push("La contraseña debe tener al menos 8 caracteres.");
        }else if(!hasUppercase.test(password.value)){
            errores.push("La contraseña debe tener al menos una mayúscula.");
        }else if(!hasLowercase.test(password.value)){
            errores.push("La contraseña debe tener al menos una minúscula.");
        }else if(!hasSpecialCharacter.test(password.value)){
            errores.push("La contraseña debe tener al menos un caracter especial.");
        }

        const confirmPassword = document.getElementById("confirm-password");
        if(confirmPassword.value !== password.value){ // Aquí deberías comparar con password.value
            errores.push("La contraseña debe ser la misma.");
        }

        /* Condicional errores */
        console.log(errores)
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