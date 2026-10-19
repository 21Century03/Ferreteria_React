import Login from "../organisms/Login/Login";
import './PlantillaPublica.css';
import Footer from "../organisms/Footer/Footer"



function SansLoginTemplate() { /* Esto devuelve todo el template,su contenido se exporta para despues usarlo en el Login */ 
  return (
    <div className="page-container">
      <Login />
      <Footer />
    </div>
  );
}



export default SansLoginTemplate;