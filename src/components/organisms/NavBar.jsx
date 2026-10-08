import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";

function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className="navbar-fm">
      <NavLink to="/" onClick={cerrar} className="navbar-fm__marca">
        <Logo />
        <span>Ferretería Los Maestros</span>
      </NavLink>

      <button
        type="button"
        className="navbar-fm__toggle"
        aria-label="Abrir menú"
        aria-expanded={abierto}
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? "✖" : "☰"}
      </button>

      <nav className={`navbar-fm__menu ${abierto ? "navbar-fm__menu--abierto" : ""}`}>
        <NavLink to="/" end onClick={cerrar}>Inicio</NavLink>
        <NavLink to="/catalogo" onClick={cerrar}>Catálogo</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;