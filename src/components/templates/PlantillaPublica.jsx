import Navbar from "../organisms/NavBar";
import Footer from "../organisms/Footer";
import '../../Styles/PlantillaPublica.css';

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
