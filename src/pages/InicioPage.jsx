import { Link } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { productos } from "../data/productos";
const categorias = [...new Set(productos.map((p) => p["Categoría"]))];

function Inicio() {
  return (
    <PlantillaPublica>
      <section className="hero">
        <h1>Ferretería Los Maestros</h1>
        <p>Materiales, herramientas y todo lo que necesitas para tu proyecto.</p>
        <Link to="/catalogo" className="btn-fm btn-fm--primario">Ver catálogo</Link>
      </section>

      <section>
        <h2>Nuestras categorías</h2>
        <div className="row g-3">
          {categorias.map((c) => (
            <div key={c} className="col-6 col-md-4">
              <Link to="/catalogo" className="categoria-card">{c}</Link>
            </div>
          ))}
        </div>
      </section>
    </PlantillaPublica>
  );
}

export default Inicio;