import { calcularCostoEnvio } from "./Funciones"

const maximoVistos = 20


export function agregarVisto(vistos, correo, codigo) {
  const sinRepetido = vistos.filter(
    (visto) => !(visto.correo === correo && String(visto.codigo) === String(codigo))
  )
  const nuevo = { correo: correo, codigo: codigo }
  return [nuevo, ...sinRepetido].slice(0, maximoVistos)
}


export function filtrarPorCorreo(lista, correo) {
  return lista.filter((elemento) => elemento.correo === correo)
}

export function buscarProducto(productos, codigo) {
  return productos.find((producto) => String(producto["Código"]) === String(codigo))
}


export function crearCompra(correo, items, subtotal, totalConIva) {
  return {
    id: Date.now(),
    correo: correo,
    fecha: new Date().toLocaleDateString("es-CL"),
    items: items,
    subtotal: subtotal,
    envio: calcularCostoEnvio(items),
    total: Math.round(totalConIva),
  }
}