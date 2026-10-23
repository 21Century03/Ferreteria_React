import Etiqueta from "../atoms/etiqueta";

function ImagenAdmin (props){
    return (
        <section className="card panel-marca h-100 text-center p-4 align-items-center gap-3">
            <h2 className="h5 text-marca mb-0"><Etiqueta texto={props.Etiqueta} /></h2>
            <img src={props.imagen} alt={props.nombre} className={props.className} />
            {props.children}
        </section>
    )
}

export default ImagenAdmin;