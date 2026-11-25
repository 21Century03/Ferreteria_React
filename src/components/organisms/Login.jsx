import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import InputMoIndex from "../molecules/InputMoIndex"
import Button from "../atoms/Button"
import { ValidarCorreo, ValidarContrasenia } from "../../Service/ValidacionesFormLogin/Validaciones"
import { mensajeDeError } from "../../api/axiosClient"
import { useUsuario } from "../../data/UsuarioContext"
import "../../Styles/CamposError.css"
import "../../Styles/Login.css"

const FormularioIndex = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [ClaseCorreo, setClaseCorreo] = useState("")
  const [ClaseContrasenia, setClaseContrasenia] = useState("")
  const [MensajeCorreo, setMensajeCorreo] = useState("")
  const [MensajeContrasenia, setMensajeContrasenia] = useState("")
  const [error, setError] = useState("")
  const [EsCorrecto, setEsCorrecto] = useState(false)

  const navigate = useNavigate()
  const { iniciarSesion } = useUsuario()

  const manejarSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const resCorreo = ValidarCorreo(email)
    const resContrasenia = ValidarContrasenia(password)

    setClaseCorreo(resCorreo.className)
    setClaseContrasenia(resContrasenia.className)
    setMensajeCorreo(resCorreo.mensaje)
    setMensajeContrasenia(resContrasenia.mensaje)

    const valido = resCorreo.valido && resContrasenia.valido
    setEsCorrecto(valido)
    if (!valido) return

    try {
      const perfil = await iniciarSesion(email.trim().toLowerCase(), password)
      const esAdmin = perfil?.rol?.toLowerCase().includes("admin")
      navigate(esAdmin ? "/administrador" : "/usuario")
    } catch (err) {
      setError(mensajeDeError(err))
    }
  }

  return (
    <form onSubmit={manejarSubmit} noValidate>
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Escribe tu Contraseña"
        className={ClaseContrasenia}
      />
      {MensajeContrasenia && <p className="MensajeError">{MensajeContrasenia}</p>}

      {error && <p className="MensajeError">{error}</p>}

      <Button type="submit" EsCorrecto={EsCorrecto}>
        Login
      </Button>
      <nav>
        <NavLink to="/CrearUsuario" className="btn btn-outline-marca fw-bold px-4 py-2 mt-2">
          Crear Usuario
        </NavLink>
      </nav>
    </form>
  )
}

export default FormularioIndex