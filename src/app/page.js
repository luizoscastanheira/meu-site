/**
 * Página principal da aplicação
 */

// Importações
import Image from "next/image";
import estilos from "./page.module.css";

// Importando Componentes
import Rodape from "@/componentes/Rodape";
import Card from "@/componentes/Card";
import Projetos from "@/componentes/Projetos";

// Importando icones
import { DiReact} from "react-icons/di";
import { PiFileHtml, PiFileCss, PiFileJs} from "react-icons/pi";
import { FaNetworkWired, FaGithub  } from "react-icons/fa";
import { SiWindows95 } from "react-icons/si";
import { FcLinux, FcContacts } from "react-icons/fc";
//import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGears } from "react-icons/fa6";
//import { FcContacts } from "react-icons/fc";
import { FiUserCheck } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";


// Importando imagens
import ImgSecao from "../../public/computadorcopy.jpg";
import img_html5 from "../../public/icons8-html-logo-144.png";
import img_css from "../../public/icons8-css-logo-144.png";
import img_js from "../../public/icons8-javascript-144.png";
import img_react from "../../public/icons8-react-144.png";
import img_levantamento from "../../public/levantamento.png";
import img_python from "../../public/icons8-python-144.png";
import img_algoritmo from "../../public/alg.png";
import img_sql from "../../public/SQL.png";
import img_mysql from "../../public/icons8-mysql-logo-144.png";
import img_Node from "../../public/nodejs.png";
import img_REST from "../../public/rest144.png";

