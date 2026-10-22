import { useState } from "react";
import CatalogoTemplate from "../components/templates/CatalogoTemplate";
import Catalogo from "../components/organisms/Catalogo/Catalogo";
import MenuFiltros from "../components/organisms/MenuFiltros/MenuFiltros";
import { useInventario } from "../data/CopiaInventario";

function CatalogoPag() {
  const inventario = useInventario();

  // Estados del filtro 
  const [busqueda, setBusqueda] = useState("");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState({});
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  // Busca si hay una categoria marcada
  let hayCategoriaMarcada = false;
  for (const nombreCategoria in categoriasSeleccionadas) {
    if (categoriasSeleccionadas[nombreCategoria] === true) {
      hayCategoriaMarcada = true;
    }
  }

  const textoBuscado = busqueda.toLowerCase();
  const productosFiltrados = [];

  for (let i = 0; i < inventario.productos.length; i++) {
    const producto = inventario.productos[i];
    const precio = Number(producto["P. Venta (CLP)"]);
    const nombreProducto = producto["Nombre del producto"].toLowerCase();

    let pasaBusqueda = true;
    if (textoBuscado !== "" && nombreProducto.includes(textoBuscado) === false) {
      pasaBusqueda = false;
    }

    let pasaCategoria = true;
    if (hayCategoriaMarcada === true) {
      pasaCategoria = categoriasSeleccionadas[producto["Categoría"]] === true;
    }

    let pasaPrecio = true;
    if (precioMin !== "" && precio < Number(precioMin)) {
      pasaPrecio = false;
    }
    if (precioMax !== "" && precio > Number(precioMax)) {
      pasaPrecio = false;
    }

    if (pasaBusqueda === true && pasaCategoria === true && pasaPrecio === true) {
      productosFiltrados.push(producto);
    }
  }

  return (
    <CatalogoTemplate>
      <MenuFiltros
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoriasSeleccionadas={categoriasSeleccionadas}
        setCategoriasSeleccionadas={setCategoriasSeleccionadas}
        precioMin={precioMin}
        setPrecioMin={setPrecioMin}
        precioMax={precioMax}
        setPrecioMax={setPrecioMax}
      />
      <Catalogo productos={productosFiltrados} />
    </CatalogoTemplate>
  );
}

export default CatalogoPag;