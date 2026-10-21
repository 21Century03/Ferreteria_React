import FilaAdmin from "../../molecules/FilaAdmin/FIlaAdmin"
import "./TablaAdmin.css"

function TablaAdmin(props) {
  return (
    <table className="tabla-admin">
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
  )
}

export default TablaAdmin