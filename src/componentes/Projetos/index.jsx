import estilos from "./Projetos.module.css";
import Link from "next/link";

// Importando Componente
import Card from "@/componentes/Card";
// Importando Imagens
import Padaria from "../../../public/sitePadaria320px.png";
import Clinica from "../../../public/siteClinica300px.png";
import Agencia from "../../../public/siteAgencia300px.png";
import Otica from "../../../public/siteOtica300px.png";
import Receita from "../../../public/siteReceitaDeBolo300px.png";
import Imobiliaria from "../../../public/siteImobiliaria300px.png";
import Hospedagem from "../../../public/siteHospedagem300px.png";
import PetBoutique from "../../../public/sitePetBoutique300px.png";

export default function Projetos(){
    return(
        <section className={estilos.secao_projetos} id="projetos">
            <h2 className={estilos.titulo_secao}>Alguns dos meus projetos - ainda em construção!!!</h2>
        <div className={estilos.card_container}>
            <a href="https://testereceitadebolo.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Receita}
                    nome = {'Receita de Bolo'}
                    texto = {'Minha primeira página! Puro HTML e CSS para um delicioso bolo de chocolate.'}
                />
            </a>
           <a href="https://testepadaria.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Padaria}
                    nome = {'Padaria-Plus'}
                    texto = {'Minha segunda página! Puro HTML e CSS só que um pouco "açucarada".'}
                />
            </a>
            <a href="https://testeimobiliariasantos.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Imobiliaria}
                    nome = {'Imobiliária'}
                    texto = {'Site de uma Imobiliária. Feito para aprimorar a formatação e estruturação. '}
                />
            </a>
            <a href="https://testepetboutique.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {PetBoutique}
                    nome = {'Pet Boutique'}
                    texto = {'Site de um Pet Shop. '}
                />
            </a>
            <a href="https://testeclinicaportfolio.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Clinica}
                    nome = {'Clínica Médica'}
                    texto = {'Site de uma clínica médica. Feito para aprimorar o uso do CSS e começar a trabalhar a responsividade. '}
                />
            </a>
            <a href="https://testealfatech.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Hospedagem}
                    nome = {'Hospedagem de Sites'}
                    texto = {'Site de uma empresa de Tecnologia especializada em hospedagem de sites.'}
                />
            </a>
            <a href="https://testeagenciaportfolio.netlify.app/" target="_blank" title="Clique e Veja-me!">
                <Card 
                    imagem = {Agencia}
                    nome = {'Agência de Viagens'}
                    texto = {'Site de uma Agência de Viagens para teste com formulários.'}
                />
            </a>
            <a href="https://otica-three.vercel.app/" target="_blank" title="Clique e Veja-me!">
                <Card 
                    imagem = {Otica}
                    nome = {'Site da Ótica'}
                    texto = {'Site de uma Ótica com uso de React e componentes.'}
                />
            </a>
        </div>
        </section>
    );
}