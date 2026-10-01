import organismoIndex from '../organisms/organismoIndex';

fuction 

function SansLogin() {
    return (
        <div>
            <organismoIndex />
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