export default function Home() {

  return(
  <>
    
    <header className={estilos.container_header}>
        <div className={estilos.container_topo}>
          <h1>
            <code>&lt;h1&gt;  Luiz Otávio  &lt;/h1&gt;</code>
          </h1>
          <div>
            <PiFileHtml className={estilos.icons_topo}/>
            <PiFileCss className={estilos.icons_topo}/>
            <PiFileJs className={estilos.icons_topo}/>
            <DiReact className={estilos.icons_topo}/>
            <FaNetworkWired className={estilos.icons_topo}/>
            <SiWindows95 className={estilos.icons_topo}/>
            <FcLinux className={estilos.icons_topo}/>
          </div>
        </div>
        <nav className={estilos.nav_container}>
          <ul className={estilos.lista_menu}>
            <li className={estilos.menu_item}><a href="#competencias" className={estilos.menu_link}><GiSkills /> Skills</a></li>
            <li className={estilos.menu_item}><a href="#projetos" className={estilos.menu_link}><FaGears /> Projetos</a></li>
            <li className={estilos.menu_item}><a href="#sobre" className={estilos.menu_link}><FiUserCheck /> Sobre Mim</a></li>
            <li className={estilos.menu_item}><a href="https://github.com/luizoscastanheira" target="_blank" className={estilos.menu_link}><FaGithub /> GitHub</a></li>
            <li className={estilos.menu_item}><a href="https://www.linkedin.com/in/luiz-ot%C3%A1vio-da-silva-castanheira-19683696/" target="_blank" className={estilos.menu_link}><CiLinkedin /> LinkedIn</a></li>
            <li className={estilos.menu_item}><a href="#contato" className={estilos.menu_link}><MdOutlineContactPhone /> Contato</a></li>
          </ul>
        </nav>
        
    </header>
       
    <main className={estilos.main_container}>
      <h1>Estudante em Análise de Sistemas e Programação Front-End</h1>
      <p>Bem-vindo à minha página pessoal! Aqui vamos nos conhecer um pouco mais.</p>
      <p>
      "Não se apresse em julgar, nem os mais sábios podem ver o quadro todo." - Gandalf.
      </p>
      <Image src={ImgSecao} alt="Imagem da Sec" className={estilos.img_secao}/>
      
    </main>

    <section id="sobre" className={estilos.secao_sobre}>
        <h2>Aqui estou eu!</h2>
        <p>
          Não é fácil falar de si mesmo sem parecer "amostradinho", mas posso dizer
          que em boa parte da minha vida profissional fui autodidata, especialmente ao trabalhar com administração de sistemas operacionais e redes Windows 
          e Linux bem como no suporte técnico.
        </p>
        <p>
          Sou graduado em Análise e Desenvolvimento de Sistemas pela Universidade de Vassouras desde Abril de 2025, um sonho antigo realizado e  
          atualmente estudo para me tornar um desenvolvedor web full stack, algo que também me atrai, programar, ha bastante tempo e só agora pude dedicar-me a isso.
        </p>
        <p>
          Posso me apresentar como alguem dedicado, que gosta do que faz e que está em constante
          aprendizado na busca de solucionar problemas.
        </p>
      
    </section>

    <Projetos />
    
    <section className={estilos.secao_competencias} id="competencias">
      <h2 className={estilos.titulo_secao}>Minhas Competências - Clique para abrir o Certificado</h2>
      <div className={estilos.card_container}>
        <a href="https://www.devmedia.com.br/certificado/tecnologia/levantamento-de-requisitos/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
          <Card 
            imagem = {img_levantamento}
            nome = {'Levantamento de Requisitos'}
            texto = {'Certificado em Levantamento de Requisitos para desenvolvimento de aplicações.'}
          />
        </a>
        <a href="https://www.devmedia.com.br/certificado/tecnologia/html/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
          <Card 
            imagem = {img_html5}
            nome = {'HTML'}
            texto = {'Certificado em HTML'}
          />
        </a>
        <a href="https://www.devmedia.com.br/certificado/tecnologia/css/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
          <Card
            imagem = {img_css} 
            nome={'CSS'}
            texto={'Certificado em CSS - Folhas de Estilo'}
          />
        </a>
        <a href="https://www.devmedia.com.br/certificado/tecnologia/algoritmo/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
        <Card
          imagem = {img_algoritmo}
          nome = {'Algoritimo'} 
          texto = {'Certificado em desenvolvimento de algoritmos para programação.'}
        />
        </a> 
        <a href="https://www.devmedia.com.br/certificado/tecnologia/javascript/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
          <Card
            imagem = {img_js} 
            nome={'JavaScript'}
            texto={'Cerficado em JavaScript'}
          />
        </a>
        <a href="https://www.devmedia.com.br/certificado/tecnologia/react/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
        <Card
          imagem = {img_react}
          nome = {'React JS'} 
          texto = {'Certificado em React.js.'}
        />
        </a>
              
        <a href="https://www.devmedia.com.br/certificado/tecnologia/rest/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
        <Card
          imagem = {img_REST}
          nome = {'REST'} 
          texto = {'Certificado em REST na contrução de API.'}
        />
        </a>

        <a href="https://www.devmedia.com.br/certificado/tecnologia/node-js/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
        <Card
          imagem = {img_Node}
          nome = {'Node JS'} 
          texto = {'Certificado em Node.JS para trabalho em back-end.'}
        />
        </a>

        <a href="https://www.devmedia.com.br/certificado/tecnologia/python/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
        <Card
          imagem = {img_python}
          nome = {'Linguagem Python'} 
          texto = {'Certificado em programação em linguagem Python.'}
        />
        </a>

        {/*
        <a href="https://www.devmedia.com.br/certificado/tecnologia/sql/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
        <Card
          imagem = {img_sql}
          nome = {'Linguagem SQL'} 
          texto = {'Introdução à Linguagem SQL em Bancos de Dados.'}
        />
        </a>
        */}
        <a href="https://www.devmedia.com.br/certificado/tecnologia/mysql/luiz-otavio-da-silva-castanheira" target="_blank" title="Clique e Veja-me!" className={estilos.link_cards}>
        <Card
          imagem = {img_mysql}
          nome = {'MySQL'} 
          texto = {'Sistema de Gerenciamento de Banco de Dados Relacional.'}
        />
        </a>         
      </div>
      
    </section>
    
    

    
    <Rodape />
  </>
  
  );
}
