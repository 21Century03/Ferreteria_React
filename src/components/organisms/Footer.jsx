import '../../Styles/Footer.css';
import logo from "../../assets/imgCategoria/FerreteriaMestros.jpg"


function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 px-3 mt-4">
      <img src={logo} alt="Ferretería Los Maestros" className="footer-fm__logo img-fluid d-block mx-auto mb-3 rounded" />
      <p className="small mb-1">© 2026 Ferretería Los Maestros</p>
      
    </footer>
  );
}

export default Footer;
