import Login from "../organisms/Login";
import '../../Styles/PlantillaPublica.css';
import Footer from "../organisms/Footer"



function SansLoginTemplate() { /* Esto devuelve todo el template,su contenido se exporta para despues usarlo en el Login */ 
  return (
    <div className="page-container">
      <Login />
      <Footer />
    </div>
  );
}



export default SansLoginTemplate;