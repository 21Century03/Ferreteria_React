
import Forma from "../molecules/itemForma"
import {productos} from "../../data/productos"

function Catalogo (){

    return (
        <section><h2>Catalogo de productos</h2>
            <section>
                {productos.map(function(producto){
                    return(
                        <Forma
                        key={producto["Código"]}
                        nombre={producto["Nombre del producto"]}
                        precio={producto["P. Venta (CLP)"]}
                        stock={producto["Stock"]}
                        />
                    )
                })}


            </section>
        
        </section>
        
    )
}

export default Catalogo