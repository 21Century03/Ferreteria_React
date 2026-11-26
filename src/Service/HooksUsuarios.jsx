import { useEffect, useState } from "react"
import {
  esAdmin, cargarUsuarios, eliminarUsuarioLista, borradorDesde, guardarPerfil,
} from "./ServicioUsuarios"

export function useUsuariosAdmin(usuario) {
  const [usuarios, setUsuarios] = useState([])
  const [mensaje, setMensaje] = useState("")
  const admin = esAdmin(usuario)

  useEffect(() => {
    if (!admin) return
    let activo = true
    cargarUsuarios().then((r) => {
      if (!activo) return
      setUsuarios(r.usuarios)
      setMensaje(r.mensaje)
    })
    return () => { activo = false }
  }, [admin])

  const eliminar = async (email) => {
    const r = await eliminarUsuarioLista(usuario, usuarios, email)
    if (r.ok) setUsuarios(r.usuarios)
    setMensaje(r.mensaje)
  }

  return { usuarios, mensaje, eliminar }
}

export function useEdicionPerfil(usuario, alActualizar) {
  const [editando, setEditando] = useState(false)
  const [borrador, setBorrador] = useState({ nombre: "", telefono: "" })
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState("")
  const [exito, setExito] = useState(false)

  const iniciar = () => {
    if (!usuario) return
    setBorrador(borradorDesde(usuario))
    setErrores({})
    setMensaje("")
    setEditando(true)
  }

  const cancelar = () => {
    setEditando(false)
    setErrores({})
    setMensaje("")
  }

  const cambiar = (campo, valor) => setBorrador((b) => ({ ...b, [campo]: valor }))

  const guardar = async () => {
    const r = await guardarPerfil(usuario, borrador)
    setErrores(r.errores)
    setMensaje(r.mensaje)
    setExito(r.ok)
    if (r.ok) {
      alActualizar(r.usuario)
      setEditando(false)
    }
  }

  return { editando, borrador, errores, mensaje, exito, iniciar, cancelar, cambiar, guardar }
}