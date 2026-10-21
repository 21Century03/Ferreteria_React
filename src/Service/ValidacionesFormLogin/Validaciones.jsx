
/*
Definicion de Const y Booleans
 */
const numTelefono = /^[0-9]+$/;
const patronCorreo = /^[^\s@]+@(gmail\.com|gmail\.cl|maestros\.cl)$/i;
    
    
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
        if (!patronCorreo.test(correo.trim())) {
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
            
     export const ValidarContrasenia = (contrasenia) => {
        if (contrasenia.trim() === "") {
            return {
                valido: false,
                mensaje: "La contraseña no puede estar vacía",
                className: "CampoError"
            };
        } else if (contrasenia.length < 6) {
            return {
                valido: false,
                mensaje: "La contraseña debe tener al menos 6 caracteres",
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



