import Login from "../organisms/Login/Login";
import './PlantillaPublica.css';



function SansLogin() {
    return (
        <div>
            <Login />
        </div>
    );
}


function Footer() {
  return <footer><p>© 2026 Ferreteria Los Maestros</p></footer>;
}


function SansLoginTemplate() { /* Esto devuelve todo el template,su contenido se exporta para despues usarlo en el Login */ 
  return (
    <div className="page-container">
      <SansLogin />
      <Footer />
    </div>
  );
}



export default SansLoginTemplate;