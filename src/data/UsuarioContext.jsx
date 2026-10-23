import { createContext, useContext, useEffect, useState } from "react"
import { agregarVisto, crearCompra } from "../Service/FuncionesUsuario"


const UsuarioContext = createContext(null)

function cargarGuardado(clave, valorInicial) {
  try {
    const guardado = localStorage.getItem(clave)
    if (guardado) {
      return JSON.parse(guardado)
    }
    return valorInicial
  } catch (error) {
    return valorInicial
  }
}

export function UsuarioProvider(props) {
  const [usuario, setUsuario] = useState(() => cargarGuardado("usuario", null))
  const [vistos, setVistos] = useState(() => cargarGuardado("vistos", []))
  const [compras, setCompras] = useState(() => cargarGuardado("compras", []))

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario))
  }, [usuario])

  useEffect(() => {
    localStorage.setItem("vistos", JSON.stringify(vistos))
  }, [vistos])

  useEffect(() => {
    localStorage.setItem("compras", JSON.stringify(compras))
  }, [compras])

  const iniciarSesion = (datos) => {
    setUsuario(datos)
  }

  const cerrarSesion = () => {
    setUsuario(null)
  }

  const registrarVisto = (codigo) => {
    if (!usuario) {
      return
    }
    setVistos((actual) => agregarVisto(actual, usuario.correo, codigo))
  }

  const registrarCompra = (items, subtotal, totalConIva) => {
    if (!usuario) {
      return
    }
    setCompras((actual) => [
      crearCompra(usuario.correo, items, subtotal, totalConIva),
      ...actual,
    ])
  }
  // cosas para el crear usuarios

const [usuarios, setUsuarios] = useState(() => cargarGuardado("usuarios", []))

useEffect(() => {
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
}, [usuarios])

const registrarUsuario = (datos) => {
  const correo = datos.correo.trim().toLowerCase()
  const existe = usuarios.some((u) => u.correo === correo)
  if (existe) {
    return { ok: false, mensaje: "Ese correo ya está registrado" }
  }
  setUsuarios((actual) => [...actual, { ...datos, correo: correo }])
  return { ok: true, mensaje: "" }
}

  const valor = {
    usuario: usuario,
    vistos: vistos,
    compras: compras,
    iniciarSesion: iniciarSesion,
    cerrarSesion: cerrarSesion,
    registrarVisto: registrarVisto,
    registrarCompra: registrarCompra,
    usuario: usuario,
    usuarios: usuarios,
    registrarUsuario: registrarUsuario
  }

  return (
    <UsuarioContext.Provider value={valor}>
      {props.children}
    </UsuarioContext.Provider>
  )
}

export function useUsuario() {
  return useContext(UsuarioContext)
}

