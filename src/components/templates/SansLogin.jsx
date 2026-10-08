import Navbar from "../organisms/navbar";
import FormularioIndex from "../organisms/organismoIndex";

const Footer = () => {
  return (
    <footer>
      <p>© 2026 Ferretería Los Maestros</p>
    </footer>
  );
};

const SansLoginTemplate = () => {
  return (
    <div>
      <Navbar />         
      <main>
        <FormularioIndex /> 
      </main>
      <Footer />          
    </div>
  );
};

export default SansLoginTemplate;