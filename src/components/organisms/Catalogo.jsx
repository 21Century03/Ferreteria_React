import Forma from "../molecules/itemForma";
import { ImgProductos } from "../../data/ImgProductos";
import "../../Styles/Catalogo.css";

function Catalogo({
  productos = [],
  mensajeVacio = "No hay productos con esos filtros."
}) {
  return (
    <section>
      <h2 className="text-center mb-4">
        Catálogo de productos
      </h2>

      {productos.length === 0 && (
        <p role="status">{mensajeVacio}</p>
      )}

      <section className="tarjeta-producto">
        {productos.map((producto) => (
          <section key={producto["Código"]}>
            <Forma
              codigo={producto["Código"]}
              nombre={producto["Nombre del producto"]}
              precio={producto["P. Venta (CLP)"]}
              stock={producto["Stock"]}
              imagen={ImgProductos[producto["Código"]]}
            />
          </section>
        ))}
      </section>
    </section>
  );
}

export default Catalogo;