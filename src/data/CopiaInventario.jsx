import { createContext, useContext, useEffect, useState } from "react"
import { comprarProducto , modificarProducto} from "../Service/Funciones"
import {productos as productosIniciales} from "./productos"

const InventarioContext = createContext(null)

function cargarInicial() {
  try {
    const guardado = localStorage.getItem("inventario")
    if (guardado) {
      return JSON.parse(guardado)
    }
    return productosIniciales
  } catch (error) {
    return productosIniciales
  }
}

export function InventarioProvider(props) {
  const [productos, setProductos] = useState(cargarInicial)

  useEffect(() => {
    localStorage.setItem("inventario", JSON.stringify(productos))
  }, [productos])

  const comprar = (codigo, cantidad) => {
    setProductos((actual) => comprarProducto(actual, codigo, cantidad))
  }

  const reiniciar = () => {
    setProductos(productosIniciales)
  }

  const actualizarProducto = (codigo, nuevoStock) => {
    setProductos((actual) =>
      modificarProducto(actual, codigo, nuevoStock)
    )
  }

  const valor = {
    productos: productos,
    comprar: comprar,
    reiniciar: reiniciar,
    actualizarProducto: actualizarProducto,
  }

  return (
    <InventarioContext.Provider value={valor}>
      {props.children}
    </InventarioContext.Provider>
  )
}

export function useInventario() {
  return useContext(InventarioContext)
}
