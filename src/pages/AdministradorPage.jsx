import Plantilla from "../components/templates/PlantillaPublica" 
import ImagenAdmin from "../components/molecules/ImagenAdmin/ImagenAdmin"
import { Link } from "react-router-dom"
import logo from "../assets/logos/tipos-de-stock.jpg"
import logo2 from "../assets/logos/low.png"
import "./AdministradorPAge.css"
function AdministradorPage (){
    return (
        <Plantilla>
            <section className="admin">
                <h1>Panel de Administración</h1>
                <section className="admin__opciones">
                    <section className="admin__tarjeta">
                        <ImagenAdmin Etiqueta = "Administras Stock" 
                        imagen = {logo}
                        nombre = "Administrar stock "
                        className = "logo"/>
                        <nav> <Link to="/admin" className="admin__enlace" >Administrar STOCK</Link></nav>
                    </section>

                    <section className="admin__tarjeta">
                        <ImagenAdmin Etiqueta = "Revisar Stock Bajo"
                        imagen = {logo2}
                        nombre = "stock bajo "
                        className = "logo"/>
                        <nav><Link to="/admin2" className="admin__enlace">Revisar Stock</Link></nav>
                    </section>
                </section>
            </section>
        </Plantilla>
    )
}

export default AdministradorPage;