
import { useState } from "react"
import InputMonIndex from "../molecules/InputMoIndex"
import Button from "../atoms/Button"

/*
Definicion de Const y Booleans
 */
const FormularioIndex = () => {

    const [nombre, setNombre] = useState(""); /* Se le asigna un estado al nombre*/
    const [EsCorrecto, setEsCorrecto] = useState(false); /* Se le asigna un cambiador Estado al Button*/
    const numTelefono = /^[0-9]+$/;
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const validarFormulario = () => {
        
        const CampoNombre = nombre.trim();
            if (CampoNombre === ""){
                setEsCorrecto(false)
                alert("El nombre no puede estar vacío");
            } else {
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

            <Button
                onClick={validarFormulario}
                EsCorrecto ={EsCorrecto} /* Se aclara k el Prop es un codigo JS */

                /* Se le da  children de Button el prop "validar"*/
            >
                Validar 
            </Button>
     
        </div>
    )
}

