

/* Importar el logo logo.css etc del Header @Isahac*/

import logoImg from "../assets/Ferreteri.jpg";

// Componente con MAYÚSCULA (si no, React lo toma como etiqueta HTML)
const Logo = ({ alt = "Logo Ferretería Los Maestros" }) => {
  return <img className="logo" src={logoImg} alt={alt} />;
};

export default Logo;