import { useState } from "react";
import CheckBox from "../../atoms/CheckBox/CheckBox";

const categorias = [
  "Mat. Construcción",
  "Pinturas",
  "Herramientas",
  "Gasfitería",
  "Electricidad",
  "Tornillería",
  "Madera",
  "Seguridad",
  "Jardín",
];

function MenuFiltros(props) {
  // Este estado sí vive aquí: solo sirve para abrir y cerrar el menú
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cambiarCategoria(nombre) {
    const copia = { ...props.categoriasSeleccionadas };

    if (copia[nombre] === true) {
      copia[nombre] = false;
    } else {
      copia[nombre] = true;
    }

    props.setCategoriasSeleccionadas(copia);
  }

  function abrirCerrarMenu() {
    if (menuAbierto === true) {
      setMenuAbierto(false);
    } else {
      setMenuAbierto(true);
    }
  }

  let textoBoton = "Mostrar filtros";
  if (menuAbierto === true) {
    textoBoton = "Ocultar filtros";
  }

  let contenidoMenu = null;
  if (menuAbierto === true) {
    contenidoMenu = (
      <div className="mt-3">
        <h6>Categorías</h6>
        {categorias.map(function (nombre) {
          return (
            <CheckBox
              key={nombre}
              id={nombre}
              label={nombre}
              checked={props.categoriasSeleccionadas[nombre] === true}
              onChange={function () {
                cambiarCategoria(nombre);
              }}
            />
          );
        })}

        <h6 className="mt-3">Precio</h6>
        <input
          type="number"
          className="form-control form-control-sm mb-2"
          placeholder="Precio mínimo"
          value={props.precioMin}
          onChange={function (e) {
            props.setPrecioMin(e.target.value);
          }}
        />
        <input
          type="number"
          className="form-control form-control-sm"
          placeholder="Precio máximo"
          value={props.precioMax}
          onChange={function (e) {
            props.setPrecioMax(e.target.value);
          }}
        />
      </div>
    );
  }

  return (
    <section className="container mt-2">
      {/* Barra de búsqueda y botón: siempre visibles */}
      <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={props.busqueda}
          onChange={function (e) {
            props.setBusqueda(e.target.value);
          }}
        />
        <button
          className="btn text-white"
          style={{ backgroundColor: "#f77f00" }}
          onClick={abrirCerrarMenu}
        >
          {textoBoton}
        </button>
      </div>

      {contenidoMenu}
    </section>
  );
}

export default MenuFiltros;