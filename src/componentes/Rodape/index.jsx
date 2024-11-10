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
            <h4>Feito por: Luiz Otávio</h4>
            <div id="contato">
                <p>E-mail: <a href="mailto:thelos@proton.me">thelosc@proton.me</a></p>
                <p>WhatsApp: <a href="https://wa.me/5524981839564" target="_blank">24 981839564</a></p>
            </div>
            </div>
        </footer>
        
    );
}