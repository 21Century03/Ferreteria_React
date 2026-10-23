import { Link } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { productos } from "../data/productos";
import imgCategoria from "../data/imgCategoria";
import '../Styles/InicioPage.css';

const categorias = [...new Set(productos.map((p) => p["Categoría"]))];

function Inicio() {
  return (
    <PlantillaPublica>
      <section className="inicio">
        <h1>Ferretería Los Maestros</h1>
        <p>Materiales, herramientas y todo lo que necesitas para tu proyecto.</p>
        <Link to="/catalogo" className="btn-productos">Ver catálogo</Link>
      </section>

      <section className="categorias">
        <h2>Nuestras categorías</h2>
        <div className="categorias-container">
          {categorias.map((c) => (
            <div key={c} className="categoria">
              <Link to="/catalogo" className="btn-categoria">
                <img
                  src={imgCategoria[c]}
                  alt={c}
                  className="btn-categoria__img"
                />
                <span className="btn-categoria__texto">{c}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PlantillaPublica>
  )
}

export default Inicio
