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

  const valor = {
    usuario: usuario,
    vistos: vistos,
    compras: compras,
    iniciarSesion: iniciarSesion,
    cerrarSesion: cerrarSesion,
    registrarVisto: registrarVisto,
    registrarCompra: registrarCompra,
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
