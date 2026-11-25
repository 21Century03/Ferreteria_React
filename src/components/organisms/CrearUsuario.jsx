import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputMoIndex from "../molecules/InputMoIndex"
import Button from "../atoms/Button"
import { ValidarNombre, ValidarTelefono, ValidarCorreo, ValidarContrasenia } from "../../Service/ValidacionesFormLogin/Validaciones"
import "../../Styles/CamposError.css"
import "../../Styles/Login.css"
import { registrar as registrarApi } from "../../api/authApi"
import { mensajeDeError } from "../../api/axiosClient"

const CrearUsuario = () => {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
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

  const registrar = async () => {
    setMensajeExito("")

    const resNombre = ValidarNombre(nombre)
    const resTelefono = ValidarTelefono(telefono)
    const resCorreo = ValidarCorreo(email)
    const resContrasenia = ValidarContrasenia(contrasenia)

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

    try {
      await registrarApi({
        nombre: nombre.trim(),
        email: email.trim().toLowerCase(),
        telefono: telefono.trim(),
        password: contrasenia,
      })
    } catch (err) {
      setClaseCorreo("is-invalid")
      setMensajeCorreo(mensajeDeError(err))
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
        id="email"
        label="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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