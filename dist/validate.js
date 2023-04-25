const validateString = (cad)=>{
    let response = (cad.length >= 3) ? true : false; 
    return response;
};

const validateTelefono = (cad) =>{
    let response = (cad.length >= 10)? true : false; 
    return response;
}

class Validate{
    validNames(values){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25}){1,20}$/g;
        const resp = values.match(nombresRX)?true : false;
        return resp;
    }

    validMail(values){
        const mailRX = /^([a-z0-9_\.\+-]+)@([\da-z\.]+)\.([a-z\.]{0,6})$/gm;
         const resp = values.match(mailRX)?true : false;
         return resp;
    }

    validTel(values){
        const TelRX = /^([3]\d{9})$/gm;        
        const resp = values.match(TelRX)?true : false;
        return resp;
    }
    validform = (objeto) => {
        const valores = Object.values(objeto); 
        let resp = valores.findIndex(e => e === false);
        return resp;
    }
}
export {validateString, validateTelefono, Validate}; 