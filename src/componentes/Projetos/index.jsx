import estilos from "./Projetos.module.css";
import Link from "next/link";

// Importando Componente
import Card from "@/componentes/Card";
// Importando Imagens
import Padaria from "../../../public/sitePadaria320px.png";
import Clinica from "../../../public/siteClinica300px.png";

export default function Projetos(){
    return(
        <section className={estilos.secao_projetos} id="projetos">
            <h2 className={estilos.titulo_secao}>Alguns dos meus projetos.</h2>
        <div className={estilos.card_container}>
           
                <Card 
                    imagem = {Padaria}
                    nome = {'Padaria'}
                    texto = {'Minha primeira página! '}
                />
            
            
                <Card 
                    imagem = {Clinica}
                    nome = {'Clínica Médica'}
                    texto = {'Site de uma clinica. '}
            />
            
        </div>
        </section>
    );
}