import Etiqueta from "../../atoms/Etiqueta/etiqueta";

function ImagenAdmin (props){
    return (
        <section>
    <section>
    <Etiqueta  texto = {props.Etiqueta}/>
    </section>
    <section><img src={props.imagen} alt={props.nombre} className= {props.className} /></section>
    </section>)
}

export default ImagenAdmin;