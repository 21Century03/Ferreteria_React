import InputMoIndex from "./InputMoIndex";

function BarraBusqueda({ valor, onChange }) {
  return (
    <section className="barra-busqueda">
      <InputMoIndex
        id="buscar-producto"
        label="Buscar producto"
        type="search"
        value={valor}
        onChange={(evento) =>
          onChange(evento.target.value)
        }
        placeholder="Buscar por nombre, marca o código..."
        className="form-control input-busqueda"
      />
    </section>
  );
}

export default BarraBusqueda;