import LogoMaestro from "./assets/FerreteriaMestros.jpg"

/* Importar el logo logo.css etc del Header @Isahac*/
export const logo = ({alt = "Logo Ferretería Maestros"}) => {
    return (
        <div>
            <img src={LogoMaestro} alt={alt} />
        </div>
    );
}