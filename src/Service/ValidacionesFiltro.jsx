function campoVacio(valor) {
  return (
    valor === null ||
    valor === undefined ||
    String(valor).trim() === ""
  );
}

function normalizarTexto(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function validarRangoPrecio(minimo, maximo) {
  const errores = {
    precioMin: "",
    precioMax: "",
    rango: ""
  };

  const minVacio = campoVacio(minimo);
  const maxVacio = campoVacio(maximo);

  const min = Number(minimo);
  const max = Number(maximo);

  if (
    !minVacio &&
    (!Number.isInteger(min) ||
      min < 0)
  ) {
    errores.precioMin =
      "Ingresa un precio mínimo entero igual o mayor que 0.";
  }

  if (
    !maxVacio &&
    (!Number.isInteger(max) ||
      max < 0)
  ) {
    errores.precioMax =
      "Ingresa un precio máximo entero igual o mayor que 0.";
  }

  if (
    !errores.precioMin &&
    !errores.precioMax &&
    !minVacio &&
    !maxVacio &&
    min > max
  ) {
    errores.rango =
      "El precio mínimo no puede superar al máximo.";
  }

  const valido =
    errores.precioMin === "" &&
    errores.precioMax === "" &&
    errores.rango === "";

  return { valido, errores };
}

function obtenerCategorias(productos) {
  return [
    ...new Set(
      productos
        .map((producto) => producto["Categoría"])
        .filter(Boolean)
    )
  ].sort((a, b) => a.localeCompare(b, "es"));
}

function filtrarProductosValidos(
  productos,
  filtrosActivos,
  busqueda
) {
  const {
    categorias = [],
    precioMin = "",
    precioMax = ""
  } = filtrosActivos || {};

  const categoriasSeleccionadas = Array.isArray(categorias)
    ? categorias
    : [];

  const minimo = campoVacio(precioMin)
    ? null
    : Number(precioMin);

  const maximo = campoVacio(precioMax)
    ? null
    : Number(precioMax);

  const termino = normalizarTexto(busqueda);

  return productos.filter((producto) => {
    const categoriaValida =
      categoriasSeleccionadas.length === 0 ||
      categoriasSeleccionadas.includes(
        producto["Categoría"]
      );

    const precioOriginal = producto["P. Venta (CLP)"];
    const precio = Number(precioOriginal);

    const precioValido =
      !campoVacio(precioOriginal) &&
      Number.isFinite(precio);

    const precioMinCheck =
      minimo === null ||
      (precioValido && precio >= minimo);

    const precioMaxCheck =
      maximo === null ||
      (precioValido && precio <= maximo);

    const textoProducto = normalizarTexto([
      producto["Nombre del producto"],
      producto["Marca"],
      producto["Código"],
      producto["Categoría"],
      producto["Subcategoría"]
    ].join(" "));

    const busquedaValida =
      termino === "" ||
      textoProducto.includes(termino);

    return (
      precioValido &&
      categoriaValida &&
      precioMinCheck &&
      precioMaxCheck &&
      busquedaValida
    );
  });
}

export function filterProducts(
  productos,
  filtrosActivos,
  busqueda = ""
) {
  if (!Array.isArray(productos)) {
    return [];
  }

  const {
    precioMin = "",
    precioMax = ""
  } = filtrosActivos || {};

  const validacion = validarRangoPrecio(
    precioMin,
    precioMax
  );

  if (!validacion.valido) {
    return [];
  }

  return filtrarProductosValidos(
    productos,
    filtrosActivos,
    busqueda
  );
}

export function procesarCatalogo(
  productos,
  filtros,
  busqueda
) {
  const listaProductos = Array.isArray(productos)
    ? productos
    : [];

  const validacionPrecio = validarRangoPrecio(
    filtros.precioMin,
    filtros.precioMax
  );

  const categoriasDisponibles =
    obtenerCategorias(listaProductos);

  const productosFiltrados = validacionPrecio.valido
    ? filtrarProductosValidos(
        listaProductos,
        filtros,
        busqueda
      )
    : [];

  const mensajeVacio = validacionPrecio.valido
    ? "No hay productos que coincidan con la búsqueda y los filtros."
    : "Corrige los valores del rango de precios para mostrar los productos.";

  return {
    categoriasDisponibles,
    validacionPrecio,
    productosFiltrados,
    mensajeVacio
  };
}