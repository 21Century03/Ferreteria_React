import Cabezera from "../organisms/NavBar"
import Footer from "../organisms/Footer";

function CatalogoTemplate ({children}){
    return ( <>
        <Cabezera/>
        <main className = "principal">
            {children}
        </main>
        <Footer/>
     </>
    )
}
export default CatalogoTemplate