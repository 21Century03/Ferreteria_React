import './Footer.css';
import logo from "../../../assets/imgCategoria/FerreteriaMestros.jpg"
function Footer() {
  return (
    <footer className="footer-fm">
      <img src={logo} alt="Ferretería Los Maestros" className="footer-fm__logo" />
      <p>© 2026 Ferretería Los Maestros</p>
      
    </footer>
  );
}

export default Footer;
