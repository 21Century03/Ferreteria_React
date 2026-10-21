import DatoPerfil from "../../molecules/DatoPerfil/DatoPerfil"

function PerfilUsuario(props) {
  return (
    <section>
      <h2>Mi perfil</h2>
      <section className="card">
        <ul className="list-group list-group-flush">
          <DatoPerfil titulo="Nombre" valor={props.usuario.nombre} />
          <DatoPerfil titulo="Teléfono" valor={props.usuario.telefono} />
          <DatoPerfil titulo="Correo" valor={props.usuario.correo} />
        </ul>
      </section>
    </section>
  )
}

export default PerfilUsuario
