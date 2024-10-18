/* Importações */

import estilos from "./Menu.module.css";

export default function Menu(){
    return(
        <nav className={estilos.nav_container}>
            <ul className={estilos.menu}>
                <li className={estilos.lista}><a href="#competencias">Competências</a></li>
                <li className={estilos.lista}><a href="#projetos">Projetos</a></li>
                <li className={estilos.lista}><a href="#contatos">Contato</a></li>
                <li className={estilos.lista}><a href="#sobre">Sobre</a></li>
            </ul>
        </nav>
    );
}