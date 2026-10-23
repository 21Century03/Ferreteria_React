import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className="navbar navbar-expand-md sticky-top bg-black" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink to="/" onClick={cerrar} className="navbar-brand fs-4 fw-bold text-marca">
          <span>Ferretería Los Maestros</span>
        </NavLink>

        <button
          type="button"
          className="navbar-toggler"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav className={`collapse navbar-collapse ${abierto ? "show" : ""}`}>
          <div className="navbar-nav ms-auto gap-2 py-2 py-md-0">
            <NavLink to="/" end onClick={cerrar} className="btn btn-oscuro fw-bold">Inicio</NavLink>
            <NavLink to="/catalogo" onClick={cerrar} className="btn btn-oscuro fw-bold">Catálogo</NavLink>
            <NavLink to="/login" onClick={cerrar} className="btn btn-oscuro fw-bold">Login</NavLink>
            <NavLink to="/Carrito" onClick={cerrar} className="btn btn-oscuro fw-bold">Carrito</NavLink>
            <NavLink to="/usuario" onClick={cerrar} className="btn btn-oscuro fw-bold">Mi cuenta</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;