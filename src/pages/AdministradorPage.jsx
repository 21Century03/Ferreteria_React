import Plantilla from "../components/templates/PlantillaPublica" 
import ImagenAdmin from "../components/molecules/ImagenAdmin"
import { Link } from "react-router-dom"
import logo from "../assets/logos/tipos-de-stock.jpg"
import logo2 from "../assets/logos/low.png"
import "../Styles/AdministradorPAge.css"

function AdministradorPage (){
    return (
        <Plantilla>
            <h1 className="text-marca text-center mb-4">Panel de administración</h1>

            <section className="row g-4 justify-content-center">
                <section className="col-12 col-md-6 col-lg-5">
                    <ImagenAdmin
                        Etiqueta="Administrar stock"
                        imagen={logo}
                        nombre="Administrar stock"
                        className="logo rounded">
                        <Link to="/admin" className="btn btn-marca fw-bold px-4 py-2">Administrar stock</Link>
                    </ImagenAdmin>
                </section>

                <section className="col-12 col-md-6 col-lg-5">
                    <ImagenAdmin
                        Etiqueta="Revisar stock bajo"
                        imagen={logo2}
                        nombre="Stock bajo"
                        className="logo rounded bg-white p-2">
                        <Link to="/admin2" className="btn btn-marca fw-bold px-4 py-2">Revisar stock bajo</Link>
                    </ImagenAdmin>
                </section>
            </section>
        </Plantilla>
    )
}

export default AdministradorPage;