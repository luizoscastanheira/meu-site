import estilos from "./Projetos.module.css";
import Link from "next/link";

// Importando a Base de Dados
import dados from "@/data/dataProjetos.js";

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
import Cafeteria from "../../../public/siteCafeteria300px.png";
import Pousada from "../../../public/sitePousada300px.png";
import Cardapio from "../../../public/siteCardapio300px.png";
import Denise from "../../../public/siteDenise300px.png";

export default function Projetos(){
    return(
        <section className={estilos.secao_projetos} id="projetos">

        <h2 className={estilos.titulo_secao}>Projetos de Clientes</h2>
        <div className={estilos.card_container}>
                
                <div>
                    <a href="https://espacodenisewerneck.vercel.app/" target="_blank" title="Clique e Veja-me!">
                        <Card 
                            imagem = {Denise}
                            nome = {'Denise Werneck'}
                            texto = {'Site oficial do centro de Estética Denise Werneck, desenvolvido em React e componentes.'}
                        />
                    </a>
                </div>
        </div>

        <h2 className={estilos.titulo_secao}>Projetos Acadêmicos</h2>
        <div className={estilos.card_container}>
            {
                // Função de Dados
            }
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
                    nome = {'Imobiliária Santos'}
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
            <a href="https://testecafeteria.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Cafeteria}
                    nome = {'Cafeteria Manhattan'}
                    texto = {'Site de uma cafeteria. '}
                />
            </a>
            <a href="https://testepousada.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Pousada}
                    nome = {'Pousada Secreta'}
                    texto = {'Site de uma Pousada. '}
                />
            </a>
            <a href="https://testeclinicaportfolio.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Clinica}
                    nome = {'Clínica CM Life'}
                    texto = {'Site de uma clínica médica. Feito para aprimorar o uso do CSS e começar a trabalhar a responsividade. '}
                />
            </a>
            <a href="https://testealfatech.netlify.app/" target="_blank"  title="Clique e Veja-me!">
                <Card 
                    imagem = {Hospedagem}
                    nome = {'AlfaTech'}
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
                    nome = {'Óticas Vida'}
                    texto = {'Site de uma Ótica com uso de React e componentes.'}
                />
            </a>
            <a href="https://projeto-cardapio-one-mocha.vercel.app/" target="_blank" title="Clique e Veja-me!">
                <Card 
                    imagem = {Cardapio}
                    nome = {'Restaurante'}
                    texto = {'Site com o caradápio de um restaurante, com uso de React e componentes.'}
                />
            </a>
            
        </div>

        </section>
    );
}