import React, { useState } from "react";
import axios, {post} from 'axios'
import HeaderOne from '../header/index.js'
import './contato.css'

export default function Contato() {
//  
      return (
    <div>
    <HeaderOne></HeaderOne>
    <br></br>
   <div id="Texto">
       <p>O LibrasPTB é um aplicativo advindo de um projeto do IFRS Campus Rio Grande coordenado pela professora e doutora Raquel de Miranda Barbosa e desenvolvido por Adriele Colossi.</p>
       </div>
       <br></br>
       <div id="Contato">Contatos:<br></br>Email: librasptb@gmail.com</div>
       
     
    </div>
       );
      }
  