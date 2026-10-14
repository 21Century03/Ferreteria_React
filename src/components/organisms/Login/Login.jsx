
import { useState } from "react"
import InputMoIndex from "../../molecules/InputMoIndex/InputMoIndex"
import Button from "../../atoms/Button/Button"
import { ValidarNombre, ValidarTelefono, ValidarCorreo } from "../../../Service/ValidacionesFormLogin/Validaciones";
import "../../../Service/ValidacionesFormLogin/CamposError.css";

   /* Definicion de Const y Booleans */

const FormularioIndex = () => {

    const [nombre, setNombre] = useState(""); /* Se le asigna un estado al nombre*/
    const [telefono, setTelefono] = useState(""); /* Se le asigna un estado al telefono*/
    const [correo, setCorreo] = useState(""); /* Se le asigna un estado al correo*/
    
    /* Seteos de las clases (cambian el estilo del campo de cada input) */ 
    const [ClaseNombre, setClaseNombre] = useState("");
    const [ClaseTelefono, setClaseTelefono] = useState("");
    const [ClaseCorreo, setClaseCorreo] = useState("");


    

    const [EsCorrecto, setEsCorrecto] = useState(false); /* Se le asigna un cambiador Estado al Button*/

    const validarFormulario = () => {
        const resNombre = ValidarNombre(nombre);
        const resTelefono = ValidarTelefono(telefono);
        const resCorreo = ValidarCorreo(correo);

        
        setClaseNombre(resNombre.className);
        setClaseCorreo(resCorreo.className);
        setClaseTelefono(resTelefono.className);

        setEsCorrecto(resNombre.valido && resTelefono.valido && resCorreo.valido);



    
}

   
    
/* Props*/

    return (
        <div>
        
           <InputMoIndex
                id="nombre"
                label="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                /* evento {e} junto al Target  que apunta al input,
                 se utiliza para obtener el valor de el input y detectar si cambia onChange */
                placeholder="Escribe tu Nombre"
                className={ClaseNombre}
            />
            
            <InputMoIndex
                id="telefono"
                label="Teléfono"    
                value={telefono}

                onChange={(e) => setTelefono(e.target.value)} 
                /* evento {e} junto al Target  que apunta al input,
                 se utiliza para obtener el valor de el input y detectar si cambia onChange */
                placeholder="Escribe tu Teléfono"
                className={ClaseTelefono}
            />
            
            <InputMoIndex
                id="correo"
                label="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Escribe tu Correo"
                className={ClaseCorreo}
            />
    
            

            <Button
                onClick={validarFormulario}
                EsCorrecto ={EsCorrecto} /* Se aclara k el Prop es un codigo JS */

                /* Se le da  children de Button el prop "validar"*/
            >
                Login 
            </Button>
     
        </div>
    )
}

export default FormularioIndex