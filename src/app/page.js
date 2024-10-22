/**
 * Página principal da aplicação
 */

//Importações
'use client';
import {useState} from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Menu from "@/componentes/Menu";
import Rodape from "@/componentes/Rodape";
import Card from "@/componentes/Card";

// Importando icones
import { TiThMenu, TiThMenuOutline } from "react-icons/ti";

// Importando imagens
import ImgSecao from "../../public/computadorcopy.jpg";

export default function Home() {

// Criando a variavel de estado
const [menuVisivel, setMenuVisivel] = useState(false);

// criando uma funçao para ativiar/destivar o menu
function toggleMenu(){
  setMenuVisivel(!menuVisivel);
  console.log(menuVisivel)
}

  return(
  <>
    
    <header className={estilos.container_header}>
        <div className={estilos.container_topo}>
          <button className={estilos.botao_menu} onClick={toggleMenu}>{menuVisivel ? <TiThMenuOutline/> : <TiThMenu/>}</button>
          <h1>
            <code>&lt;h1&gt;  Luiz Otávio  &lt;/h1&gt;</code>
          </h1>
        </div>
        
    </header>
      {menuVisivel && <Menu />}

    <main className={estilos.main_container}>
      <h1>Analista de Sistemas e Programador Front-End</h1>

      <section className={estilos.conteudo}>
        <p>
          Não é fácil falar de si mesmo sem parecer "amostradinho", mas posso dizer
          que em boa parte da minha vida profissional fui autodidata, especialmente ao trabalhar com sistemas operacionais Windows 
          e Linux.
        </p>
        <p>
          Descidi aprender programação e junto fazer minha graduação em Análise e Desenvolvimento de
          Sistemas, cursos aos quais tenho dedicado tempo desde o final de 2022.
        </p>
        <p>
          Posso me apresentar como alguem dedicado, que gosta do que faz e que está em constante
          aprendizado na busca de solucionar problemas.
        </p>
      </section>
      
      <Image src={ImgSecao} alt="Imagem da Sec" className={estilos.img_secao}/>
      
    </main>

    <section id={estilos.secao_competencias}>
      <div className={estilos.card_container}>
        <Card 
          nome={'HTML'}
          texto={'Certificado em HTML'}
        />
        <Card 
          nome={'CSS'}
          texto={'Cerficado em CSS - Folhas de Estilo'}
        />
        <Card 
          nome={'JavaScript'}
          texto={'Cerficado em JavaScript'}
        />
      </div>
    </section>

    <Rodape />
  </>
  
  );
}
