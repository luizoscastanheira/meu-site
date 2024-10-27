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
import { FaNetworkWired } from "react-icons/fa";
import { SiWindows95 } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

// Importando imagens
import ImgSecao from "../../public/computadorcopy.jpg";
import img_html5 from "../../public/html5.png";
import img_css from "../../public/css.png";
import img_js from "../../public/js.png";
import img_react from "../../public/react.png";

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
            <li className={estilos.menu_item}><a href="#competencias" className={estilos.menu_link}>Competências</a></li>
            <li className={estilos.menu_item}><a href="#projetos" className={estilos.menu_link}>Projetos</a></li>
            <li className={estilos.menu_item}><a href="#sobre" className={estilos.menu_link}>Sobre Mim</a></li>
            <li className={estilos.menu_item}><a href="https://github.com/luizoscastanheira" target="_blank" className={estilos.menu_link}>GitHub</a></li>
            <li className={estilos.menu_item}><a href="https://www.linkedin.com/in/luiz-ot%C3%A1vio-da-silva-castanheira-19683696/" target="_blank" className={estilos.menu_link}>LinkedIn</a></li>
            <li className={estilos.menu_item}><a href="#contato" className={estilos.menu_link}>Contato</a></li>
          </ul>
        </nav>
        
    </header>
   
    
    <main className={estilos.main_container}>
      <h1>Analista de Sistemas e Programador Front-End</h1>
      <p>Bem-vindo à minha página pessoa! Aqui vamos nos conhecer umn pouco mais.</p>
      <p>
      "Nem os mais sábios pode ver o quadro todo." - Gandalf.
      </p>
      <Image src={ImgSecao} alt="Imagem da Sec" className={estilos.img_secao}/>
      
    </main>
    
    <section className={estilos.secao_competencias} id="competencias">
      <h2 className={estilos.titulo_secao}>Minhas Competências</h2>
      <div className={estilos.card_container}>
        
        <Card 
          imagem = {img_html5}
          nome = {'HTML'}
          texto = {'Certificado em HTML'}
        />
        <Card
          imagem = {img_css} 
          nome={'CSS'}
          texto={'Cerficado em CSS - Folhas de Estilo'}
        />
        <Card
          imagem = {img_js} 
          nome={'JavaScript'}
          texto={'Cerficado em JavaScript'}
        />
        <Card
          imagem = {img_react}
          nome = {'React JS'} 
          texto = {'Certificado em React.js.'}
        />
                      
      </div>
      
    </section>
    
    <section id="sobre" className={estilos.secao_sobre}>
        <h2>Aqui estou eu!</h2>
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

    <Projetos />
    <Rodape />
  </>
  
  );
}
