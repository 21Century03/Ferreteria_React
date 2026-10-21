import { createContext, useContext, useEffect, useState } from "react"
import { comprarProducto , modificarProducto, hayStockSuficiente,total as calcularTotal,calcularCostoEnvio} from "../Service/Funciones"
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

function cargarCarrito() {
  try {
    const guardado = localStorage.getItem("carrito")
    if (guardado) {
      return JSON.parse(guardado)
    }
    return []
  } catch (error) {
    return []
  }
}

export function InventarioProvider(props) {
  const [productos, setProductos] = useState(cargarInicial)
  const [carrito, setCarrito] = useState(cargarCarrito)

  useEffect(() => {
    localStorage.setItem("inventario", JSON.stringify(productos))
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [productos, carrito])

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
  const agregarProducto = (codigo, cantidad = 1, metodoEnvio = "") => {
    const cant = Number(cantidad)
    const producto = productos.find((p) => String(p["Código"]) === String(codigo))

    if (!producto) {
      return { ok: false, mensaje: "Producto no encontrado" }
    }

    const enCarrito = carrito.find((item) => String(item.codigo) === String(codigo))
    const yaAgregado = enCarrito ? enCarrito.cantidad : 0

    
    if (!hayStockSuficiente(producto, yaAgregado + cant)) {
      return { ok: false, mensaje: "Cantidad no válida o sin stock suficiente" }
    }

    setCarrito((actual) => {
      const existe = actual.some((item) => String(item.codigo) === String(codigo))

      if (existe) {
        return actual.map((item) => {
          if (String(item.codigo) === String(codigo)) {
            return { ...item, cantidad: item.cantidad + cant ,envio: metodoEnvio !== "" ? metodoEnvio : item.envio }
          } else {
            return item
          }
        })
      }

      return [
        ...actual,
        {
          codigo: producto["Código"],
          nombre: producto["Nombre del producto"],
          precio: Number(producto["P. Venta (CLP)"]),
          cantidad: cant,
          envio: metodoEnvio
        },
      ]
    })

    return { ok: true, mensaje: "" }
  }

  const restarProducto = (codigo, cantidad = 1) => {
    setCarrito((actual) =>
      actual
        .map((item) => {
          if (String(item.codigo) === String(codigo)) {
            return { ...item, cantidad: item.cantidad - cantidad }
          } else {
            return item
          }
        })
        .filter((item) => item.cantidad > 0)
    )
  }

  const eliminarProducto = (codigo) => {
    setCarrito((actual) => actual.filter((item) => String(item.codigo) !== String(codigo)))
  }

  const finalizarCompra = () => {
   
    const sinStock = carrito.find((item) => {
      const p = productos.find((prod) => String(prod["Código"]) === String(item.codigo))
      return !p || !hayStockSuficiente(p, item.cantidad)
    })

    if (sinStock) {
      return { ok: false, mensaje: "No hay stock suficiente de " + sinStock.nombre }
    }

    carrito.forEach((item) => comprar(item.codigo, item.cantidad))
    setCarrito([])
    return { ok: true, mensaje: "Compra realizada" }
  }

  const subtotal = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)
  const costoEnvio = calcularCostoEnvio(carrito)
  const totalConIva = calcularTotal(subtotal).total + costoEnvio

  const valor = {
    productos: productos,
    comprar: comprar,
    reiniciar: reiniciar,
    actualizarProducto: actualizarProducto,
    carrito: carrito,
    subtotal: subtotal,
    totalConIva: totalConIva,
    agregarProducto: agregarProducto,
    restarProducto: restarProducto,
    eliminarProducto: eliminarProducto,
    finalizarCompra: finalizarCompra,
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
