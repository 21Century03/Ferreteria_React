import Cabezera from "../organisms/Header"

import Footer from "../organisms/Footer"


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