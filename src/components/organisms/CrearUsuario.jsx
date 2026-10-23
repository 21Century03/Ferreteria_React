import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputMoIndex from "../molecules/InputMoIndex"
import Button from "../atoms/Button"
import { ValidarNombre, ValidarTelefono, ValidarCorreo, ValidarContrasenia } from "../../Service/ValidacionesFormLogin/Validaciones"
import "../../Styles/CamposError.css"
import "../../Styles/Login.css"
import { useUsuario } from "../../data/UsuarioContext"

const CrearUsuario = () => {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [correo, setCorreo] = useState("")
  const [contrasenia, setContrasenia] = useState("")
  const [repetir, setRepetir] = useState("")

  const [ClaseNombre, setClaseNombre] = useState("")
  const [ClaseTelefono, setClaseTelefono] = useState("")
  const [ClaseCorreo, setClaseCorreo] = useState("")
  const [ClaseContrasenia, setClaseContrasenia] = useState("")
  const [ClaseRepetir, setClaseRepetir] = useState("")

  const [MensajeNombre, setMensajeNombre] = useState("")
  const [MensajeTelefono, setMensajeTelefono] = useState("")
  const [MensajeCorreo, setMensajeCorreo] = useState("")
  const [MensajeContrasenia, setMensajeContrasenia] = useState("")
  const [MensajeRepetir, setMensajeRepetir] = useState("")
  const [MensajeExito, setMensajeExito] = useState("")

  const [EsCorrecto, setEsCorrecto] = useState(false)

  const navigate = useNavigate()
  const sesion = useUsuario()

  const registrar = () => {
    setMensajeExito("")

    const resNombre = ValidarNombre(nombre)
    const resTelefono = ValidarTelefono(telefono)
    const resCorreo = ValidarCorreo(correo)
    const resContrasenia = ValidarContrasenia(contrasenia)

    // La confirmación debe ser igual a la contraseña
    const coinciden = contrasenia === repetir && repetir !== ""

    setClaseNombre(resNombre.className)
    setClaseTelefono(resTelefono.className)
    setClaseCorreo(resCorreo.className)
    setClaseContrasenia(resContrasenia.className)
    setClaseRepetir(coinciden ? "" : "is-invalid")

    setMensajeNombre(resNombre.mensaje)
    setMensajeTelefono(resTelefono.mensaje)
    setMensajeCorreo(resCorreo.mensaje)
    setMensajeContrasenia(resContrasenia.mensaje)
    setMensajeRepetir(coinciden ? "" : "Las contraseñas no coinciden")

    const valido =
      resNombre.valido &&
      resTelefono.valido &&
      resCorreo.valido &&
      resContrasenia.valido &&
      coinciden

    setEsCorrecto(valido)

    if (!valido) {
      return
    }

    const resultado = sesion.registrarUsuario({
      nombre: nombre.trim(),
      telefono: telefono,
      correo: correo,
      contrasenia: contrasenia,
    })

    if (!resultado.ok) {
      // Por ejemplo: el correo ya está registrado
      setClaseCorreo("is-invalid")
      setMensajeCorreo(resultado.mensaje)
      setEsCorrecto(false)
      return
    }

    setMensajeExito("Cuenta creada. Te llevamos al inicio de sesión...")
    setTimeout(() => navigate("/login"), 1200)
  }

  return (
    <div>
      <InputMoIndex
        id="nombre"
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu Nombre"
        className={ClaseNombre}
      />
      {MensajeNombre && <p className="MensajeError">{MensajeNombre}</p>}

      <InputMoIndex
        id="telefono"
        label="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
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
      {MensajeCorreo && <p className="MensajeError">{MensajeCorreo}</p>}

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

      <InputMoIndex
        id="repetir"
        label="Repetir contraseña"
        type="password"
        value={repetir}
        onChange={(e) => setRepetir(e.target.value)}
        placeholder="Escribe de nuevo tu Contraseña"
        className={ClaseRepetir}
      />
      {MensajeRepetir && <p className="MensajeError">{MensajeRepetir}</p>}

      <Button onClick={registrar} EsCorrecto={EsCorrecto}>
        Crear cuenta
      </Button>

      {MensajeExito && <p>{MensajeExito}</p>}
    </div>
  )
}

export default CrearUsuario