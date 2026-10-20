import { describe, it, expect } from 'vitest'
import {hayStockSuficiente,comprarProducto,modificarProducto,validarStock} from "./Funciones"

//suite 1 : elementos de comprar en el producto en solitario 

const productos = [
  { "Código": 1, "Nombre del producto": "Martillo", "Stock": 10, "Stock mínimo": 3 },
  { "Código": 2, "Nombre del producto": "Taladro", "Stock": 2, "Stock mínimo": 5 },
]

describe("comprarProducto", () => {
  it("descuenta el stock del producto comprado", () => {
    const resultado = comprarProducto(productos, 1, 4)

    expect(resultado[0]["Stock"]).toBe(6)
  })

  it("no modifica los otros productos", () => {
    const resultado = comprarProducto(productos, 1, 4)

    expect(resultado[1]).toEqual(productos[1])
  })

  it("permite comprar todo el stock y deja 0", () => {
    const resultado = comprarProducto(productos, 1, 10)

    expect(resultado[0]["Stock"]).toBe(0)
  })

  it("si la cantidad supera el stock, no cambia nada", () => {
    const resultado = comprarProducto(productos, 1, 11)

    expect(resultado).toEqual(productos)
  })

  it("encuentra el producto aunque el código venga como texto", () => {
    const resultado = comprarProducto(productos, "1", 4)

    expect(resultado[0]["Stock"]).toBe(6)
  })

  it("no modifica la base de datos original", () => {
    comprarProducto(productos, 1, 4)

    expect(productos[0]["Stock"]).toBe(10)
  })
})

describe("hayStockSuficiente", () => {
  it("devuelve true si la cantidad es menor al stock", () => {
    expect(hayStockSuficiente(productos[0], 4)).toBe(true)
  })

  it("devuelve true si la cantidad es igual al stock", () => {
    expect(hayStockSuficiente(productos[0], 10)).toBe(true)
  })

  it("devuelve false si la cantidad supera el stock", () => {
    expect(hayStockSuficiente(productos[0], 11)).toBe(false)
  })

  it("devuelve false si la cantidad es 0", () => {
    expect(hayStockSuficiente(productos[0], 0)).toBe(false)
  })

  it("devuelve false si la cantidad es negativa", () => {
    expect(hayStockSuficiente(productos[0], -3)).toBe(false)
  })

  it("devuelve false si la cantidad no es un número", () => {
    expect(hayStockSuficiente(productos[0], NaN)).toBe(false)
  })
})


//suite 2  elementos de la pagina administrador, para modificar stock 

describe("modificarProducto", () => {
  it("cambia el stock del producto indicado", () => {
    const resultado = modificarProducto(productos, 1, 25)

    expect(resultado[0]["Stock"]).toBe(25)
  })

  it("no modifica los otros productos", () => {
    const resultado = modificarProducto(productos, 1, 25)

    expect(resultado[1]).toEqual(productos[1])
  })

  it("permite dejar el stock en 0", () => {
    const resultado = modificarProducto(productos, 1, 0)

    expect(resultado[0]["Stock"]).toBe(0)
  })

  it("conserva el resto de los datos del producto", () => {
    const resultado = modificarProducto(productos, 1, 25)

    expect(resultado[0]["Nombre del producto"]).toBe("Martillo")
    expect(resultado[0]["Stock mínimo"]).toBe(3)
  })

  it("encuentra el producto aunque el código venga como texto", () => {
    const resultado = modificarProducto(productos, "1", 25)

    expect(resultado[0]["Stock"]).toBe(25)
  })

  it("si el código no existe, no cambia nada", () => {
    const resultado = modificarProducto(productos, 999, 25)

    expect(resultado).toEqual(productos)
  })

  it("no modifica el arreglo original", () => {
    modificarProducto(productos, 1, 25)

    expect(productos[0]["Stock"]).toBe(10)
  })
})


describe("validarStock", () => {
  it("rechaza el campo vacío", () => {
    expect(validarStock("")).toBe("Complete el stock")
  })

  it("rechaza decimales", () => {
    expect(validarStock("3.5")).toBe("Use números enteros")
  })

  it("rechaza texto que no es un número", () => {
    expect(validarStock("abc")).toBe("Use números enteros")
  })

  it("rechaza negativos", () => {
    expect(validarStock("-1")).toBe("No se permiten negativos")
  })

  it("acepta un entero válido", () => {
    expect(validarStock("5")).toBe("")
  })

  it("acepta el cero", () => {
    expect(validarStock("0")).toBe("")
  })

  it("si es negativo y decimal, muestra primero el error de enteros", () => {
    expect(validarStock("-1.5")).toBe("Use números enteros")
  })
})
