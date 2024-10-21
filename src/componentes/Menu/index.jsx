/* Importações */

import estilos from "./Menu.module.css";

export default function Menu(){
    return(
        <nav className={estilos.nav_container}>
            <ul className={estilos.menu}>
                <li className={estilos.lista}><a href="#">Conheça-me</a></li>
                <li className={estilos.lista}><a href="#">Competências</a></li>
                <li className={estilos.lista}><a href="#">Projetos</a></li>
                <li className={estilos.lista}><a href="https://www.linkedin.com/in/luiz-ot%C3%A1vio-da-silva-castanheira-19683696/" target="_blank">LinkedIn</a></li>
                <li className={estilos.lista}><a href="https://github.com/luizoscastanheira" target="_blank">GitHub</a></li>
                <li className={estilos.lista}><a href="#sobre">Sobre...</a></li>
            </ul>
        </nav>
    );
}