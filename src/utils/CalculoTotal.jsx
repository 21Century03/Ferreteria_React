
const iva = 0.19;

export function total(Subtotal){
    return {
        total: Subtotal + (Subtotal * iva)
    }

}