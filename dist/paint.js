const cardUsuario = document.querySelector("#cardsUsuarios");
const form = document.getElementById("fmContact");

const addUser=(name,lastName, mail, tele) =>{
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        ptele:tele,
    };
    let text = `¿Estas seguro/a de que tus datos son correctos?`;

    modalAlert(text, "aceptar", person);
}

function modalAlert(cad, tipo, persona){
    //El div es para crear el alert
    const alerta= document.createElement('div');
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id", "alerta" );
    alerta.setAttribute("class", "alerta" );
    texto.setAttribute("class", "textAlerta");
    //Strong me muestra los datos en la alerta
    texto.innerHTML= `<strong>${cad}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){       
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(persona, "");
            document.getElementById("alerta").remove();          
        }
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick=function(){

        document.getElementById("alerta").remove();
    }

}
const paintCard = (datos, tipo) =>{

    const fragmento = document.createDocumentFragment();
    const tempUsuario = document.getElementById("templateUsuario").content;
  
    
    if(tipo === "USUARIO"){
        let tempTemplate = tempUsuario.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = 'Datos del Usuario <hr>';
        tempTemplate.querySelector('.data-card').innerHTML = `Nombres y Apellidos: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `Correo Electrónico: ${datos.pmail}`;
        tempTemplate.querySelector('.text-telefono').innerHTML = `Teléfono: ${datos.ptele}`;
        
        
        fragmento.appendChild(tempTemplate);
        cardUsuario.appendChild(fragmento);

    }
    form.reset();
}

export {addUser, modalAlert};
   

