import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import Boton from "../../atoms/Button/Button"

function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className="navbar-fm">
      <NavLink to="/" onClick={cerrar} className="navbar-fm__marca">
       
        <span>Ferretería Los Maestros</span>
      </NavLink>

      <Boton
        type="button"
        className="navbar-fm__toggle"
        ariaLabel="Abrir menú"
        ariaExpanded={abierto}
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? "✖" : "☰"}
      </Boton>

      <nav className={`navbar-fm__menu ${abierto ? "navbar-fm__menu--abierto" : ""}`}>
        <NavLink to="/" end onClick={cerrar}>Inicio</NavLink>
        <NavLink to="/catalogo" onClick={cerrar}>Catálogo</NavLink>
        <NavLink to="/login" onClick={cerrar}>Login</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;