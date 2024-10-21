/**
 * Criando o componente Card para uso com props
 */
import estilos from "./Card.module.css";
import Image from "next/image";

export default function Card(props){
    return(
        <div className={estilos.card}>
            <Image src={props.imagem}/>
            <h2>{props.nome}</h2>
            <p>{props.texto}</p>
        </div>
    );
}