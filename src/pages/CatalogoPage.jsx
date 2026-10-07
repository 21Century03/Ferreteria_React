import PlantillaPublica from "../components/templates/PlantillaPublica";
import CatalogoProductos from "../components/organisms/CatalogoProductos";

function Catalogo() {
  return (
    <PlantillaPublica>
      <h1>Catálogo de productos</h1>
      <CatalogoProductos />
    </PlantillaPublica>
  );
}

export default Catalogo;
