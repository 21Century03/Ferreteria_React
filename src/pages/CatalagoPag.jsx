import { useMemo, useState } from "react";

import CatalogoTemplate from "../components/templates/CatalogoTemplate";
import Catalogo from "../components/organisms/Catalogo";
import FiltroCatalogo from "../components/organisms/FiltroCatalogo";
import BarraBusqueda from "../components/molecules/BarraBusqueda";

import { useInventario } from "../data/CopiaInventario";
import { procesarCatalogo } from "../Service/ValidacionesFiltro";

export default function CatalogoPag() {
  const { productos = [] } = useInventario();

  const [busqueda, setBusqueda] = useState("");

  const [filtros, setFiltros] = useState({
    categorias: [],
    precioMin: "",
    precioMax: ""
  });

  const resultadoCatalogo = useMemo(() => {
    return procesarCatalogo(
      productos,
      filtros,
      busqueda
    );
  }, [productos, filtros, busqueda]);

  return (
    <CatalogoTemplate>
      <section className="catalogo-controles">
        <BarraBusqueda
          valor={busqueda}
          onChange={setBusqueda}
        />

        <FiltroCatalogo
          categoriasDisponibles={
            resultadoCatalogo.categoriasDisponibles
          }
          filtros={filtros}
          onFiltrosChange={setFiltros}
          errores={
            resultadoCatalogo.validacionPrecio.errores
          }
        />
      </section>

      <Catalogo
        productos={resultadoCatalogo.productosFiltrados}
        mensajeVacio={resultadoCatalogo.mensajeVacio}
      />
    </CatalogoTemplate>
  );
}