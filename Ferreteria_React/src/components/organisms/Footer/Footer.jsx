import './Footer.css';
import logo from "../../../assets/imgCategoria/FerreteriaMestros.jpg"
function Footer() {
  return (
    <footer className="footer-fm">
      <img src={logo} alt="Ferretería Los Maestros" className="footer-fm__logo" />
      <p>© 2026 Ferretería Los Maestros</p>
      <p>Ferretería Los Maestros es un negocio familiar ubicado en La Serena, Región de Coquimbo,
            con 22 años de trayectoria. Es atendido por el dueño, su hijo y 2 empleados de planta. Vende materiales de
            construcción, herramientas eléctricas y manuales, gasfitería, electricidad y artículos de ferretería general</p>
    </footer>
  );
}

export default Footer;
