import { useState } from "react"
import InputMoIndex from "../molecules/InputMoIndex"
import Button from "../atoms/Button"
import { ValidarNombre, ValidarTelefono, ValidarCorreo, ValidarContrasenia } from "../../Service/ValidacionesFormLogin/Validaciones";
import "../../Styles/CamposError.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login.css";
import { useUsuario } from "../../data/UsuarioContext";
import { NavLink } from "react-router-dom";
   /* Definicion de Const y Booleans */

const FormularioIndex = () => {

    const [nombre, setNombre] = useState(""); /* Se le asigna un estado al nombre*/
    const [telefono, setTelefono] = useState(""); /* Se le asigna un estado al telefono*/
    const [correo, setCorreo] = useState(""); /* Se le asigna un estado al correo*/
    const [contrasenia, setContrasenia] = useState("");

    
    /* Seteos de las clases (cambian el estilo del campo de cada input) */ 
    const [ClaseNombre, setClaseNombre] = useState("");
    const [ClaseTelefono, setClaseTelefono] = useState("");
    const [ClaseCorreo, setClaseCorreo] = useState("");
    const [ClaseContrasenia, setClaseContrasenia] = useState("");

    const [MensajeNombre, setMensajeNombre] = useState("");
    const [MensajeTelefono, setMensajeTelefono] = useState("");
    const [MensajeCorreo, setMensajeCorreo] = useState("");
    const [MensajeContrasenia, setMensajeContrasenia] = useState("");
    const navigate = useNavigate();
    const sesion = useUsuario();
    

    const [EsCorrecto, setEsCorrecto] = useState(false); /* Se le asigna un cambiador Estado al Button*/

    const validarFormulario = () => {
        const resNombre = ValidarNombre(nombre);
        const resTelefono = ValidarTelefono(telefono);
        const resCorreo = ValidarCorreo(correo);
        const resContrasenia = ValidarContrasenia(contrasenia);

        
        setClaseNombre(resNombre.className);
        setClaseCorreo(resCorreo.className);
        setClaseTelefono(resTelefono.className);
        setClaseContrasenia(resContrasenia.className);

        setMensajeNombre(resNombre.mensaje);
        setMensajeTelefono(resTelefono.mensaje);
        setMensajeCorreo(resCorreo.mensaje);
        setMensajeContrasenia(resContrasenia.mensaje);

        const valido = resNombre.valido && resTelefono.valido && resCorreo.valido && resContrasenia.valido;
        setEsCorrecto(valido);
                
        if (valido) {
            const correoLimpio = correo.trim().toLowerCase();

            if (correoLimpio.endsWith("@maestros.cl")) {
                navigate("/administrador");
            } else if (correoLimpio.endsWith("@gmail.cl") || correoLimpio.endsWith("@gmail.com")){
                sesion.iniciarSesion({ nombre: nombre.trim(), telefono: telefono, correo: correoLimpio });
                navigate("/");
            }
        }
    
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
            {MensajeNombre && <p className="MensajeError">{MensajeNombre}</p>}
            
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
            {MensajeTelefono && <p className="MensajeError">{MensajeTelefono}</p>}
            
            <InputMoIndex
                id="correo"
                label="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Escribe tu Correo"
                className={ClaseCorreo}
            />
            {MensajeCorreo && <span className="MensajeError">{MensajeCorreo}</span>}

            <InputMoIndex
                id="contrasenia"
                label="Contraseña"
                type="password"
                value={contrasenia}
                onChange={(e) => setContrasenia(e.target.value)}
                placeholder="Escribe tu Contraseña"
                className={ClaseContrasenia}
            />
            {MensajeContrasenia && <p className="MensajeError">{MensajeContrasenia}</p>}
            

            <Button
                onClick={validarFormulario}
                EsCorrecto ={EsCorrecto} /* Se aclara k el Prop es un codigo JS */

                /* Se le da  children de Button el prop "validar"*/
            >
                Login 
            </Button>
            <nav>
                <NavLink to = "/CrearUsuario" className="btn btn-outline-marca fw-bold px-4 py-2 mt-2">Crear Usuario</NavLink>
            </nav>
     
        </div>
    )
}

export default FormularioIndex