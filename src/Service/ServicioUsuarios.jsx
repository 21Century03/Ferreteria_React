import { listarUsuarios, editarUsuario, eliminarUsuario } from "../api/usuariosApi"
import { mensajeDeError } from "../api/axiosClient"
import { ValidarNombre, ValidarTelefono } from "./ValidacionesFormLogin/Validaciones"

export const esAdmin = (usuario) => Boolean(usuario) && usuario.rol === "admin"

export function pestanasPara(usuario, cantidades) {
  if (esAdmin(usuario)) {
    return [
      { id: "perfil", texto: "Mi perfil" },
      { id: "stock", texto: "Administrar stock", ruta: "/administrador" },
      { id: "usuarios", texto: "Usuarios (" + cantidades.usuarios + ")" },
    ]
  }
  return [
    { id: "perfil", texto: "Mi perfil" },
    { id: "vistos", texto: "Artículos vistos (" + cantidades.vistos + ")" },
    { id: "compras", texto: "Mis compras (" + cantidades.compras + ")" },
    { id: "carrito", texto: "Carrito (" + cantidades.carrito + ")" },
  ]
}

export const borradorDesde = (usuario) => ({
  nombre: usuario.nombre || "",
  telefono: usuario.telefono || "",
})

export function validarPerfil(borrador) {
  const errores = {}
  const nombre = borrador.nombre.trim()
  const telefono = borrador.telefono.trim()

  const resNombre = ValidarNombre(nombre)
  if (!resNombre.valido) errores.nombre = resNombre.mensaje
  else if (nombre.length < 3) errores.nombre = "El nombre debe tener al menos 3 caracteres"
  else if (nombre.length > 100) errores.nombre = "El nombre es demasiado largo"

  if (telefono !== "") {
    const resTel = ValidarTelefono(telefono)
    if (!resTel.valido) errores.telefono = resTel.mensaje
    else if (telefono.length > 20) errores.telefono = "El teléfono es demasiado largo"
  }
  return errores
}

// Solo envía lo que realmente cambió
export function construirCambios(usuario, borrador) {
  const cambios = {}
  if (borrador.nombre.trim() !== (usuario.nombre || "")) cambios.nombre = borrador.nombre.trim()
  if (borrador.telefono.trim() !== (usuario.telefono || "")) {
    cambios.telefono = borrador.telefono.trim() || null
  }
  return cambios
}

export async function guardarPerfil(usuario, borrador) {
  const errores = validarPerfil(borrador)
  if (Object.keys(errores).length > 0) {
    return { ok: false, errores, mensaje: "", usuario }
  }
  const cambios = construirCambios(usuario, borrador)
  if (Object.keys(cambios).length === 0) {
    return { ok: true, errores: {}, mensaje: "No hay cambios para guardar", usuario }
  }
  try {
    const actualizado = await editarUsuario(usuario.email, cambios)
    return { ok: true, errores: {}, mensaje: "Perfil actualizado", usuario: { ...usuario, ...actualizado } }
  } catch (error) {
    return { ok: false, errores: {}, mensaje: mensajeDeError(error), usuario }
  }
}

export async function cargarUsuarios() {
  try {
    return { ok: true, usuarios: await listarUsuarios(), mensaje: "" }
  } catch (error) {
    return { ok: false, usuarios: [], mensaje: mensajeDeError(error) }
  }
}

export const puedeEliminar = (solicitante, fila) =>
  esAdmin(solicitante) && solicitante.email !== fila.email

export async function eliminarUsuarioLista(solicitante, lista, email) {
  const fila = lista.find((u) => u.email === email)
  if (!fila || !puedeEliminar(solicitante, fila)) {
    return { ok: false, usuarios: lista, mensaje: "No puedes eliminar este usuario" }
  }
 
  try {
    await eliminarUsuario(email)
    return { ok: true, usuarios: lista.filter((u) => u.email !== email), mensaje: "Usuario eliminado" }
  } catch (error) {
    return { ok: false, usuarios: lista, mensaje: mensajeDeError(error) }
  }
}