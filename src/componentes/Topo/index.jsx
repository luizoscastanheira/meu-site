/**
 * Criando o componente Topo
 */
import Link from "next/link";
import estilos from "./Topo.module.css";

export default function Topo(){
    return(
        <header className={estilos.container_header}>

            <div className={estilos.container_topo}>
                <h1>
                    <code>&lt;h1&gt;Luiz Otávio&lt;/h1&gt;</code>
                </h1>
                <button>Menu</button>
                <nav className={estilos.menu}>
                    <ul>
                        <li>Home</li>
                        <li>Certificados</li>
                        <li>Projetos</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}