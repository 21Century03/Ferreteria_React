import Etiqueta from "../atoms/etiqueta"
function Item(prop){
  return  (<>
  <section>
<Etiqueta texto = {prop.nombre} />
<Etiqueta texto = {prop.precio}/>
<Etiqueta texto = {prop.stock}/>
</section>

</>
  )
}

export default Item