function FilaCompra(props) {
  return (
    <li className="list-group-item">
      <p className="fw-bold mb-1">Compra N° {props.id} - {props.fecha}</p>

      {props.items.map((item) => (
        <p key={item.codigo} className="mb-1">
          {item.nombre} x {item.cantidad} - ${item.precio * item.cantidad}
        </p>
      ))}

      <p className="mb-1">Subtotal: ${props.subtotal}</p>
      {props.envio > 0 && <p className="mb-1">Envío a domicilio: ${props.envio}</p>}
      <p className="fw-bold mb-1">Total con IVA: ${props.total}</p>
    </li>
  )
}

export default FilaCompra