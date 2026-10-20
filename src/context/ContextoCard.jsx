import { createContext, useState, useContext } from 'react';

export const contextoCard = createContext();
 
export function ProveedorCarrito({children}) {
    const [carrito, setCarrito] = useState([])

    function agregarProducto(producto, cantidad = 1){
        setCarrito((prev) => {
            const existe = prev.some((item) => item.id === producto.id);
            
                if (existe) {
                    
                    return prev.map((item) =>{
                        if(item.id === producto.id){
                            /* Se aplica un Spreed para copiar los valores del item en cuestion*/
                            return {...item,cantidad: item.cantidad + cantidad};
                        } else{
                            return item;
            
                        }
                    })
                }
                return [...prev, { ...producto,cantidad: cantidad}]
        })
    }

    function eliminarProducto(id){
        setCarrito((prev) => {
            return prev.filter((item) => item.id !== id)
        });
    }

    function restarProducto(id, cantidad =1){
        setCarrito((prev) => {
            /*Verificar Lee el Arreglo y con el map y su return con el filter 
            retorna que la cantidad del item no pueda ser menor a 0 ya que 
            no deberia poder restar un item si la cantidad del mismo es menor a 0*/
            const verificar = prev.map((item) => {
                    if (item.id === id){
                        return {...item, cantidad: item.cantidad - cantidad }
                    
                    } else{
                        return item;
                    }
                })
            
                

            return verificar.filter((item) => item.cantidad > 0)    
        })
        
    }

    return(

        <contextoCard.Provider
         value ={{
            carrito,
            agregarProducto,
            eliminarProducto,
            restarProducto
            }}>

            {children}

         </contextoCard.Provider>
    )
        

}

export function useCard(){
    const contexto = useContext(contextoCard)
    return(
        contexto
    )
}
