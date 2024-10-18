/**
 * Criando o componente Topo
 */
'use client'
import { useState } from "react";
import Link from "next/link";
import estilos from "./Topo.module.css";

export default function Topo(){
// Criando uma variável de estado
const [menuAtivo, setMenuAtivo] = useState(false);
// Criando a função que comandará o botão no evento onClick
function ativar_menu(){
  setMenuAtivo(!menuAtivo);
  console.log('Opa! Botão clicado!')
  console.log(menuAtivo)
}
   

    return(
        <header className={estilos.container_header}>

            <div className={estilos.container_topo}>
                <button className={estilos.botao_menu} onClick={ativar_menu}>Menu</button>
                <h1>
                    <code>&lt;h1&gt;Luiz Otávio - Analista de Sistemas && Dev Front-end&lt;/h1&gt;</code>
                </h1>
            </div>
             
        </header>
        
    );
}