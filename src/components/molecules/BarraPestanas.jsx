import { Link } from "react-router-dom"
import ButtonIndexForm from "../atoms/Button"

function BarraPestanas(props) {
  return (
    <section className="d-flex flex-wrap gap-2 mb-4">
      {props.pestanas.map((pestana) =>
        pestana.ruta ? (
          <Link
            key={pestana.id}
            to={pestana.ruta}
            className="btn fw-bold btn-outline-marca"
          >
            {pestana.texto}
          </Link>
        ) : (
          <ButtonIndexForm
            key={pestana.id}
            className={props.activa === pestana.id ? "btn-marca" : "btn-outline-marca"}
            onClick={() => props.onSeleccionar(pestana.id)}
          >
            {pestana.texto}
          </ButtonIndexForm>
        )
      )}
      <ButtonIndexForm className="incorrecto" onClick={props.onCerrarSesion}>
        Cerrar sesión
      </ButtonIndexForm>
    </section>
  )
}

export default BarraPestanas