import Etiqueta from "../atoms/etiqueta"
import Logo from "../atoms/Logo"
function Header (){
    return (
<header>
<logo/>
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