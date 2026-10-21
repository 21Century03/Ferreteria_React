import Etiqueta from "../../atoms/Etiqueta/etiqueta";
import "./ImagenAdmin.css"

function ImagenAdmin (props){
    return (
        <section className="imagen-admin">
    <section className="imagen-admin__titulo">
    <Etiqueta  texto = {props.Etiqueta}/>
    </section>
    <section><img src={props.imagen} alt={props.nombre} className= {props.className} /></section>
    </section>)
}

export default ImagenAdmin;