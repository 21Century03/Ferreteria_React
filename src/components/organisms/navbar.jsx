 
 import { Link } from "react-router-dom";

 const Navbar = () => {
    return (
        <nav className="navbar-fm">
        <Link to="/" className="navbar-fm__marca">Ferretería Los Maestros</Link>

        <ul className="navbar-fm__menu">
            <li><Link to="/">Inicio</Link></li>
            
        </ul>
        </nav>
        );
        
    };

    export default Navbar;