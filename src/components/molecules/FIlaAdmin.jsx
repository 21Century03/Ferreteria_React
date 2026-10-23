import { useState } from "react"
import Input from "../atoms/Input"
import ButtonIndexForm from "../atoms/Button"
import { validarStock } from "../../Service/Funciones"

function FilaAdmin(props) {
  const [stock, setStock] = useState(String(props.stock))

  const [mensaje, setMensaje] = useState("")

  const manejarGuardar = () => {
    const error = validarStock(stock)
      if (error !== "") {
      setMensaje(error)
      return
    }
    setMensaje("")
    props.onGuardar(props.codigo, Number(stock))
  }

  return (
    <tr>
      <td className="fw-bold text-nowrap">{props.codigo}</td>
      <td>{props.nombre}</td>
      <td>
        <Input
          id={"stock-" + props.codigo}
          type="number"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value)
            setMensaje("")
          }}
        />
      </td>
      <td>
        <ButtonIndexForm onClick={manejarGuardar} estaCorrecto={true}>
          Guardar
        </ButtonIndexForm>
        {mensaje !== "" && <small className="text-warning d-block mt-1">{mensaje}</small>}
      </td>
    </tr>
  )
}

export default FilaAdmin