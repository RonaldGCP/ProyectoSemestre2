import {validateString, validateTelefono, Validate} from "./validate.js";
import {addUser,modalAlert} from "./paint.js";

const btnEnviar = document.getElementById('btnEnviar');
const form = document.getElementById('fmContact');
//Instanciar el objeto Validate

let validator = new Validate();

//objeto de validación
const objectValid={
    nameObject: false,
    lastNameObject: false,
    mailObject: false,
    teleObject: false 
}

form.addEventListener('change', function (event){

    const inputId = event.target.id;
    console.log(inputId);
    const inputValue = event.target.value;
    console.log(inputValue);
    const inputClass = event.target.classList;
    console.log(inputClass);

    const validClass = ()=>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }

    const invalidClass = ()=>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    switch(inputId){
        case "name": 
            objectValid.nameObject = validator.validNames(inputValue);
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "lastName":    
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case "mail":    
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case "telephone":    
            objectValid.teleObject = validator.validTel(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;

    }
});

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("lastName").value;
    const correo = document.getElementById("mail").value;
    const telefono = document.getElementById("telephone").value;
    
    

    if(validator.validform(objectValid) === -1){
            addUser(nombre, apellido, correo, telefono); 
                console.log("Enviando Formulario:");           
    }else{
        modalAlert("Por favor, Complete la información");  
        }  
});