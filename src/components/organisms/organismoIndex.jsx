
import { useState } from "react"
import InputMonIndex from "../molecules/InputMoIndex"
import Button from "../atoms/Button"

    /*
Definicion de Const y Booleans
 */

const FormularioIndex = () => {

    const [nombre, setNombre] = useState(""); /* Se le asigna un estado al nombre*/
    const [correo, setCorreo] = useState(""); /* Se le asigna un estado al correo lol*/
    const [EsCorrecto, setEsCorrecto] = useState(false); /* Se le asigna un cambiador Estado al Button*/
    const numTelefono = /^[0-9]+$/;
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patronEmpresaLogin = /^ [^\s@] + @ferreteriaMaestros$/
    
    const validarFormulario = () => {
        
        const campoNombre = nombre.trim();
            if (campoNombre === ""){
                setEsCorrecto(false)
                alert("El nombre no puede estar vacío");
            } else {
                setEsCorrecto(true)
            }
        
        const campoCorreo = correo.trim();
            if (campoCorreo ===""){
                setEsCorrecto(false)
                alert("El Correo no puede estar vacío");
            } else{
                setEsCorrecto(true)
            }
            

        
    }


    
/* Props*/

    return (
        <div>
           <InputMonIndex
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                /* evento {e} junto al Target  que apunta al input,
                 se utiliza para obtener el valor de el input y detectar si cambia onChange */
                placeholder="Escribe tu Nombre"
            />

            <InputMonIndex
                 value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Escribe tu Correo"
            />

            <Button
                onClick={validarFormulario}
                EsCorrecto ={EsCorrecto} /* Se aclara k el Prop es un codigo JS */

                /* Se le da  children de Button el prop "validar" es el nombre del Botton*/
            >
                Validar 
            </Button>
     
        </div>

        

        
    )
    
    
}

export default FormularioIndex;

