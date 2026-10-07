import Etiqueta from "../atoms/etiqueta"

function Header (){
    return (
<header>

<nav>
    <ul>
        <li> <Etiqueta texto = "inicio" /></li>
        <li> <Etiqueta texto = "productos"/></li>
        <li><Etiqueta texto = "Quienes somos "/></li>
    </ul>
</nav>
</header>
    )
}
export default Header