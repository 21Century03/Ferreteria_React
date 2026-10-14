import Navbar from "../organisms/NavBar/NavBar";
import Footer from "../organisms/Footer/Footer";
import './PlantillaPublica.css';

function PlantillaPublica({ children }) {
  return (
    <>
      <Navbar />
      <main className="contenido">{children}</main>
      <Footer />
    </>
  );
}

export default PlantillaPublica;
