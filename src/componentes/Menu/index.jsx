/* Importações */

import estilos from "./Menu.module.css";

export default function Menu(){
    return(
        <nav className={estilos.nav_container}>
            <ul className={estilos.menu}>
                <li className={estilos.lista}><a href="#">Conheça-me</a></li>
                <li className={estilos.lista}><a href="#">Competências</a></li>
                <li className={estilos.lista}><a href="#">Projetos</a></li>
                <li className={estilos.lista}><a href="#">LinkedIn</a></li>
                <li className={estilos.lista}><a href="#">GitHub</a></li>
                <li className={estilos.lista}><a href="#sobre">Sobre...</a></li>
            </ul>
        </nav>
    );
}