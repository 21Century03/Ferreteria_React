
import Forma from "../molecules/itemForma"
import {productos} from "../../data/productos"
import { useState } from "react"
import "../../App.css"
function Catalogo (){
const [cantidad, setCantidad] = useState("")
const manejarCambio = (e) => {setCantidad(e.target.value)}

    return (
        <section><h2>Catalogo de productos</h2>
            <section className="tarjeta-producto">
                {productos.map(function(producto, index){
                    return(
                        <section key={producto["Código"]}>
                        <Forma
                        codigo={producto["Código"]}
                        nombre={producto["Nombre del producto"]}
                        precio={producto["P. Venta (CLP)"]}
                        stock={producto["Stock"]}
                        />
    
            
                        </section>
                    )
                })}
            </section>
        
        </section>
        
    )
}

export default Catalogo