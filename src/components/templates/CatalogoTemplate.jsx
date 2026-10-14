import Cabezera from "../organisms/Header/Header";
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