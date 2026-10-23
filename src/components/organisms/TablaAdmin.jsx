import FilaAdmin from "../molecules/FIlaAdmin"

function TablaAdmin(props) {
  return (
  <section className="table-responsive">
    <table className="table table-dark table-striped table-hover align-middle tabla-admin">
      <thead>
        <tr>
          <th>Código</th>
          <th>Producto</th>
          <th>Stock</th>

          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {props.productos.map((producto) => (
          <FilaAdmin
            key={
              producto["Código"] +
              "-" +
              producto["Stock"] +
              "-" 
            }
            codigo={producto["Código"]}
            nombre={producto["Nombre del producto"]}
            stock={producto["Stock"]}
            onGuardar={props.onGuardar}
          />
        ))}
      </tbody>
    </table>
  </section>
  )
}

export default TablaAdmin