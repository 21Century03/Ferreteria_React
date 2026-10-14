
/*
Definicion de Const y Booleans
 */
const numTelefono = /^[0-9]+$/;
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    export const ValidarNombre = (nonmbre) => {
        if (nonmbre.trim() === ""){
            return {
                valido:false,
                mensaje:"El nombre no puede estar vacío" ,
                className:"CampoError"
            }

        } else {
            return { 
                valido:true,
                mensaje:"" ,
                className:"CampoCorrecto"
            }
        }
    }

    export const ValidarTelefono = (telefono) => {
        if (!numTelefono.test(telefono)) {
            return {
                valido: false,
                mensaje: "El número de teléfono debe contener solo dígitos",
                className: "CampoError"
            };
        } else {
            return {
                valido: true,
                mensaje: "",
                className: "CampoCorrecto"
            };
        }
    }

    export const ValidarCorreo = (correo) => {
        if (!patronCorreo.test(correo)) {
            return {
                valido: false,
                mensaje: "El correo electrónico no es válido",
                className: "CampoError"
            };
        } else {
            return {
                valido: true,
                mensaje: "",
                className: "CampoCorrecto"
            };
        }
    }
            
        



