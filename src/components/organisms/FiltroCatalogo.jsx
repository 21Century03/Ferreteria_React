import { useState } from "react";

import CheckBox from "../atoms/CheckBox";
import InputMoIndex from "../molecules/InputMoIndex";
import "../../Styles/FiltroMenu.css";

export default function FiltroCatalogo({
  categoriasDisponibles,
  filtros,
  onFiltrosChange,
  errores
}) {
  const [abierto, setAbierto] = useState(false);

  function cambiarCategoria(categoria, seleccionada) {
    const nuevasCategorias = seleccionada
      ? [...new Set([...filtros.categorias, categoria])]
      : filtros.categorias.filter((item) => item !== categoria);

    onFiltrosChange({
      ...filtros,
      categorias: nuevasCategorias
    });
  }

  function cambiarPrecio(campo, valor) {
    onFiltrosChange({
      ...filtros,
      [campo]: valor
    });
  }

  return (
    <>
      <button
        type="button"
        className="boton-filtro"
        aria-expanded={abierto}
        aria-controls="panel-filtros-catalogo"
        onClick={() => setAbierto((actual) => !actual)}
      >
        {abierto ? "Ocultar filtros" : "Mostrar filtros"}
      </button>

      {abierto && (
        <section
          id="panel-filtros-catalogo"
          className="panel-filtros"
          aria-label="Opciones de filtrado"
        >
          <fieldset className="filtro-categorias">
            <legend>Filtrar por categoría</legend>

            <section className="lista-categorias">
              {categoriasDisponibles.map((categoria, indice) => (
                <CheckBox
                  key={categoria}
                  id={`categoria-${indice}`}
                  label={categoria}
                  checked={filtros.categorias.includes(categoria)}
                  onChange={(evento) =>
                    cambiarCategoria(
                      categoria,
                      evento.target.checked
                    )
                  }
                />
              ))}
            </section>
          </fieldset>

          <fieldset className="filtro-precios">
            <legend>Rango de precios (CLP)</legend>

            <section className="campo-precio">
              <InputMoIndex
                id="precio-minimo"
                label="Precio mínimo"
                type="number"
                value={filtros.precioMin}
                onChange={(evento) =>
                  cambiarPrecio("precioMin", evento.target.value)
                }
                placeholder="Ej. 1000"
                className="input-precio"
              />

              {errores.precioMin && (
                <p className="error-filtro" role="alert">
                  {errores.precioMin}
                </p>
              )}
            </section>

            <section className="campo-precio">
              <InputMoIndex
                id="precio-maximo"
                label="Precio máximo"
                type="number"
                value={filtros.precioMax}
                onChange={(evento) =>
                  cambiarPrecio("precioMax", evento.target.value)
                }
                placeholder="Ej. 50000"
                className="input-precio"
              />

              {errores.precioMax && (
                <p className="error-filtro" role="alert">
                  {errores.precioMax}
                </p>
              )}

              {errores.rango && (
                <p className="error-filtro" role="alert">
                  {errores.rango}
                </p>
              )}
            </section>
          </fieldset>
        </section>
      )}
    </>
  );
}