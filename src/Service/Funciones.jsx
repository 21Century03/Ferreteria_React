export function comprarProducto(productos, codigo, cantidad) {
  return productos.map((producto) => {
    if (String(producto["Código"]) !== String(codigo)) {
      return producto
    }
    if (cantidad > producto["Stock"]) {
      return producto
    }
    const copia = Object.assign({}, producto)
    copia["Stock"] = producto["Stock"] - cantidad
    return copia
  })
}

export function hayStockSuficiente(producto, cantidad) {
  return cantidad > 0 && cantidad <= producto["Stock"]
}

export function estaBajoStock(producto) {
  return producto["Stock"] <= producto["Stock mínimo"]
}

export function obtenerBajoStock(productos) {
  return productos.filter((producto) => estaBajoStock(producto))
}

export function modificarProducto(productos, codigo, nuevoStock) {
  return productos.map((producto) => {
    if (String(producto["Código"]) !== String(codigo)) {
      return producto
    }
    const copia = Object.assign({}, producto)
    copia["Stock"] = nuevoStock

    return copia
  })
}

export function validarStock(stock) {
  if (stock === "") {
    return "Complete el stock"
  }
  if (!Number.isInteger(Number(stock))) {
    return "Use números enteros"
  }
  if (Number(stock) < 0) {
    return "No se permiten negativos"
  }
  return ""
}

export function validarCompra(producto, cantidad, metodoEnvio) {
  if (metodoEnvio === "") {
    return "Seleccione un método de envío"
  }
  if (!hayStockSuficiente(producto, cantidad)) {
    return "Cantidad no válida o sin stock suficiente"
  }
  return ""
}