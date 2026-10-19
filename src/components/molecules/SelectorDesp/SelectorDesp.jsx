
import Etiqueta from "../../atoms/Etiqueta/etiqueta"
import Selector from "../../atoms/selector/Selector"

function SelectorDesp (props
){
    return( 
    <section>
    <p><Etiqueta texto = {props.etiqueta}/></p>  
    <Selector 
    id={props.id}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    className={props.className}>

        <option value="despacho">Despacho a domicilio</option>
        <option value="retiro">Retiro en tienda</option>
    </Selector>


 </section>)

  
}

export default SelectorDesp;