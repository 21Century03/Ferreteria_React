import Etiqueta from "../atoms/etiqueta"
import Selector from "../atoms/Selector"

function SelectorDesp (props
){
    return( 
    <section>
    <p className="mb-2"><Etiqueta texto = {props.etiqueta}/></p>  
    <Selector 
    id={props.id}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    className={props.className}>
        <option value="">Seleccione una opción</option>
        <option value="despacho">Despacho a domicilio</option>
        <option value="retiro">Retiro en tienda</option>
    </Selector>


 </section>)

  
}

export default SelectorDesp;