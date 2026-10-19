import Cabezera from "../organisms/NavBar/NavBar"
import Footer from "../organisms/Footer/Footer";

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