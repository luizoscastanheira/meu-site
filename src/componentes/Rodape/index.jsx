/**
 * Criando o componente Rodapé
 */
import estilos from "./Rodape.module.css";
import Image from "next/image";
import { FcFaq } from "react-icons/fc";

export default function Rodape(){
    return(
        <footer id={estilos.footer_container}>
            <FcFaq id={estilos.icon_contato} />
            <div id={estilos.container_contato}>
            <h4>Luiz Otávio da Silva Castanheira</h4>
            <div id="contato">
                <p>E-mail: thelosc@proton.me</p>
                <p>WhatsApp: 24 981839564</p>
            </div>
            </div>
        </footer>
        
    );
}