/**
 * Página principal da aplicação
 */

//Importações
'use client'
import {useState} from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Menu from "@/componentes/Menu";
import Topo from "@/componentes/Topo"

export default function Home() {

  return(
    <main>
      <Menu />
      <h1>Página do Luiz Otávio</h1>
      
    </main>
  );
}
