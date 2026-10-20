import Plantilla from "../components/templates/PlantillaPublica" 
import ImagenAdmin from "../components/molecules/ImagenAdmin/ImagenAdmin"
import { Link } from "react-router-dom"
import logo from "../assets/logos/tipos-de-stock.jpg"
import logo2 from "../assets/logos/low.png"
import "./AdministradorPAge.css"
function AdministradorPage (){
    return (
        <Plantilla>
            <ImagenAdmin Etiqueta = "Administras Stock" 
            imagen = {logo}
            nombre = "Administrar stock "
            className = "logo"/>
            
            <nav> <Link to="/admin" >Administrar STOCK</Link></nav>
           

            <ImagenAdmin Etiqueta = "Revisar Stock Bajo"
            imagen = {logo2}
            nombre = "stock bajo "
            className = "logo"/>
            
            <nav><Link to="/admin2">Revisar Stock</Link></nav>

        </Plantilla>
    )
}

export default AdministradorPage;