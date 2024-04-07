window.addEventListener("load", function(){

    const form = document.querySelector("form")

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

//--Script para modificar elementos dentro de la vista de perfil de usuario--//


function show() {    //--> Función para esconder los datos del usuario y mostrar el formulario de editar usuario 
    /* console.log("show"); */
    document.getElementById("edit-user-form").style.display = "flex";
    document.getElementById("user-description").style.display = "none"; 
    
}

function hide() {       //--> Función para esconder el formulario de editar usuario y mostrar los datos del usuario
    /* console.log("hide"); */
    document.getElementById("edit-user-form").style.display = "none";
    document.getElementById("user-description").style.display = "flex"; 

}
